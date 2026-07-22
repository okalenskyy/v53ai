/**
 * Single source of truth for cross-section site constants.
 * Copy fixes (ADR-0006) and SEO absolute URLs (ADR-0007/0009) read from here.
 */

/** Canonical production origin. All absolute URLs (canonical, OG, JSON-LD) use this. */
export const DOMAIN = 'https://v53ai.eu'

export const SITE_NAME = 'V53 AI Cluster'

/** One-line site description. Reused by metadata (title/OG/Twitter) and Organization schema. */
export const SITE_DESCRIPTION =
  'V53 is a next generation AI Compute Cluster in the Groningen region, delivering sovereign, industrial grade training, inference and HPC capacity for Europe. MVP compute goes live in 2027.'

/** Title used across metadata and OG. */
export const SITE_TITLE = 'V53 AI Cluster, computing capacity for the EU digital economy'

/** OG card (1200x630). Absolute URL is built from DOMAIN in metadata/schema. */
export const OG_IMAGE = '/brand_assets/og/og-default.jpg'

/** Display date for the legal pages' "Last updated" line. */
export const LEGAL_UPDATED = '21 July 2026'

/** Canonical contact email. Set once here; used in mailto, footer, Organization schema. */
export const EMAIL = 'team@v53ai.eu'

/** LinkedIn company page. Empty string hides the link until supplied. */
export const LINKEDIN_URL = 'https://www.linkedin.com/company/v53cloud'

/**
 * Legal entity (imprint + Organization schema). Values marked TODO(entity)
 * are release blockers for the legal go-live only (ADR-0005).
 */
export const ENTITY = {
  registeredName: 'MCPV', // TODO(entity): confirm full registered B.V. name
  kvk: '', // TODO(entity)
  address: '', // TODO(entity)
  operatedBy: 'MCPV · NODUM AI Competence Hub',
}

/**
 * Section feature flags. A section stays off until its content is cleared /
 * supplied; never fake logos or quotes (ADR-0004/0005).
 */
export const SECTIONS = {
  partners: false,
  voices: false,
  team: false,
}
