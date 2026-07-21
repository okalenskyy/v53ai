# V53 AI Cluster — Website Refactor Plan

**Repository:** `okalenskyy/v53ai` · **Live:** https://v53ai.eu
**Stack:** Next.js 15 (App Router, `output: 'export'`), TypeScript, Tailwind CSS 3, Inter + JetBrains Mono + Trebuchet MS, deployed to AWS S3 + CloudFront via GitHub Actions (OIDC), infra in Terraform.
**Plan status:** Ready for development. Decisions recorded as ADR-0001 … ADR-0010 in `docs/adr/`.
**Date:** 20 July 2026

---

## 0. Decisions this plan is built on

These were confirmed before writing. They are the load-bearing assumptions; if any changes, re-read the linked ADR.

| # | Decision | Source |
|---|----------|--------|
| D1 | **Palette and type come from the live v53ai.eu system** — Cloud White ground, Navy `#002D4A` text, Amber `#F58E3C` accent, Slate `#8A9BB0`, blue `#2d5d9e` hero, Trebuchet MS display / Inter body. We consolidate and clean these tokens; we do **not** introduce a new theme. | ADR-0003 |
| D2 | **Audience is balanced across all three** buyer types (capacity customers, investors, public-sector/regional). The page must serve all three without a single narrow CTA. | ADR-0004 |
| D3 | **Contact stays mailto-only.** No backend, no form provider. We fix the broken "Call us → email" mismatch and add LinkedIn. Forms are explicitly deferred. | ADR-0006 |
| D4 | **Full restructure delivered as one milestone** (not phased), then shipped once. | this plan |
| D5 | **Static export is retained**, as one portable artifact. AWS (S3/CloudFront/Terraform) is **dev/preview only** at `v53ai.kalenskyy.com`; **production `v53ai.eu` is a manual deploy to a non-AWS web server**. No SSR, no CMS, no server runtime. | ADR-0002, ADR-0009 |

> Because the audience is balanced (D2), the primary CTA is a neutral **"Talk to us"** / **"Reserve capacity"** pairing rather than a single hard ask, and proof is layered so each of the three audiences finds what it needs (capacity buyers → services + reservation modes + FAQ; investors → roadmap + figures + team; public-sector → sovereignty + jurisdiction + regional/ecosystem).

---

## 1. Goals and non-goals

### Goals
1. Fix everything credibility-breaking: legal pages, the "Call us" mismatch, typos, the broken About sentence, footer spacing, missing OG tags.
2. Restructure the single page from a flat 5-section layout into the conversion-oriented order proven by the reference site (thestack.ai), adapted to a sober infrastructure register.
3. Make the brand *consistent* — one token source, no stray Altenture/red references, correct display font loading.
4. Add tangibility: at least one strong spatial visual (site/region map or phased-buildout diagram) rendered in the brand palette.
5. Add the trust layer that is currently missing: partners/ecosystem ribbon, named voices, team lockup, MCPV/NODUM structure surfaced.
6. Win the free technical points: FAQPage + Organization JSON-LD, full OpenGraph/Twitter metadata, canonical URL, accessibility to WCAG AA.

### Non-goals (this milestone)
- No contact form / backend (ADR-0006).
- No blog / insights section yet (route reserved, not built — §6).
- No CMS. Content stays as typed data modules in the repo (ADR-0004).
- No dark-mode toggle. The site is light with a blue hero; that is the brand.
- No rebrand. Palette and logos are fixed inputs.

---

## 2. Current-state audit (what we are fixing)

