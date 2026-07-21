# ADR-0001: Record architecture decisions

**Status:** Proposed
**Date:** 2026-07-20
**Deciders:** Oleg Kalenskyy (owner)

## Context
The v53ai.eu site is entering a substantial refactor (full restructure, brand
consolidation, legal pages, SEO). Decisions made now — hosting model, brand
tokens, contact strategy, domain — will constrain everything built afterwards.
Today there is no written record of any of these; the only design guidance
(`CLAUDE.md`) is stale and describes a template that no longer matches the
shipped site. Future contributors (human or AI agents via this same repo) need
a durable, greppable record of *why* the site is the way it is.

## Decision
Adopt lightweight ADRs, one Markdown file per decision, stored in
`docs/adr/` in this repository, numbered sequentially (`NNNN-title.md`).
Format is Nygard/MADR: Context, Decision, Options Considered, Trade-offs,
Consequences, Action Items. Status moves Proposed → Accepted → (Deprecated |
Superseded). ADRs are immutable once Accepted; a changed decision is a *new*
ADR that supersedes the old one (the old one's status is updated with a link).

## Options Considered

### Option A: ADRs in-repo (`docs/adr/`)
| Dimension | Assessment |
|-----------|------------|
| Complexity | Low |
| Cost | None |
| Discoverability | High — versioned with code, visible in PRs |
| Team familiarity | High — standard practice |

**Pros:** lives with the code; reviewed in the same PR that implements the
decision; no external tool; works offline and with agents.
**Cons:** not a pretty wiki; requires discipline to keep the index current.

### Option B: Wiki / Notion / external doc
| Dimension | Assessment |
|-----------|------------|
| Complexity | Medium |
| Cost | Tool dependency |
| Discoverability | Medium — drifts from code |
| Team familiarity | High |

**Pros:** nicer rendering, easier cross-linking.
**Cons:** drifts out of sync with the codebase; invisible in code review;
another surface to maintain; not available to in-repo agents.

### Option C: No formal record
**Pros:** zero overhead.
**Cons:** the exact problem we have now — undocumented, stale guidance;
decisions get silently reversed.

## Trade-off Analysis
For a small, single-maintainer marketing site that is also worked on by AI
agents through the repo, keeping the rationale *in the repo* is worth more than
prettier rendering. The cost (a Markdown file per decision) is negligible.

## Consequences
- **Easier:** onboarding, agent-assisted work, and reversing/revisiting
  decisions with full context.
- **Harder:** requires updating the index and writing an ADR before big changes.
- **Revisit:** if the project grows a team/wiki, ADRs can be mirrored, but the
  in-repo copy stays canonical.

## Action Items
1. [ ] Land `docs/adr/` with this set (0001–0010).
2. [ ] Link the ADR index from `README.md` and the rewritten `CLAUDE.md`.
3. [ ] Add a one-line contributor note: "significant change → new ADR first".
