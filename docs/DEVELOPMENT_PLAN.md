# V53 AI Cluster — Detailed Development Plan

**Companion to:** `REFACTOR_PLAN.md` (the *what/why*) and `docs/adr/` (the decisions).
This document is the *how, in what order, and against which files* — the executable build plan.
**Date:** 21 July 2026 · **Basis:** REFACTOR_PLAN.md + ADR-0001…0010, re-verified against current `app/`.

---

## 0. Locked decisions (this plan is built on these)

Confirmed with the owner on 2026-07-21, on top of the ADR set:

| # | Decision | Effect on build |
|---|----------|-----------------|
| L1 | **Phased ship**, not big-bang (overrides plan D4). | Phase 1 ships with no external inputs; Phase 2 is content-gated. |
| L2 | **Self-host a grotesk display face** (Space Grotesk) for H1/H2 (ADR-0003 Option A). | Adds one `next/font` face, headings only; Inter stays for body. |
| L3 | **Canonical email = `team@v53ai.eu`.** | Set once in `content/site.ts`; replaces all `call@v53ai.eu`. Live site must switch its `contact@` display to match. |
| L4 | **Artefacts in hand:** LinkedIn company URL, team bios/photos, named voices. | Voices + team lockup are **built** in Phase 2. |
| L5 | **Not in hand:** cleared partner logos → **Partners section feature-flagged off**. Legal entity/KvK → **imprint ships with `TODO(entity)`**. | Never fake logos/entity data. |

**Copy convention (standing):** no hyphens, no em dashes in visible site copy. Compounds become two words; em dashes become comma/colon/period. Applies to every new string this plan produces.

---

## Phase 1 — Foundation, fixes, SEO, a11y (no external inputs)

Everything here is buildable and shippable today. Order matters: A → B → then C/D/E in parallel → F → G.

### P1-A · Content-as-data + section-component refactor (ADR-0004)
Pure structural refactor. **Zero visible change** — this is the safety property that makes it reviewable.

- Create `content/`:
  - `site.ts` — `EMAIL = 'team@v53ai.eu'`, `LINKEDIN_URL`, `DOMAIN = 'https://v53ai.eu'`, legal-entity constants (with `TODO(entity)` placeholders), and `SECTIONS` feature-flags (`partners: false`, `voices: true`, `team: true`).
  - `nav.ts` — nav links array (add Contact).
  - `services.ts` — `Service[]` (`num, title, meta, desc, tag, featured?`). Card 06 (Capacity Reservation) gets `featured: true`.
  - `faq.ts` — `FaqItem[]`, de-duplicated + proofread. Single source for the visible list **and** the FAQPage schema.
  - `reservationModes.ts` — Reserved / On-demand / Hybrid.
  - `voices.ts`, `partners.ts` — typed, populated in Phase 2 (empty/flagged now).
- Create `components/sections/*` — one component per section. Extract markup verbatim from `page.tsx` first (no redesign in this step).
- Create `components/ui/` — `Reveal.tsx` (wraps the IntersectionObserver), `SectionLabel.tsx`, `Button.tsx`.
- `app/page.tsx` → thin composition importing sections in order. Keep the `'use client'` boundary minimal: only `Nav`, `MobileMenu`, `Reveal` are client; static sections become server components (safe under static export).
- **Acceptance:** `npx tsc --noEmit` clean; screenshot diff vs current site shows visual parity; no content string lives in JSX that should be data.

### P1-B · Brand tokens + display font (ADR-0003)
- Add **Space Grotesk** via `next/font/google`, weights 600/700, `--font-display`, subset latin, `display: swap`. Wire it into H1/H2 only.
- Remove `"Trebuchet MS", "Lucida Sans"` from `--font-display`; the chain becomes `var(--font-space-grotesk), var(--font-inter), system-ui, sans-serif`.
- Audit `globals.css`: every colour references a token (hero blue `--hero-bg` is the one allowed literal). Confirm `#ED1C24` stays purged (already gone).
- Normalise heading strings: strip stray double spaces.
- **Acceptance:** headings render in Space Grotesk (verify in browser, not just fallback); every colour traces to a token; no font console warnings.

### P1-C · Copy + correctness fixes (ADR-0006 CTA, plan §2.1)
- Replace **all** "Call us" wording (nav, hero, mobile menu, contact — lines ~208/210/259/301/303/590) with **"Talk to us"** (general) / **"Reserve capacity"** (capacity ask). No phone wording anywhere.
- Swap all `call@v53ai.eu` → `team@v53ai.eu` (lines ~103/264/265/460/491/492/580) — sourced from `content/site.ts`, not hardcoded.
- Fix the coverage contradiction: contact panel "EU & UK" → EU-jurisdiction language consistent with the data-never-leaves-EU claim.
- Proofread pass: "fully infrastructured" → real wording; "located in Groningen region" → "in the Groningen region"; fix any remaining broken About sentence and footer duplication.
- **Acceptance:** no button labelled "call"; grep finds zero `call@`, zero "Call us"; coverage language consistent; second-reader proofread clean.

### P1-D · Legal page shells + footer (ADR-0005)
- New static routes `/privacy/`, `/cookies/`, `/imprint/` — shared minimal typographic layout.
- Draft privacy + cookie copy (functional-cookies-only stance pending L-analytics decision below). Imprint uses `TODO(entity)` for KvK/address/registered name until supplied.
- Footer: fix duplication; add **Privacy · Cookies · Imprint** links, LinkedIn, and the "operated by MCPV · NODUM" lockup.
- **Acceptance:** three routes export as folder + `index.html` and resolve; footer links reach them; "GDPR native" claim no longer contradicted by a missing privacy policy.