### 2.1 Content / correctness defects (from the two prior reviews, re-verified against `app/page.tsx`)
- **CTA mismatch:** nav, hero and mobile menu buttons say "Call us →" but resolve to email; no phone number exists. Broken promise at the top touchpoint.
- **Broken About sentence:** *"enables differentiated AI sovereignty by design infrastructures offerings, provides cluster management…"* — ungrammatical.
- **Word errors:** "fully infrastructured" (not a word), "located in Groningen region" (missing "the").
- **Footer bug:** tagline duplicated; "Infra enabling AI" appears twice; spacing/period issues in the reference build.
- **Hero copy** is long and dense and duplicates the first About paragraph almost verbatim.
- **Messaging inconsistency:** contact panel says "Coverage: EU & UK, sovereign by default" while the rest of the site claims data never leaves the EU. UK is outside EU jurisdiction.
- **Contact email inconsistency:** repo uses `call@v53ai.eu`; live site shows `contact@v53ai.eu`. Must pick one canonical address.

### 2.2 Trust / credibility gaps
- No team (no names, faces, LinkedIn), no partner/ecosystem logos, no LinkedIn company link.
- MCPV / NODUM relationship is buried in FAQ #11 rather than stated in About/footer.
- No disclosable proof points (MW, grid connection, PPA, renders).

### 2.3 Legal / compliance gaps (highest priority — directly contradict the "GDPR native" claim)
- No privacy policy, no cookie statement, no imprint/colofon, no legal entity details (registered name, KvK number, registered address).

### 2.4 Technical / SEO gaps
- `app/layout.tsx` has title + description only. **No OpenGraph, no Twitter card, no canonical, no JSON-LD.** LinkedIn shares render as bare links.
- Single page limits keyword surface; no structured data on the FAQ.
- Stray double spaces inside headings render as uneven gaps.

### 2.5 Graphical gaps
- All-text site. No render, no map, no diagram, no photography — the biggest graphical gap for a *physical* infrastructure product.
- All six service cards read at equal weight; nothing signals that Capacity Reservation is the only thing sellable today.
- Display font: `--font-display` lists Trebuchet MS first but Trebuchet is not web-loaded, so most visitors fall back to Inter. Headline ambition is lost.

### 2.6 Structural / code-health issues
- `app/page.tsx` is a single ~600-line client component holding markup **and** content data (SERVICES, FAQ, NAV). Adding sections and a second page compounds this.
- `CLAUDE.md` is **stale**: it still describes the old dark/red Altenture template (`#ED1C24`, "dark background"), which no longer matches the shipped light brand. It will mislead any future contributor or agent.
- `README.md` is 8 bytes (empty). `setup.md` documents the template, not this site.

---

## 3. Target information architecture

New page order (single long-form landing page unless noted), adapted from the reference site into a sober register:

1. **Nav** — logo · Services · About · Partners · FAQ · Contact (add Contact to top nav) · primary CTA.
2. **Hero** — eyebrow (`GRONINGEN · NL — MVP COMPUTE 2027`) + tight 2-line headline + **one short** sub-paragraph + CTA pair + stat band. Add a spatial visual (region map / stylised isometric cluster) behind or beside the copy.
3. **Ticker / marquee** — slow, quiet: `Reserving 2027 capacity · Sovereign by design · EU jurisdiction · Groningen`. Industrial, not festival.
4. **Stat band** — keep (2027 · Groningen · EU sovereign); extend with any disclosable hard number (MW / grid).
5. **Services** — keep the 01–06 numbered cards, but give **Capacity Reservation (06)** visual priority (accent border + "Open now" badge) and let it carry the primary CTA.
6. **Why V53** — question-led, second person, 3–4 numbered benefits. ("Will your roadmap be gated by compute? Not here.")
7. **Location** — region map pin (Groningen/Veendam) + power/fibre/scale context. Reinforces the physical claim.
8. **Partners / ecosystem** — logo ribbon (only logos cleared for public use).
9. **Voices** — 3 named quotes with title + org (or initials-avatar) — fixes the anonymous-founders problem.
10. **Reservation modes** — Reserved / On-demand / Hybrid cards (already described in FAQ text), each "Discuss capacity →".
11. **About** — tightened; state the MCPV · NODUM structure here, not in FAQ. Add team lockup.
12. **FAQ** — keep; de-duplicate; add FAQPage schema.
13. **Contact** — cleaned mailto, canonical address, LinkedIn, location/MVP/coverage (coverage line corrected).
14. **Footer** — fix duplication; add legal links (Privacy · Cookies · Imprint), LinkedIn, "operated by MCPV · NODUM" lockup.

