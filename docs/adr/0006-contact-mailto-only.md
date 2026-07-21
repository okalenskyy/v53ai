# ADR-0006: Keep contact mailto-only; defer forms

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy

## Context
The only conversion mechanism today is a `mailto:` link, and it is presented
incorrectly: nav, hero and mobile buttons read **"Call us →"** but open an
email, and no phone number exists anywhere. That is a broken promise at the most
important touchpoint. The prior reviews recommended a real contact form (name,
org, workload, capacity, timeline), which for a static export (ADR-0002) would
require an external form provider or a serverless endpoint. The owner has chosen
to **keep mailto-only** for this milestone and defer forms.

## Decision
Keep email as the sole conversion channel, done correctly:

- **Fix the label/behaviour mismatch.** Rename the CTA to honest,
  audience-neutral language — **"Talk to us"** as the general CTA and **"Reserve
  capacity"** where the ask is capacity — and remove all "call"/phone wording,
  since no phone exists. (Balanced-audience decision: no single hard CTA.)
- **One canonical email**, resolved from `content/site.ts`. Decide between
  `call@v53ai.eu` (repo) and `contact@v53ai.eu` (live) — they currently differ.
- **Add the LinkedIn company URL** to nav/contact/footer (`sameAs` in schema,
  ADR-0007). B2B buyers check it within seconds.
- Keep the "we come back within two working days" commitment.
- **Explicitly no backend, no third-party form** this milestone.

## Options Considered

### Option A: mailto-only, corrected + LinkedIn (chosen)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Very low |
| Cost | None |
| Sovereignty | Perfect — no third-party processor |
| Conversion friction | Higher — email is a bigger ask than a form |

**Pros:** zero infra; no data processor to disclose; fastest to ship; fixes the
credibility-breaking mismatch immediately.
**Cons:** email converts worse than a structured form; no lead capture/CRM;
no scoping fields.

### Option B: owner-controlled function endpoint on the production host (or its provider)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Medium (endpoint + mail relay + spam protection) |
| Cost | Low |
| Sovereignty | High — stays on the owner's EU/non-AWS prod host |
| Conversion | Best — structured scoping fields |

**Pros:** on-brand, sovereign, best conversion, no third party.
**Cons:** real build (endpoint, spam protection, mail relay/SMTP, deploy); more
than the owner wants now. Note: production is a **non-AWS** static host
(ADR-0002), so a form endpoint must target that host's own capability (a small
function/CGI, the provider's form/mail feature, or a separate owner-run EU
service) — **not** AWS Lambda, and **not** a US SaaS form. **This is the
preferred path if/when forms are added.**

### Option C: third-party EU form provider (Tally EU / Formspark)
**Pros:** fast, no infra.
**Cons:** adds a data processor to disclose (contradicts the sovereignty
message); external dependency. Rejected for this brand.

## Trade-off Analysis
The owner has weighed conversion against speed/sovereignty and chosen the
minimum that removes the broken promise. The genuine cost is lower conversion,
accepted for now. Option B is the sanctioned upgrade path precisely because it
keeps data in-house; Option C is ruled out on brand grounds.

## Consequences
- **Easier:** ship now; nothing to secure or disclose; sovereignty story intact.
- **Harder:** no structured leads; scoping happens over email round-trips;
  measuring inbound is manual.
- **Revisit trigger:** when email round-trips become a bottleneck or lead volume
  justifies capture — then implement Option B on the production (non-AWS) host or
  a separate owner-run EU service, and write a superseding ADR (and update the
  privacy policy to cover the new data).

## Action Items
1. [ ] Replace all "Call us"/phone copy with "Talk to us" / "Reserve capacity".
2. [ ] Pick the canonical email; set it once in `content/site.ts`.
3. [ ] Add LinkedIn company URL to nav/contact/footer.
4. [ ] Ensure no button labelled "call" resolves to email (DoD item).
