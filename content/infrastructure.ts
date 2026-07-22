// Content for the "Sovereign, green by design" chapter (after About).
// Source: docs/V53_Homepage_Copy_MR.docx. Copy adapted to the site's rules
// (no hyphens/em dashes) with all of the document's disclaimers preserved.

export type Point = { label: string; text: string }

export const INFRA_INTRO = {
  label: 'Infrastructure',
  heading: 'Sovereign AI infrastructure, green by design.',
  lead: [
    'V53 is a greenfield AI cluster engineered from the ground up around energy, bringing renewables, green hydrogen and intelligent energy optimisation together with sovereign compute capacity and the conditions to meet growing demand.',
    'It is an integrated energy and compute cluster, designed from first principles to meet Europe’s emerging requirements for large scale AI infrastructure: sovereign, efficient and sustainable by design. Alongside it, the NODUM AI Competence Hub converts client requirements into regional capability and supports them along the journey.',
  ],
}

export const GREENFIELD = {
  heading: 'Greenfield, resilient by design.',
  lead: 'Greenfield means we begin with a blank site and design the whole system, power, cooling, hydrogen, heat reuse and compute, as a single architecture rather than retrofitting an existing building. Every element is specified against European acceleration zone criteria from the start.',
  points: [
    {
      label: 'One integrated architecture',
      text: 'Generation, storage, cooling and compute engineered together, optimised and future proof through a roadmap.',
    },
    {
      label: 'Modular and phased',
      text: 'Capacity is added in defined blocks, so the cluster scales in step with demand and evolving business models.',
    },
    {
      label: 'Requirements by design',
      text: 'Sovereignty, sustainability and resilience are written into the specification and enabled by state of the art technologies.',
    },
  ] as Point[],
}

export const ENERGY_CLUSTER = {
  label: 'Energy',
  heading: 'An energy cluster, not just a data centre.',
  lead: 'The scarce resource in AI is not land or servers, it is clean, reliable power. V53 is built around a power hub that brings renewables, green hydrogen and energy optimisation into one system, designed to strengthen the regional grid rather than strain it.',
  points: [
    {
      label: 'Direct renewable supply',
      text: 'Targeting 100% renewable matching from the first day of operation.',
    },
    {
      label: 'Green hydrogen backup',
      text: 'Zero emission fuel cells replace diesel generators for resilience, supplied from a European green hydrogen partner cluster.',
    },
    {
      label: 'Energy optimisation',
      text: 'A full stack of solutions giving network operators the demand flexibility they need, and stretching beyond.',
    },
    {
      label: 'Heat as a product',
      text: 'Waste heat from liquid cooled servers is planned to be captured and made available for local reuse.',
    },
    {
      label: 'An energy hub for the region',
      text: 'Substation capacity, battery storage and hydrogen infrastructure sized to serve the cluster and, potentially, its neighbours.',
    },
  ] as Point[],
}

export type EuCard = { label: string; text: string; note?: string }

export const EU_ZONES = {
  label: 'EU acceleration zones',
  heading: 'Built to meet EU acceleration zone requirements.',
  lead: 'Europe is reshaping how large scale AI infrastructure is planned, powered and governed. V53 is designed to align with that framework from the outset.',
  cards: [
    {
      label: 'The Cloud and AI Development Act',
      text: 'Proposed in June 2026, CADA introduces fast tracked data centre acceleration zones and a European sovereignty framework for cloud and AI. V53’s clean energy integration, waste heat design and co located generation and storage map directly to the criteria these zones are expected to reward.',
      note: 'CADA is a legislative proposal under negotiation. V53 is designed to align with its criteria, not certified under it.',
    },
    {
      label: 'Sovereignty and security',
      text: 'EU located processing, designed to support the higher assurance levels required for public sector and critical workloads, and aligned with the EU AI Act, NIS2 and the Data Act portability rules.',
    },
    {
      label: 'Measured sustainability',
      text: 'Designed against Europe’s data centre energy metrics for power, water, energy reuse and renewable factors, and built for the reporting regime introduced under the Energy Efficiency Directive.',
    },
    {
      label: 'Part of the European compute network',
      text: 'Positioned to complement and interface with the region’s EuroHPC AI Factory in Groningen, extending sovereign compute capacity for enterprises, the public sector and research.',
    },
  ] as EuCard[],
}

export type Spec = { num: string; label: string }

export const COMPUTE_LAYER = {
  label: 'Compute',
  heading: 'The compute layer.',
  lead: 'The infrastructure exists to serve compute, delivered in modular, high density blocks ready for the most demanding AI workloads.',
  specs: [
    { num: '50 MWe', label: 'Contracted grid capacity, engineered to scale toward 100 MWe' },
    { num: 'Tier III to IV', label: 'Reliability targets, modular for fast time to market' },
    { num: 'Liquid cooled', label: 'Advanced cooling for high density GPU clusters' },
  ] as Spec[],
}

export const NODUM = {
  label: 'Capability',
  heading: 'NODUM AI Competence Hub.',
  lead: 'Infrastructure alone does not build capability. NODUM turns V53’s compute into skills, research and adoption for the region: the human layer of the cluster.',
  points: [
    {
      label: 'Training and certification',
      text: 'Training, simulation and certification with regional universities and national research institutes.',
    },
    {
      label: 'AI in energy',
      text: 'Digital twin and AI use cases in energy: predictive maintenance, grid congestion relief, flexibility services and operational optimisation.',
    },
    {
      label: 'A living lab',
      text: 'Hands on access to sovereign compute for students, researchers and enterprises.',
    },
    {
      label: 'Enterprise migration',
      text: 'Support for enterprises migrating to European sovereign compute capacity.',
    },
  ] as Point[],
}
