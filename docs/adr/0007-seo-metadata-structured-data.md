# ADR-0007: Add SEO metadata, OpenGraph/Twitter and JSON-LD structured data

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy

## Context
`app/layout.tsx` exposes only `title`, `description` and icons. There is **no**
OpenGraph, no Twitter card, no canonical, no structured data. Consequences: when
the site is shared on LinkedIn (the owner's primary distribution channel) or
Slack, it unfurls as a bare link with no image; search engines get no rich
context; the strong FAQ earns no rich-result eligibility. These are low-effort,
high-return fixes and were flagged in both prior reviews.

## Decision
Add a complete metadata and structured-data layer, all statically generated:

- **Metadata** (via Next `metadata` / `generateMetadata`): `metadataBase` =
  the **production** canonical origin `https://v53ai.eu` (ADR-0009) for every
  build, including dev/preview (whose host is served `noindex`); full
  `openGraph` (title, description, url,
  siteName, `images` → branded OG card, locale); `twitter`
  (`summary_large_image`); `alternates.canonical`; `robots`. Per-route metadata
  for legal pages.
- **JSON-LD** injected as `<script type="application/ld+json">`:
  - `Organization` — legal/brand name, logo, `url`, and `sameAs` → LinkedIn
    (and any other official profiles); ties to the entity data from ADR-0005.
  - `WebSite` — name + url.
  - **`FAQPage`** — generated from `content/faq.ts` (ADR-0004) so it never drifts
    from the visible FAQ.
- **`app/sitemap.ts`** and **`app/robots.ts`** — statically exported.
- **Analytics note:** if privacy-safe analytics is later wanted, prefer an
  EU-hosted, cookieless option to preserve sovereignty and avoid a consent
  banner (coordinate with ADR-0005). No analytics is added in this ADR.

## Options Considered

### Option A: full metadata + JSON-LD from content source (recommended)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low–Medium |
| Cost | None |
| SEO/social payoff | High — rich unfurls + FAQ rich results |
| Drift risk | Low — schema built from `content/faq.ts` |

**Pros:** proper LinkedIn/Slack previews; FAQPage + Organization eligibility;
canonical resolves duplicate-host issues; all static, no runtime.
**Cons:** must produce an OG image (ADR-0008) and have entity data (ADR-0005);
JSON-LD must be kept valid.

### Option B: OG/Twitter tags only, skip JSON-LD
**Pros:** even less work; fixes the unfurl.
**Cons:** leaves the free FAQ/Organization rich-result win on the table. Weakly
justified given the FAQ is already the site's strongest content.

### Option C: do nothing / minimal
Rejected — the status quo actively hurts the owner's main distribution channel.

## Trade-off Analysis
Option A's only extra cost over B is generating one OG image and templating two
JSON-LD blocks — trivial next to the payoff. Because the FAQ schema derives from
the same content module, the classic "structured data lies about the page"
maintenance trap is avoided by construction.

## Consequences
- **Easier:** shares look professional; search eligibility improves; canonical
  ends host ambiguity.
- **Harder:** JSON-LD and OG must stay valid/current; depends on OG image +
  entity data being ready.
- **Revisit:** if a blog/`/insights` is added, extend sitemap + per-post
  metadata (`Article` schema).

## Action Items
1. [ ] Set `metadataBase` to the canonical origin (ADR-0009).
2. [ ] Add `openGraph` + `twitter` + `canonical` + `robots` (root + legal routes).
3. [ ] Add `Organization` (+ `sameAs` LinkedIn), `WebSite`, `FAQPage` JSON-LD.
4. [ ] Add `sitemap.ts` + `robots.ts`.
5. [ ] Validate with Google Rich Results + a LinkedIn/Slack unfurl.
6. [ ] Decide analytics stance (feeds ADR-0005 cookie copy).
