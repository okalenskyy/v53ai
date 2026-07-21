export type Benefit = {
  num: string
  question: string
  answer: string
}

export const WHY_V53: Benefit[] = [
  {
    num: '01',
    question: 'Will your roadmap be gated by compute?',
    answer:
      'Not here. Forward reservations lock dedicated nodes and a ramp schedule to your launch dates, so capacity is ready when you are.',
  },
  {
    num: '02',
    question: 'Worried your data leaves the EU?',
    answer:
      'It does not. Compute and storage stay under EU jurisdiction by default, with audit trails built for GDPR and the EU AI Act.',
  },
  {
    num: '03',
    question: 'Tired of cloud quotas that throttle at scale?',
    answer:
      'V53 is industrial grade capacity sized for sustained training, inference and HPC, not burst limits and surprise egress bills.',
  },
  {
    num: '04',
    question: 'Need more than a slide of promises?',
    answer:
      'What is in your contract is what you run: named SKUs, memory and interconnect, with transparent utilisation reporting from day one.',
  },
]
