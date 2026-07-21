# ADR-0003: Adopt the V53/NODUM brand token system as the single design source

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy

## Context
The repository began as a dark-themed template inherited from the Altenture
site (dark background, red `#ED1C24` accent, Inter/JetBrains). It has since been
migrated in `app/globals.css` to a **light** system that matches the official
V53/NODUM Style Guide: Cloud White ground, Navy text, Amber accent, a blue
hero. But two sources of truth now disagree:

- `app/globals.css` `:root` — the **live** tokens (authoritative): `--cloud
  #F7F8FA`, `--white #FFFFFF`, `--navy #002D4A`, `--near-black #0D1B2A`,
  `--amber #F58E3C` (hover `#E47A1E`), `--slate #8A9BB0`, `--grid-line #DDE1E7`,
  hero `#2d5d9e`; display `Trebuchet MS`→Inter fallback, body Inter, mono
  JetBrains Mono.
- `CLAUDE.md` — **stale**, still describes the dark/red template.
- `public/brand_assets/V53_NODUM_StyleGuide.md` — the brand bible (light,
  navy/amber, Trebuchet/Calibri), aligned with globals.css but written for
  PPTX/Word, not web.

The owner's instruction is explicit: **use the palette from the live v53ai.eu**.
So the live `globals.css` tokens are canonical; the Style Guide is the
supporting reference; `CLAUDE.md` must be corrected.

Two real defects sit inside this: (1) `--font-display` lists `Trebuchet MS`
first, but Trebuchet is **not web-delivered**, so nearly all visitors render
headings in the Inter fallback — the display typography is effectively a lie;
(2) any residual `#ED1C24` (red) from the template must be purged.

## Decision
Treat the `:root` token block in `app/globals.css` as the **single source of
truth** for the web design system. All section CSS references tokens, never raw
hex (the one allowed literal is the hero blue, itself tokenised as `--hero-bg`).
Reconcile the display font honestly: either **self-host/deliver a licensed
display face** for H1–H2 (open-source grotesk such as Space Grotesk or
Instrument Sans, via `next/font`), keeping Inter for body — **or** drop the
Trebuchet reference and standardise on Inter 800 for display. Purge all
`#ED1C24`. Update `CLAUDE.md` to describe this system. The Style Guide remains
the cross-medium brand reference (decks, docs) and must not be contradicted.

## Options Considered

### Option A: globals.css tokens canonical + deliver a display font (recommended)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low–Medium |
| Cost | None (open-source font) |
| Brand payoff | High — headlines gain the intended weight/character |
| Consistency | High — one token source, web fonts actually delivered |

**Pros:** matches the owner's instruction; fixes the phantom-Trebuchet bug;
gives headings real presence; keeps everything token-driven.
**Cons:** adds one web font to load (mitigated: subset + `display: swap`, H1/H2
only); Space Grotesk ≠ Trebuchet, so a small divergence from the PPTX face.

### Option B: globals.css tokens canonical + Inter-only display
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low |
| Cost | None |
| Brand payoff | Medium — honest but flatter headlines |
| Consistency | High |

**Pros:** zero extra fonts; simplest; already the de-facto rendering.
**Cons:** leaves headline ambition on the table; still must delete the
misleading Trebuchet reference so the fallback is intentional.

### Option C: License and web-deliver Trebuchet MS
**Pros:** exact parity with the Style Guide face.
**Cons:** Trebuchet MS is not freely web-licensable; licensing cost and hassle
for marginal gain. Rejected.

## Trade-off Analysis
The palette is settled by instruction — the only live question is the display
font. Option A is the higher-craft choice and costs almost nothing; Option B is
the safe minimum. Either is acceptable; **do not** ship the status quo where
Trebuchet is declared but never delivered. Prefer A unless load budget is tight.

## Consequences
- **Easier:** every future section inherits correct colours/spacing from tokens;
  the brand reads as one system across web and decks.
- **Harder:** contributors must add tokens rather than raw hex; one more font in
  the critical path if Option A.
- **Revisit:** if a formal web brand kit (with a licensed display face) is ever
  produced, supersede this ADR.

## Action Items
1. [ ] Pick Option A or B (font decision) and record it here before build.
2. [ ] Purge every `#ED1C24` and any other Altenture-era literal from CSS/SVG.
3. [ ] If A: add the display face via `next/font`, H1/H2 only, subset, swap.
4. [ ] Fix stray double spaces in heading strings.
5. [ ] Rewrite `CLAUDE.md`'s design section to this system; delete dark-theme text.
6. [ ] Add a short "tokens" note to `CLAUDE.md` pointing at `:root`.
