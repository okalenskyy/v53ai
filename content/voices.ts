export type Voice = {
  quote: string
  name: string
  title: string
  org: string
  /** Optional monogram fallback when no avatar image is used. */
  initials?: string
}

/**
 * PLACEHOLDER voices — illustrative audience archetypes, not real named
 * endorsements. Replace with real, approved quotes (name, title, org) before a
 * serious launch, or set SECTIONS.voices = false to hide the section. Never
 * attribute a placeholder to a real person or company (ADR-0004).
 */
export const VOICES: Voice[] = [
  {
    quote:
      'V53 gives us capacity we can plan around. Dedicated nodes and a ramp schedule that match our roadmap, not a queue.',
    name: 'Enterprise AI',
    title: 'Head of Platform Engineering',
    org: 'Financial services',
    initials: 'EA',
  },
  {
    quote:
      'Compute and data that stay under EU jurisdiction by default. That is what let us move our regulated workloads.',
    name: 'Sovereign Cloud',
    title: 'Chief Technology Officer',
    org: 'Healthcare',
    initials: 'SC',
  },
  {
    quote:
      'Industrial grade capacity for sustained HPC, without the quotas and egress surprises we hit everywhere else.',
    name: 'Research Computing',
    title: 'Programme Director',
    org: 'Public research',
    initials: 'RC',
  },
]
