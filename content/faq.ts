export type FaqItem = {
  question: string
  answer: string
}

export const FAQ: FaqItem[] = [
  {
    question: 'When can I start using V53 compute?',
    answer:
      'MVP compute is scheduled to go live in 2027. Forward capacity reservations are open today. Talk to us early and we will reserve dedicated nodes and a ramp schedule aligned with your roadmap.',
  },
  {
    question: 'What workloads is V53 designed for?',
    answer:
      'Large scale AI training, foundation model work and fine tuning, production inference at scale, scientific HPC, and sovereign hosting for regulated workloads. If a job has outgrown standard cloud quotas, V53 is designed for it.',
  },
  {
    question: 'Can I reserve capacity before 2027?',
    answer:
      'Yes. Forward contracts are open now. We work backwards from your launch date to size the reservation, set a ramp schedule and lock in pricing, so your roadmap is not gated by capacity that has not been built yet.',
  },
  {
    question: 'What hardware will V53 run?',
    answer:
      'Dense GPU clusters tuned for current generation training and inference, plus CPU heavy nodes for HPC, simulation and scientific workloads. Specific SKUs, memory and interconnect topology are confirmed in your reservation. What is in the contract is what you get, not a marketing slide.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Three modes. Reserved capacity for known, sustained workloads at the best per unit price. On demand for bursty or experimental usage. Hybrid where reservation carries the baseline and on demand absorbs the peaks. No mystery line items, no surprise egress bills.',
  },
  {
    question: 'Can I bring my own hardware?',
    answer:
      'Yes. Colocation is part of the offer. Place your own racks inside the V53 facility for power, dense cooling and high bandwidth interconnect, then burst into the wider cluster fabric when you need to scale beyond what you brought.',
  },
  {
    question: 'How do you handle data residency and compliance?',
    answer:
      'Data stays inside the EU unless you explicitly opt to move it. We provide signed Data Processing Agreements, region locked storage, and the audit hooks needed for GDPR, the EU AI Act, and sector regulators in finance, healthcare and the public sector.',
  },
  {
    question: 'Who is behind V53?',
    answer:
      'V53 is developed by Resilient Group, the company with extensive experience in renewable energy infrastructure and digital innovation.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Send a short note to team@v53ai.eu describing the workload, the capacity you need and the timeframe. We come back within two working days with a scoping conversation and, if we are a fit, a proposal covering reservation terms, ramp and engineering support.',
  },
]
