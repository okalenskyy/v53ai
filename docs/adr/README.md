# Architecture Decision Records — V53 AI Cluster site

This directory holds the Architecture Decision Records (ADRs) for the v53ai.eu
website. An ADR captures one significant decision: its context, the options
considered, the choice made, and the consequences. Format follows Nygard /
MADR (see ADR-0001).

## Status legend
- **Proposed** — written, awaiting sign-off. Do not treat as binding yet.
- **Accepted** — signed off; implementation may rely on it.
- **Deprecated** — no longer applies.
- **Superseded by ADR-XXXX** — replaced by a later decision.

## Index

| ADR | Title | Status |
|-----|-------|--------|
| [0001](0001-record-architecture-decisions.md) | Record architecture decisions (process + location) | Proposed |
| [0002](0002-retain-static-export-hosting.md) | Static export artifact; AWS for dev/preview, manual non-AWS production | Proposed |
| [0003](0003-brand-token-system.md) | Adopt the V53/NODUM brand token system as the single design source | Proposed |
| [0004](0004-section-component-content-architecture.md) | Section-per-component + content-as-data architecture | Proposed |
| [0005](0005-legal-compliance-pages.md) | Add static legal/compliance pages and legal-entity disclosure | Proposed |
| [0006](0006-contact-mailto-only.md) | Keep contact mailto-only; defer forms | Proposed |
| [0007](0007-seo-metadata-structured-data.md) | Add SEO metadata, OpenGraph/Twitter and JSON-LD structured data | Proposed |
| [0008](0008-imagery-og-strategy.md) | SVG-first imagery and a branded OG image strategy | Proposed |
| [0009](0009-canonical-domain-dns.md) | Environment topology and canonical domain (dev v53ai.kalenskyy.com vs prod v53ai.eu) | Proposed |
| [0010](0010-accessibility-motion-baseline.md) | Accessibility (WCAG AA) and reduced-motion baseline | Proposed |

## How these relate to the plan
The refactor plan (`../REFACTOR_PLAN.md`) is the *how and when*. These ADRs are
the *why*. Each workstream in the plan cites the ADR(s) that authorise it.
Accept, amend or reject each ADR before development starts.