### P1-E · SVG imagery + OG card (ADR-0008)
- Author a **Groningen/Veendam region map** SVG (or phased-buildout timeline MVP-2027 → scale) in brand tokens, for Hero/Location.
- Produce the **1200×630 OG card** (navy-branded, map + V53 wordmark), hand-optimised WebP/PNG ≤ 200 KB, into `public/brand_assets/og/`.
- **Acceptance:** at least one real spatial visual on the page; OG card exists and is ≤ 200 KB.

### P1-F · SEO, metadata, structured data (ADR-0007, 0009)
- `app/layout.tsx`: add `metadataBase = https://v53ai.eu`, full `openGraph` + `twitter (summary_large_image)` + `alternates.canonical` + `robots`. Per-route metadata for legal pages.
- JSON-LD: `Organization` (+ `sameAs` → LinkedIn), `WebSite`, `FAQPage` (generated from `content/faq.ts` — no drift).
- Add `app/sitemap.ts` + `app/robots.ts` (statically exported).
- **Acceptance:** Google Rich Results validates FAQPage + Organization; canonical points at `https://v53ai.eu` on every build; a LinkedIn/Slack unfurl shows the OG card.

### P1-G · Accessibility + motion pass (ADR-0010)
- Contrast audit: amber `#F58E3C` and slate `#8A9BB0` are large-text/decoration only; move any small text on them to navy/near-black.
- `prefers-reduced-motion: reduce` → disable reveals (render visible) + freeze ticker.
- `aria-label` on icon/arrow buttons; `→` stays `aria-hidden`; `:focus-visible` ring on every interactive element.
- **Acceptance:** Lighthouse a11y ≥ 95; WAVE clean; reduced-motion honoured.

### P1 restructure (folds into C/E as sections are built)
New page order (plan §3), building the input-free ones now: Hero (trimmed + SVG visual), **Ticker** (CSS marquee, reduced-motion aware), Stat band, Services (card 06 featured + "Open now"), **Why V53** (question-led benefits), **Location** (region map), **Reservation modes**, About (tightened, MCPV·NODUM stated), FAQ (de-duped + schema), Contact (cleaned), Footer (legal links). Partners + Voices slots exist but are flagged off until Phase 2.

**Phase 1 Definition of Done:** `tsc` + `lint` + `build` clean; screenshots at 1440/768/480 reviewed; every link/CTA tested; Lighthouse Perf ≥ 90, a11y ≥ 95, Best Practices ≥ 95, SEO ≥ 95; Rich Results valid. Deploy to the AWS **dev/preview** host `v53ai.kalenskyy.com` for review.

---

## Phase 2 — Content-gated sections (needs the L4 artefacts delivered as files)

Built once the actual content lands (LinkedIn URL string, team bios/photos, voice quotes):

- **Voices** — populate `content/voices.ts` with the approved quotes (quote, name, title, org, avatar?); render section, flip flag on.
- **About team lockup** — team names, one-line bios, photos (or initials-avatars); render under About.
- **LinkedIn** — drop the real URL into `content/site.ts`; it lights up nav/contact/footer + `sameAs` schema automatically.
- **Partners** — stays **off** until cleared logos + written permission arrive; then populate `content/partners.ts` (only `cleared: true` render) and flip the flag.

---

## Go-live gate — Production (`v53ai.eu`) + legal (ADR-0002, 0009, 0005)

Blocked on external inputs; tracked, not built speculatively:

- **Legal entity** — registered name, **KvK number**, registered address, controller email → replace `TODO(entity)` in `/imprint/` and Organization JSON-LD. Legal review before publish. **This gates the legal go-live only, not Phase 1 preview.**
- **Production server** — stack (nginx/Apache/Caddy/managed) + upload method (SSH/rsync/SFTP). Configure clean-URL rewrite (`/foo/` → `/foo/index.html`), HTTPS/TLS for `v53ai.eu`+`www`, immutable caching on `/_next/static/*`, 404 mapping.
- **`v53ai.eu` DNS/TLS** — registrar/provider, `www` → apex 301.
- **Dev host `noindex`** — add `X-Robots-Tag: noindex` (CloudFront response-headers policy) so preview never competes with production.
- **Deploy runbook** — `npm ci && npm run build` → verify `out/` → upload CI-built `out/` to prod → smoke-test every route + 404.

---

## Inputs still needed from the owner

**To finish Phase 2 (have them, need the files):**
1. LinkedIn company page URL (string).
2. Team: names + one-line bios + photos (or OK to use initials-avatars).
3. Voices: the 3–4 quotes with name/title/org + approval to publish.

**To reach production go-live:**
4. Legal entity: registered name, **KvK number**, registered address, controller email.
5. Production server stack + upload method; `v53ai.eu` DNS/TLS location.
6. **Analytics stance** (one line) — any analytics? If yes which tool? Decides cookie-page copy + whether a consent banner is needed. (Recommend EU-hosted/cookieless or none, to protect the sovereignty story.)

**Enhancing (non-blocking):**
7. Any disclosable hard figure (phased MW, grid connection, PPA) for the stat band / Location.
8. NODUM logo files for the footer "operated by" lockup (referenced in the Style Guide, absent from `public/brand_assets/`).

---

## ADR acceptance

All ten ADRs are still **Proposed**. Recommend marking 0001–0010 **Accepted** (with 0003 → Option A, 0006 → email `team@v53ai.eu`) so the build proceeds against a signed-off basis. L1 (phased) is a light amendment to the plan's D4; the ADRs themselves don't need changing for it.
