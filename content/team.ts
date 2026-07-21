export type TeamMember = {
  name: string
  role: string
  bio: string
  /** Path under /public, e.g. /brand_assets/team/jane.jpg. Omit to use initials. */
  photo?: string
  /** Monogram shown when no photo is supplied. */
  initials: string
}

/**
 * Founding team. Real, approved bios + photos (ADR-0004).
 */
export const TEAM: TeamMember[] = [
  {
    name: 'Marc Rechter',
    role: 'Cofounder & CEO',
    bio: 'Cofounder of MCPV and CEO across the Resilient Group energy practice. Two decades spanning banking, property investment and renewable energy, from Algarve solar to green hydrogen.',
    photo: '/brand_assets/team/MarcRechter.jpg',
    initials: 'MR',
  },
  {
    name: 'Natalie Samovich',
    role: 'Cofounder & CTO',
    bio: 'Cofounder of MCPV and the Resilient Group, and Head of Research and Innovation at Enercoutim. Leads energy transition, green hydrogen and digital energy systems, and chairs the AIOTI Energy Working Group.',
    photo: '/brand_assets/team/NatalieSamovich.jpg',
    initials: 'NS',
  },
]