Separate routes (static): `/privacy/`, `/cookies/`, `/imprint/` (a.k.a. colofon). Route reserved but not built: `/insights/`.

---

## 4. Workstreams and file-level work breakdown

Ordered for a single milestone; within the milestone, do WS-A (foundation) before WS-C (new sections).

### WS-A — Foundation & code architecture (ADR-0003, ADR-0004)
Refactor so the restructure is buildable without a 900-line file.

- `content/` (new) — extract typed content into modules:
  - `content/services.ts` — `Service[]` (num, title, meta, desc, tag, `featured?: boolean`).
  - `content/faq.ts` — `FaqItem[]` (question, answer) — de-duplicated, proofread.
  - `content/reservationModes.ts` — Reserved / On-demand / Hybrid.
  - `content/partners.ts` — `Partner[]` (name, logo, url, `cleared: boolean`) — only `cleared` render.
  - `content/voices.ts` — `Voice[]` (quote, name, title, org, avatar?).
  - `content/nav.ts`, `content/site.ts` — nav links, canonical email, LinkedIn URL, legal entity constants (MCPV BV, KvK, address).
- `components/sections/` (new) — one component per section (`Hero.tsx`, `Ticker.tsx`, `StatBand.tsx`, `Services.tsx`, `WhyV53.tsx`, `Location.tsx`, `Partners.tsx`, `Voices.tsx`, `ReservationModes.tsx`, `About.tsx`, `Faq.tsx`, `Contact.tsx`, `Footer.tsx`, `Nav.tsx`, `MobileMenu.tsx`).
- `components/ui/` — small primitives if needed (`Button.tsx`, `SectionLabel.tsx`, `Reveal.tsx` wrapping the IntersectionObserver logic).
- `app/page.tsx` — becomes a thin composition: import sections, render in order. Keep the `'use client'` boundary as small as possible (ideally only interactive bits: Nav, MobileMenu, Reveal are client; static sections can be server components since export is static).
- `app/globals.css` — keep as the single stylesheet but section it clearly; **remove** the stale hero-dark/red assumptions; ensure every colour references a token (no raw hex in section rules except the hero blue token).

**Acceptance:** `npx tsc --noEmit` clean; visual parity with current site after extraction (no design change yet in WS-A); no content string lives inside a component's JSX that should be data.

### WS-B — Brand token consolidation & typography (ADR-0003)
- Confirm one source of truth for tokens in `:root` of `globals.css` (already good). Reconcile or remove the stale shadcn `--primary` amber duplication only if unused.
- **Load the display font.** Two options (pick in ADR-0003 action items): (a) self-host a licensed grotesk (e.g. Space Grotesk / Instrument Sans — open source) for H1/H2 via `next/font/local` or `next/font/google`, keeping Inter for body; or (b) accept Inter-only and delete the Trebuchet reference so the fallback is intentional. **Do not leave Trebuchet MS as the first family** — it is not delivered to visitors and produces inconsistent rendering.
- Fix the hardcoded hero mark colour if any `#ED1C24` (red) remains anywhere in CSS/SVG — replace with brand blue/amber tokens.
- Normalise heading strings: remove stray double spaces ("Industrial grade compute").
- Give the arrow glyph `→` a styled `<span aria-hidden>` (already partly done) and confirm it is not raw Unicode in copy that a screen reader will read oddly.

**Acceptance:** every colour in `globals.css` traces to a token; display font is either web-delivered or the reference removed; no `#ED1C24` anywhere; Lighthouse "Best Practices" has no font-related console warnings.

