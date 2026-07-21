# ADR-0005: Add static legal/compliance pages and legal-entity disclosure

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy (+ legal review recommended)

## Context
The site markets itself as "GDPR native by design" and sells EU sovereignty to
regulated industries, yet it has **no privacy policy, no cookie statement, no
imprint/colofon, and no legal-entity details** (registered name, KvK number,
registered address). For a Netherlands B.V. this is both a credibility
contradiction (the core value proposition is undercut by the site's own
non-compliance) and a legal gap: Dutch/EU practice expects identifiable
publisher details, and GDPR expects a privacy notice wherever personal data
(even an email in a mailto flow, or server logs) is processed. The two prior
reviews both flagged this as the single highest-priority fix.

## Decision
Add three statically-exported routes and wire them into the footer:

- `/privacy/` — privacy policy: who the controller is, what data is processed
  (contact emails, CloudFront/S3 access logs if any), lawful basis, retention,
  data-subject rights, controller contact.
- `/cookies/` — cookie statement. If the site sets only strictly-necessary /
  functional cookies and runs **no** analytics/marketing pixels, state exactly
  that (no consent banner legally required). If analytics is later added, a
  consent mechanism becomes required — noted below.
- `/imprint/` (colofon) — legal entity: registered company name (MCPV … B.V.),
  **KvK number**, registered address, contact email, and the "operated by MCPV ·
  NODUM AI Competence Hub" relationship.

Entity/legal facts are supplied by the owner (artefact list). Where a fact is
not yet available, ship with a clearly-tracked `TODO(entity)` and treat the
imprint as a **release blocker for the legal go-live** — but do not block the
rest of the site. Content should have a legal review before publication;
templated text is a starting draft, not legal advice.

## Options Considered

### Option A: three dedicated static pages (recommended)
**Pros:** clear, conventional, crawlable, satisfies imprint/privacy/cookie
expectations independently; each linkable.
**Cons:** three pages to maintain; needs real entity data + a legal review.

### Option B: single combined "Legal" page with anchors
**Pros:** less surface; one link.
**Cons:** imprint and privacy have different audiences and legal weight;
combining reads as an afterthought; harder to reference a specific policy.

### Option C: defer legal to a later milestone
**Pros:** faster ship of the marketing content.
**Cons:** leaves the central contradiction live (sovereignty brand with no
privacy policy). Unacceptable given the positioning. Rejected.

## Trade-off Analysis
The only real cost is obtaining accurate entity data and a legal review — which
is required regardless of page structure. Three pages (Option A) is the
low-risk, conventional choice and lets the imprint block independently on entity
data without holding up privacy/cookies.

## Consequences
- **Easier:** the "GDPR native" claim becomes defensible; enterprise/public
  buyers who check for an imprint find one; investors see a real B.V.
- **Harder:** must keep policies current; adding analytics later forces a
  consent-banner sub-project (new ADR).
- **Revisit:** when analytics or any third-party embed is introduced, or if the
  operating entity/structure changes.

## Action Items
1. [ ] Obtain: registered name, KvK number, registered address, controller email.
2. [ ] Draft privacy + cookie + imprint copy (brand-aligned); mark any gap `TODO(entity)`.
3. [ ] Legal review before publish.
4. [ ] Add footer links: Privacy · Cookies · Imprint + MCPV·NODUM lockup.
5. [ ] Decide analytics stance now (feeds cookie copy — see ADR-0007 note).
