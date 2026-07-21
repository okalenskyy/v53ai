export type Service = {
  num: string
  title: string
  meta: string
  desc: string
  tag: string
  /** Card 06 (Capacity Reservation) is the only thing sellable today. */
  featured?: boolean
}

export const SERVICES: Service[] = [
  {
    num: '01',
    title: 'AI Training Compute',
    meta: 'GPU clusters · multi node',
    desc:
      'Dense GPU capacity for training foundation models, fine tuning LLMs and running large scale deep learning workloads. Reserved nodes, predictable performance, transparent utilisation reporting from day one.',
    tag: 'Train · Fine tune · Iterate',
  },
  {
    num: '02',
    title: 'High Performance Computing',
    meta: 'HPC · research & enterprise',
    desc:
      'Industrial grade HPC capacity for scientific computing, simulation, computational chemistry, financial modelling and any workload that has outgrown a standard cloud quota. Designed to run hot, but stay stable.',
    tag: 'Simulate · Solve · Scale',
  },
  {
    num: '03',
    title: 'AI Inference at Scale',
    meta: 'Low latency · production',
    desc:
      'Production inference for chat, search, agents and decision systems. Tuned for latency, cost per token and sustained throughput, with capacity that grows with your traffic instead of throttling it.',
    tag: 'Serve · Scale · Save',
  },
  {
    num: '04',
    title: 'Sovereign AI Hosting',
    meta: 'EU · GDPR native',
    desc:
      'Compute and data that never leave Europe. Sovereign infrastructure for regulated industries: finance, healthcare, public sector, defence, where jurisdiction, lineage and audit trail are not negotiable.',
    tag: 'Sovereignty · Residency · Audit',
  },
  {
    num: '05',
    title: 'Colocation & Hybrid',
    meta: 'Bring your own · custom',
    desc:
      'Place your own hardware inside an AI grade facility. Direct power, dense cooling, high bandwidth interconnect, plus a clean handoff into the wider V53 fabric when you need to burst beyond your own racks.',
    tag: 'Co locate · Connect · Extend',
  },
  {
    num: '06',
    title: 'Capacity Reservation',
    meta: 'Pre 2027 · forward booked',
    desc:
      'Secure dedicated AI compute ahead of MVP go live in 2027. Forward contracts, ramp schedules and engineering support so your roadmap is not gated by capacity that has not been built yet.',
    tag: 'Reserve · Ramp · Launch',
    featured: true,
  },
]
