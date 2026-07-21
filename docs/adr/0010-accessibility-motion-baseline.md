# ADR-0010: Accessibility (WCAG AA) and reduced-motion baseline

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy

## Context
The site sells to regulated, enterprise and public-sector buyers — audiences for
whom accessibility is often a procurement requirement (and, for public bodies in
the EU, a legal one). The current build has some good habits (logo alt text,
`aria` on the mobile menu, focus states in CSS) but also risks: amber `#F58E3C`
and slate `#8A9BB0` both **fail WCAG AA for normal-size body text** on light
backgrounds (per the Style Guide's own contrast table — amber ≈ 3.1:1, slate ≈
3.2:1), the design uses reveal-on-scroll and (proposed) a marquee ticker with no
stated reduced-motion handling, and icon/arrow glyphs risk reading oddly to
screen readers. No accessibility target is written down.

## Decision
Adopt **WCAG 2.1 AA** as the baseline and encode these rules:

- **Contrast:** body/interactive text uses navy `#002D4A` or near-black
  `#0D1B2A` on light surfaces (both far exceed AA). **Amber and slate are for
  large text (≥ 18pt/24px, or 14pt bold) and decoration only** — never
  small body copy. Audit and fix any current small text on amber/slate.
- **Motion:** honour `prefers-reduced-motion: reduce` — disable scroll reveals
  (render content visible) and freeze the ticker. Only animate `opacity`/
  `transform` (already a repo rule).
- **Semantics/focus:** `aria-label` on icon-only and arrow buttons; the `→`
  glyph stays `aria-hidden` (already done in places — make it consistent);
  visible `:focus-visible` ring on every interactive element; each section keeps
  its `aria-labelledby`.
- **Targets:** Lighthouse Accessibility ≥ 95 and zero WCAG AA contrast failures
  on text, verified with WAVE + Lighthouse, as a Definition-of-Done gate.

## Options Considered

### Option A: WCAG AA baseline, enforced in DoD (recommended)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low |
| Cost | Minor (audit + a few colour/aria fixes) |
| Buyer fit | High — meets procurement expectations |

**Pros:** matches the regulated/public-sector audience; cheap; mostly
already-followed patterns made explicit and testable.
**Cons:** constrains amber/slate usage (a good constraint — the Style Guide
already says so).

### Option B: AAA
**Pros:** maximal.
**Cons:** disproportionate for a marketing site; AAA contrast would further
restrict the brand palette. Not warranted.

### Option C: no explicit standard (status quo)
Rejected — leaves known contrast failures unaddressed for an audience that
audits for exactly this.

## Trade-off Analysis
AA is the right rung: it is what enterprise/public procurement checks for, it is
cheap here because the codebase mostly already follows the patterns, and it
aligns with the Style Guide's own accessibility guidance. AAA would fight the
brand palette for no proportionate benefit.

## Consequences
- **Easier:** passes buyer/procurement accessibility checks; reduced-motion
  users get a comfortable experience; the palette rules are unambiguous.
- **Harder:** amber/slate can't be used for small text (must police in review);
  every new interactive element needs focus + aria discipline.
- **Revisit:** if a specific customer mandates AAA or an EN 301 549 statement,
  add a formal accessibility statement page and a superseding ADR.

## Action Items
1. [ ] Audit all text colours; move any small amber/slate text to navy/near-black.
2. [ ] Add `prefers-reduced-motion` handling for reveals and the ticker.
3. [ ] Ensure `aria-label` on icon/arrow buttons; `→` stays `aria-hidden`.
4. [ ] Confirm `:focus-visible` rings on every interactive element.
5. [ ] Gate release on Lighthouse a11y ≥ 95 + WAVE clean (DoD).
