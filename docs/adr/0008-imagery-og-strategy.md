# ADR-0008: SVG-first imagery and a branded OG image strategy

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy

## Context
The site is entirely text. For a **physical** infrastructure product, the
absence of any spatial visual (render, map, diagram, photo) is the biggest
graphical gap — it undercuts tangibility for every audience (buyers, investors,
public-sector). Two constraints shape how we add imagery: the static export sets
`images: { unoptimized: true }`, so Next's image optimisation is off and any
raster ships at full byte weight; and there may be no photographic render of the
site available yet (Groningen/Veendam facility is pre-build). We also need a
single OG card image for social unfurls (ADR-0007).

## Decision
**SVG-first.** Author the primary visuals as inline/asset **SVG in the brand
palette** (navy/amber/slate/cloud), which are tiny, crisp at any DPI, themeable,
and need no optimisation pipeline:

- A **Netherlands/Groningen region map** with a Veendam/Groningen pin, and/or a
  **phased-buildout timeline** (MVP 2027 → scale phases), for the Hero and/or
  Location section.
- Optional **stylised isometric cluster diagram** for the hero background.

For raster that must be raster (a real render/photo when available, and the OG
card): export **once**, hand-optimised (WebP/optimised PNG), budget ≤ ~200 KB
each, stored under `public/brand_assets/` (OG under `.../og/`). The **OG image**
is a 1200×630 navy-branded card combining the map/diagram + V53 wordmark; it is
referenced by metadata (ADR-0007).

If a genuine facility render/aerial is supplied later, it can replace or augment
the SVG map — the SVG is the always-available baseline so the site is never
text-only.

## Options Considered

### Option A: SVG-first, raster only where unavoidable (recommended)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low–Medium (authoring the SVG) |
| Payload | Tiny (SVG) |
| Fits static export | Perfectly — no optimisation needed |
| Brand control | High — drawn in exact tokens |

**Pros:** immediate tangibility with assets we can author now; no dependency on
an external render; crisp on retina; themeable; sovereignty-safe (no third-party
map tiles/embeds if drawn, not fetched).
**Cons:** an embedded Google-Maps-style live map is more "real" than a drawn one
(mitigated: a live map iframe is a third-party embed and a tracking/sovereignty
liability — a drawn map is preferable here).

### Option B: Google Maps embed + photographic render
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low (iframe) |
| Payload | External |
| Sovereignty | Weak — third-party embed, cookies/tracking |
| Availability | Render may not exist yet |

**Pros:** maximal realism if a render exists.
**Cons:** third-party embed contradicts sovereignty and adds cookies (feeds
ADR-0005); depends on assets that may not exist. Rejected as the primary path;
a render can still be added later as an optimised static asset.

### Option C: stay text-only / stock imagery
Rejected — text-only is the current failure; generic stock undercuts a bespoke
infrastructure brand.

## Trade-off Analysis
SVG-first removes the two blockers at once: it needs no render to exist and no
optimisation pipeline the static export lacks, while giving exact brand control
and a sovereignty-clean page. Raster is reserved for the OG card and any real
render, hand-optimised to respect the unoptimised-images constraint.

## Consequences
- **Easier:** ship a tangible, on-brand visual now; social unfurls carry a real
  image; no image-pipeline work.
- **Harder:** SVG authoring effort; must hand-optimise any raster and watch
  payload budgets manually (no automatic optimisation).
- **Revisit:** when a real facility render/aerial exists, or if a live/interactive
  map is genuinely wanted (then weigh the sovereignty/cookie cost explicitly).

## Action Items
1. [ ] Author the region-map and/or phased-timeline SVG in brand tokens.
2. [ ] Produce the 1200×630 OG card (optimised WebP/PNG) under `public/brand_assets/og/`.
3. [ ] Keep any raster ≤ ~200 KB; document the budget in `CLAUDE.md`.
4. [ ] Wire the OG image into metadata (ADR-0007).
5. [ ] Leave a slot to swap in a real render when supplied (artefact list).
