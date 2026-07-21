# ADR-0002: Static export as artifact; AWS for dev/preview, manual non-AWS production

**Status:** Proposed
**Date:** 2026-07-20 (rev. 2026-07-20)
**Deciders:** Oleg Kalenskyy

## Context
The site is a Next.js 15 **static export** (`output: 'export'`,
`trailingSlash: true`, `images: { unoptimized: true }`) — the build produces a
folder of static files (`out/`) with no server runtime. There are **two distinct
deployment targets**, and this ADR records that split:

- **Development / preview** runs on AWS: the `out/` export is synced to a private
  S3 bucket and served through CloudFront (ACM cert, Route53 DNS, GitHub Actions
  deploy via OIDC) at **`v53ai.kalenskyy.com`**. All of this is codified in
  Terraform under `infra/`. This environment exists for review and staging only.
- **Production** is **`v53ai.eu`**, hosted on a **non-AWS web server** and
  **deployed manually** (owner's decision). It is not managed by the Terraform in
  this repo and is not part of the GitHub Actions → S3 pipeline.

Because both targets serve the *same* static export, the build artifact is
portable; what differs is only how the files are shipped and served. The
refactor adds routes (legal pages) and new sections but introduces no backend
(the contact form is scoped out — ADR-0006), so a pure static host remains
sufficient on both sides.

## Decision
Keep the **static export as the single deployable artifact** and run a
**two-environment** model:

1. **Dev/preview on AWS (Terraform-managed):** unchanged. GitHub Actions builds
   and syncs `out/` to S3, invalidates CloudFront, serving `v53ai.kalenskyy.com`.
   Terraform's scope is limited to this environment.
2. **Production on a non-AWS server (manual):** the same `out/` export is
   uploaded to the production web server by hand (e.g. rsync/scp/SFTP or the
   host's file manager) and served as static files at `v53ai.eu`. No SSR, no
   Next server, no serverless runtime.

To keep the two environments behaviourally identical, the **production web
server must reproduce three things CloudFront currently provides**:
- **Clean-URL / trailing-slash resolution** — map `/foo/` → `/foo/index.html`
  (the CloudFront `index_rewrite` function's job). On nginx this is
  `try_files $uri $uri/ $uri/index.html =404;` or equivalent; on Apache, a
  `DirectoryIndex`/rewrite rule. This is required for the App-Router routes to
  resolve since `trailingSlash: true` emits folder/`index.html` pairs.
- **HTTPS/TLS** with a valid certificate for `v53ai.eu` (and `www`).
- **Sensible caching headers** — long cache for hashed `/_next/static/*`
  immutable assets, short/no-cache for HTML — plus a 404 page mapping.

The exact production server stack (nginx/Apache/Caddy/managed static host) is an
open input (see ADR-0009 and the artefacts list); this ADR fixes the *artifact
and the requirements*, not the specific server product.

## Options Considered

### Option A: Static export; AWS dev/preview + manual non-AWS prod (chosen)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low build; Low–Med prod (manual step + server config once) |
| Cost | Very low (S3/CloudFront dev; prod server already chosen by owner) |
| Portability | High — one artifact serves both targets |
| Sovereignty | Owner-controlled prod host; no PaaS lock-in |
| Risk | Manual prod deploy is human-error-prone (mitigated by a runbook + checksum/diff) |

**Pros:** matches the owner's hosting decision; keeps a cheap AWS preview for
review; no runtime to secure/patch anywhere; artifact is identical across envs.
**Cons:** manual production deploys have no automatic rollback/invalidation —
needs a written runbook and discipline; the CloudFront-equivalent rewrite must be
configured on the prod server or routes 404.

### Option B: Promote AWS to production too (S3/CloudFront serves v53ai.eu)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low (already built) |
| Automation | High (CI deploy) |

**Pros:** automated deploys, edge cache, easy rollback/invalidation.
**Cons:** contradicts the owner's decision to host production off AWS. Not
adopted. (Recorded so the trade-off is explicit — automation is what the manual
model gives up.)

### Option C: SSR / Next server on the prod host
Rejected for the same reasons as the original ADR: no dynamic requirement
justifies a runtime; a static host is cheaper, safer, and portable. Forms, if
ever needed, are handled per ADR-0006 (and would have to target the prod host's
own capabilities, not AWS Lambda — see that ADR's revised note).

## Trade-off Analysis
The static artifact is the constant; the only real trade the two-environment
model makes is **automation for host control**. Production loses CI/CD
convenience and edge caching but gains the owner's preferred, non-AWS hosting.
The main risk — a fragile manual deploy — is cheaply mitigated by a short deploy
runbook, a build checksum/diff against what's live, and replicating the
clean-URL rewrite once in the server config.

## Consequences
- **Easier:** production hosting is fully under the owner's control; dev/preview
  stays cheap and automated; the same build runs everywhere.
- **Harder:** no automated production rollout, invalidation, or rollback; the
  prod server needs one-time config to match CloudFront's URL rewriting and
  caching; releases depend on a manual, documented process.
- **Revisit:** if manual deploys become error-prone or frequent, add a minimal
  CI step that rsyncs `out/` to the prod server over SSH (still non-AWS), or
  reconsider hosting. Any dynamic feature needs a deliberate, host-appropriate
  add-on.

## Action Items
1. [ ] Confirm the production server stack (nginx/Apache/Caddy/managed) — input
   needed (artefacts list); then document its clean-URL + caching config.
2. [ ] Write a **production deploy runbook**: build (`npm ci && npm run build`) →
   verify `out/` → upload to prod (rsync/scp/SFTP) → smoke-test routes + 404.
   Prefer shipping the **CI-built** `out/` to avoid local build drift.
3. [ ] Configure the prod server to resolve `/foo/` → `/foo/index.html` and to
   set immutable caching on `/_next/static/*`.
4. [ ] Keep Terraform/CI scoped to the `v53ai.kalenskyy.com` dev/preview env only.
5. [ ] Confirm new legal routes export as folder + `index.html` and resolve on
   both the CloudFront dev host and the prod server config.
