# ADR-0009: Environment topology and canonical domain (dev vs production)

**Status:** Proposed
**Date:** 2026-07-20 (rev. 2026-07-20)
**Deciders:** Oleg Kalenskyy

## Context
There are two environments, on two different hosting stacks, at two different
domains (see ADR-0002):

- **`v53ai.kalenskyy.com`** — the **development/preview** host on AWS
  (S3 + CloudFront), managed by the Terraform in `infra/` (ACM cert, Route53
  records, GitHub OIDC deploy role all wired to the `kalenskyy.com` hosted zone).
- **`v53ai.eu`** — **production**, on a **non-AWS web server**, deployed
  manually. Not managed by this repo's Terraform.

This split matters for SEO and for every absolute URL the site emits.
ADR-0007 needs a single canonical origin for `metadataBase`, `canonical` tags,
OpenGraph/Twitter image URLs and JSON-LD `url` fields. If the dev host is
indexable or absolute URLs point at the wrong environment, search signals split
and social unfurls break. Previously the Terraform default `site_domain` and the
public brand disagreed; the resolution now follows the environment split rather
than trying to make one host serve both roles.

## Decision
Treat the two domains as **environment boundaries**, with **`v53ai.eu` as the
sole canonical production host**:

- **Terraform manages only the dev/preview domain** `v53ai.kalenskyy.com`. Its
  `site_domain`/zone variables stay pointed at the `kalenskyy.com` zone. No
  attempt is made to bring `v53ai.eu` under this Terraform.
- **`v53ai.eu` DNS points at the non-AWS production server.** Certificate,
  records and any redirects for `v53ai.eu` are managed **where that server/domain
  is hosted**, not in this repo's `infra/`. Record the registrar/DNS provider and
  TLS approach in the deploy runbook (ADR-0002).
- **Canonical = `https://v53ai.eu`** (recommend apex; `www.v53ai.eu` 301 →
  apex). All `metadataBase`, `canonical`, OG absolute URLs and JSON-LD `url`
  fields point at production `v53ai.eu` **regardless of which environment the
  build is served from** — so a page previewed on the dev host still declares the
  production canonical.
- **The dev/preview host is kept out of the index.** Serve
  `v53ai.kalenskyy.com` with `X-Robots-Tag: noindex` (CloudFront response-headers
  policy) or an equivalent, so the preview never competes with production in
  search. Do **not** rely on the canonical alone to hide it.

## Options Considered

### Option A: env-split, v53ai.eu canonical, dev host noindex (recommended)
**Pros:** clean separation of concerns (Terraform owns dev, the prod host owns
prod); one unambiguous canonical that matches the brand and what people share;
`.eu` reinforces the EU-sovereignty positioning; preview can't pollute search.
**Cons:** absolute URLs are hard-pinned to production, so the dev preview's own
links/canonical point at prod (acceptable and intended for a preview env); TLS/
DNS for `v53ai.eu` live outside this repo and must be documented separately.

### Option B: make canonical the dev host (`v53ai.kalenskyy.com`)
**Pros:** everything already in Terraform.
**Cons:** the public brand and production are `v53ai.eu`; a `kalenskyy.com`
canonical is off-brand, confuses search, and undercuts the sovereignty story.
Rejected.

### Option C: index both hosts / no canonical
Rejected — duplicate content across two environments, split ranking signals, and
inconsistent unfurls depending on which host was shared.

## Trade-off Analysis
Aligning the canonical to the production brand domain is non-negotiable for SEO
and sharing; the only real question was whether Terraform should try to own
`v53ai.eu`, and the answer is no — production is deliberately off AWS, so its DNS/
TLS belong with the prod host. Pinning absolute URLs to production and
`noindex`-ing the preview keeps the two environments from interfering.

## Consequences
- **Easier:** every absolute-URL decision downstream (ADR-0007) is unambiguous;
  search and shares consolidate on `v53ai.eu`; `.eu` supports the brand;
  dev/prod concerns are cleanly separated.
- **Harder:** `v53ai.eu` TLS/DNS/redirects are managed outside this repo and must
  be captured in the runbook; the dev host needs an explicit `noindex` header;
  contributors must remember absolute URLs always mean production.
- **Revisit:** if production ever moves (host change) or additional TLDs are
  added, update the runbook and this ADR.

## Action Items
1. [ ] Keep Terraform `site_domain` = `v53ai.kalenskyy.com`; confirm it is
   labelled/treated as dev/preview only.
2. [ ] Add a `noindex` response header (or equivalent) to the dev/preview host.
3. [ ] Document `v53ai.eu` registrar/DNS/TLS + `www`→apex redirect in the deploy
   runbook (ADR-0002); confirm DNS points at the non-AWS prod server.
4. [ ] Set `metadataBase`/canonical/OG/JSON-LD `url` to `https://v53ai.eu` for all
   builds (ADR-0007).
5. [ ] Verify a production unfurl (LinkedIn/Slack) resolves the OG image from
   `v53ai.eu`.