### WS-C — New sections & restructure (§3)
Build sections per §3 order. Notes:
- **Hero:** cut copy to ≤2 sentences; move detail to About. Add visual (WS-E). Corrected coverage language.
- **Ticker:** pure CSS marquee (duplicate the track for infinite scroll; respect `prefers-reduced-motion` → freeze). No JS library.
- **Services:** add `featured` styling for card 06.
- **Why V53 / Location / Partners / Voices / Reservation modes:** new. Partners and Voices render only cleared/approved content; if none cleared at build time, the section shows a tasteful placeholder state or is omitted via a feature flag in `content/site.ts` (`SECTIONS.partners = false`) — never fake logos or quotes.
- **About:** rewrite the broken sentence; state MCPV · NODUM structure; add team lockup (photos + one-line bios) when supplied.

**Acceptance:** all §3 sections present or feature-flagged off with a documented reason; no placeholder/lorem visible; responsive at 768 and 480.

### WS-D — Legal, compliance & footer (ADR-0005)
- New static routes `/privacy/`, `/cookies/`, `/imprint/`. Each is a simple typographic page using shared layout.
- Populate imprint with legal entity: **registered name (MCPV … BV), KvK number, registered address, contact email**. (Artefact needed — §7.)
- Cookie statement: if the site sets only functional cookies / no analytics, say exactly that; if analytics is added later, a consent banner becomes required (note in ADR-0005).
- Footer: fix duplication, add the three legal links + LinkedIn + "operated by MCPV · NODUM AI Competence Hub" lockup.

**Acceptance:** three legal pages reachable and linked from the footer; imprint contains real KvK + address (or a clearly-marked `TODO(entity)` if not yet supplied, tracked as a blocker); "GDPR native" claim is no longer contradicted by the absence of a privacy policy.

### WS-E — Imagery & visual tangibility (ADR-0008)
- At least one spatial visual: a **Netherlands/Groningen map** with a Veendam/Groningen pin, or a **phased-buildout timeline** (MVP 2027 → scale phases), authored as **SVG in the brand palette** (navy/amber/slate) so it is crisp, tiny, and themeable. SVG-first because `images: { unoptimized: true }` means raster images ship at full weight.
- **OG image** (1200×630) — navy-branded card showing the render/map + wordmark, exported once as an optimised PNG/WebP into `public/brand_assets/og/`.
- Optional: stylised isometric cluster diagram for the hero.

**Acceptance:** hero (or Location) shows a real spatial visual; a branded OG image exists and is referenced by metadata; no raster over ~200 KB ships.

### WS-F — SEO, metadata & structured data (ADR-0007)
- `app/layout.tsx` (and per-route `metadata`): add `metadataBase`, full `openGraph` (title, description, url, siteName, images, locale `en`/`nl` as decided), `twitter` (summary_large_image), `alternates.canonical`, `robots`.
- Inject **JSON-LD**: `Organization` (with `sameAs` → LinkedIn), `WebSite`, and **`FAQPage`** built from `content/faq.ts` (single source, no drift). Render as a `<script type="application/ld+json">` in the relevant route.
- Add `app/sitemap.ts` and `app/robots.ts` (both statically exported).

**Acceptance:** Rich Results test validates FAQPage + Organization; a LinkedIn/Slack unfurl shows the OG image and correct title; canonical points at the apex domain (ADR-0009).

### WS-G — Accessibility & motion (ADR-0010)
- Contrast: verify amber `#F58E3C` and slate `#8A9BB0` on their backgrounds; amber is **large-text/decoration only** (fails AA for body); ensure body text uses navy/near-black. Adjust any small text currently on amber/slate.
- `aria-label`s on icon-only/arrow buttons; `prefers-reduced-motion` disables reveals and the ticker; focus-visible rings present on every interactive element.
- Run WAVE + Lighthouse; target AA and Lighthouse a11y ≥ 95.

