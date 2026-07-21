# ADR-0004: Section-per-component + content-as-data architecture

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy

## Context
`app/page.tsx` is a single ~600-line `'use client'` component that mixes
markup with content data (the `SERVICES`, `FAQ`, `NAV_LINKS` arrays are declared
inline at the top). The refactor roughly doubles the number of sections (Ticker,
Why V53, Location, Partners, Voices, Reservation modes, plus legal pages) and
needs the FAQ content in *two* places (rendered list **and** JSON-LD FAQPage
schema — ADR-0007). Continuing with one monolithic client file would make the
build hard to navigate, force the whole page to be client-rendered, and risk the
FAQ content drifting between the visible list and the structured data.

## Decision
Refactor into two layers:

1. **Content as data** — move all copy/data into typed modules under `content/`
   (`services.ts`, `faq.ts`, `reservationModes.ts`, `partners.ts`, `voices.ts`,
   `nav.ts`, `site.ts`). `site.ts` also holds shared constants (canonical email,
   LinkedIn URL, legal-entity fields, and section feature-flags). Each has a
   TypeScript type so content shape is enforced.
2. **Section-per-component** — one component per section under
   `components/sections/`, composed by a thin `app/page.tsx`. Interactive pieces
   (Nav, MobileMenu, a `Reveal` wrapper around the IntersectionObserver) are the
   only client components; static sections stay server components (safe under
   static export) to shrink the client bundle.

FAQ schema (ADR-0007) is generated from the **same** `content/faq.ts`, so the
visible FAQ and the structured data cannot diverge. Partners/Voices render only
entries marked cleared/approved; if none, the section is feature-flagged off in
`site.ts` rather than faked.

## Options Considered

### Option A: content modules + section components (recommended)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Medium (one-time refactor) |
| Maintainability | High — small files, clear ownership |
| Bundle | Smaller — static sections off the client |
| Risk of content drift | Low — single content source |

**Pros:** scales to the new sections; content editable without touching markup;
schema and UI share one source; smaller client JS.
**Cons:** upfront refactor before feature work; more files.

### Option B: keep one page.tsx, add sections inline
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low now, High later |
| Maintainability | Low — 900+ line client file |
| Bundle | Whole page client-rendered |
| Risk of content drift | High — FAQ duplicated for schema |

**Pros:** no refactor; fastest first commit.
**Cons:** unmaintainable at the new size; forces client rendering; invites FAQ
drift. Rejected.

### Option C: introduce a CMS (Sanity/Contentlayer/MDX)
| Dimension | Assessment |
|-----------|------------|
| Complexity | High |
| Cost | Tool/vendor |
| Fit | Overkill for a single largely-static page |

**Pros:** non-dev editing.
**Cons:** disproportionate for one page with one maintainer; adds a dependency
and possibly a vendor. Out of scope (see plan non-goals). Rejected for now.

## Trade-off Analysis
The refactor cost in Option A is paid once and unblocks every new section and
the schema-from-one-source requirement. Option B's speed is illusory — it moves
cost to every subsequent change. A CMS solves a problem we do not have.

## Consequences
- **Easier:** adding/reordering sections; editing copy; keeping schema in sync;
  code review (small diffs per section).
- **Harder:** the initial extraction; contributors must know where content vs
  markup lives (documented in `CLAUDE.md`).
- **Revisit:** if non-technical editing becomes a need, reconsider MDX/CMS in a
  new ADR.

## Action Items
1. [ ] Create `content/` modules with types; move existing arrays across
   verbatim first (no copy changes) to keep the refactor reviewable.
2. [ ] Split `page.tsx` into `components/sections/*`; keep client boundary minimal.
3. [ ] Add `Reveal` wrapper; move IntersectionObserver logic into it.
4. [ ] Add `SECTIONS` feature-flags in `content/site.ts`.
5. [ ] Update `CLAUDE.md` "Adding a new section" steps to the new structure.