**Acceptance:** Lighthouse a11y ≥ 95; no WCAG AA contrast failures on text; reduced-motion honoured.

### WS-H — Environments, domains & production deploy (ADR-0002, ADR-0009)
- **Two environments, two hosts.** AWS S3/CloudFront/Terraform serves the
  **dev/preview** host `v53ai.kalenskyy.com` only. **Production `v53ai.eu` is a
  manual deploy to a non-AWS web server** (not in this repo's Terraform).
- **Canonical = `https://v53ai.eu`** for every build (apex; `www` → apex 301).
  Point `metadataBase`/canonical/OG/JSON-LD `url` at production even when the
  build is previewed on the AWS host (ADR-0007).
- **Keep the dev/preview host out of the index** — add `X-Robots-Tag: noindex`
  (CloudFront response-headers policy) on `v53ai.kalenskyy.com`.
- **Replicate CloudFront behaviour on the prod server:** clean-URL resolution
  `/foo/` → `/foo/index.html` (nginx `try_files … $uri/index.html`), HTTPS/TLS
  for `v53ai.eu` (+`www`), immutable caching on `/_next/static/*`, a 404 mapping.
- **Write a production deploy runbook** (ADR-0002): `npm ci && npm run build` →
  verify `out/` → upload to the prod host (rsync/scp/SFTP; prefer the CI-built
  `out/` to avoid build drift) → smoke-test every route + 404.
- Confirm the CloudFront function still resolves folders for the new routes on
  the dev host (`trailingSlash: true` already set).

**Acceptance:** dev host serves preview and is `noindex`; prod host serves
`v53ai.eu` over HTTPS with clean-URL rewriting and new legal routes resolving;
canonical + OG absolute URLs use `https://v53ai.eu`; a deploy runbook exists.

### WS-I — Docs & housekeeping
- Rewrite `CLAUDE.md` to describe the **current** light brand and the new section/content architecture (remove all dark/red template text).
- Replace empty `README.md` with a real project readme; retire or update `setup.md`.
- Add `docs/adr/` (this set) and reference it from `CLAUDE.md`.

**Acceptance:** no doc describes the retired dark template; ADR index linked from README and CLAUDE.md.

---

## 5. Milestone, sequencing & estimate

Single milestone, internal order:

```
WS-A  Foundation/refactor        ─┐
WS-B  Tokens & typography         ├─ do first (unblocks everything)
WS-I  Docs (CLAUDE.md fix)        ─┘
WS-C  New sections & restructure  ─┐
WS-D  Legal pages & footer        ├─ parallelisable across the section set
WS-E  Imagery/OG                  ─┘   (WS-E blocks hero + OG in WS-F)
WS-F  SEO/metadata/schema         ── after content + OG exist
WS-G  Accessibility pass          ── after sections built
WS-H  Domain/DNS                  ── independent; can land any time before ship
```

Rough effort (one experienced Next.js dev): WS-A ~1–1.5 d · WS-B ~0.5 d · WS-C ~2.5–3 d · WS-D ~1 d (plus waiting on entity/legal artefacts) · WS-E ~1–2 d (depends on whether visuals are supplied or authored) · WS-F ~0.5–1 d · WS-G ~0.5 d · WS-H ~0.5 d · WS-I ~0.5 d. **≈ 8–11 working days**, gated by artefact delivery (§7) for legal, partners, voices and figures.

---

## 6. Testing & Definition of Done

Adopt and extend the repo's existing DoD (from `CLAUDE.md`):
1. All placeholder text replaced; no lorem, no `[BRACKET]`.
2. `npx tsc --noEmit` clean; `npm run lint` clean; `npm run build` (static export) succeeds and `out/` contains the new routes.
3. Screenshots at 1440 / 768 / 480 reviewed for every section.
4. Every nav link, footer link, CTA and legal link tested (navigates / opens correct target). No CTA labelled "call" resolves to email.
5. Lighthouse: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
6. Rich Results: FAQPage + Organization valid.
7. OG unfurl verified on LinkedIn + Slack.
8. Proofread pass by a second reader (or the marketing/brand-review skill) — zero typos, corrected coverage/UK language, MCPV·NODUM stated in About.
9. Legal pages present with real entity data (or entity `TODO` explicitly tracked as a release blocker).

---

## 7. Additional artefacts required (blocking / non-blocking)

See `ARTEFACTS_REQUEST.md` for the full checklist. Summary of what blocks which workstream:

| Artefact | Blocks | Blocking? |
|----------|--------|-----------|
| Legal entity: registered name, **KvK number**, registered address | WS-D imprint, WS-F Organization schema | **Blocking** for legal go-live |
| Canonical contact email (`call@` vs `contact@`) | WS-C, WS-D, WS-F | **Blocking** (quick) |
| LinkedIn company page URL | WS-C contact, WS-F `sameAs`, footer | **Blocking** (quick) |
| Production server stack (nginx/Apache/Caddy/managed) + how it's reached (SSH/SFTP), for `v53ai.eu` | WS-H deploy runbook + server config | **Blocking** for prod deploy |
| `v53ai.eu` registrar/DNS/TLS location (to point DNS + issue cert off-AWS) | WS-H | **Blocking** for prod cutover |
| Site render / region map source (or approval to author an SVG map) | WS-E, hero, OG | Blocking for WS-E only |
| Partner logos **+ written permission** to display each | WS-C Partners | Non-blocking (section feature-flags off) |
| Named voices/quotes (name, title, org, approval) | WS-C Voices | Non-blocking (section feature-flags off) |
| Team bios + photos | WS-C About team lockup | Non-blocking |
| Disclosable hard figures (MW roadmap, grid connection, PPA) | Stat band, Location, investor proof | Non-blocking (enhances) |
| Cookie/analytics intent (will you add analytics?) | WS-D cookie page + consent banner scope | Non-blocking (changes cookie copy) |

---

## 8. Risks & mitigations

- **Legal data not ready** → ship everything else; gate only the imprint on real KvK/address; keep a tracked `TODO(entity)`; do **not** publish contradictory "GDPR native" claims without at least a privacy policy.
- **No cleared partner logos / voices** → feature-flag those sections off rather than faking social proof (fake logos are worse than none).
- **Scope creep toward a CMS/blog** → out of scope this milestone; `/insights/` route reserved only.
- **Sovereignty vs third-party pixels** → keep the site free of US analytics/embeds that would undercut the sovereignty message; if analytics is wanted, prefer an EU/self-hosted, cookieless option (revisit in a follow-up ADR).
- **Static export limits** → no server form; that is an accepted constraint (ADR-0006). Revisit only if lead volume justifies a serverless endpoint.

---

## 9. ADR index

| ADR | Title | Status |
|-----|-------|--------|
| 0001 | Record architecture decisions (process + location) | Proposed |
| 0002 | Static export artifact; AWS for dev/preview, manual non-AWS production | Proposed |
| 0003 | Adopt the V53/NODUM brand token system as the single design source | Proposed |
| 0004 | Section-per-component + content-as-data architecture | Proposed |
| 0005 | Add static legal/compliance pages and legal-entity disclosure | Proposed |
| 0006 | Keep contact mailto-only; defer forms | Proposed |
| 0007 | Add SEO metadata, OpenGraph/Twitter and JSON-LD structured data | Proposed |
| 0008 | SVG-first imagery and a branded OG image strategy | Proposed |
| 0009 | Environment topology and canonical domain (dev vs prod) | Proposed |
| 0010 | Accessibility (WCAG AA) and reduced-motion baseline | Proposed |

All ADRs are **Proposed** — they encode the decisions this plan assumes. Accept, amend, or reject each before development starts.
