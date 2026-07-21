export type ReservationMode = {
  name: string
  meta: string
  desc: string
}

export const RESERVATION_MODES: ReservationMode[] = [
  {
    name: 'Reserved',
    meta: 'Best per unit price',
    desc: 'Dedicated capacity for known, sustained workloads. Lock nodes, a ramp schedule and pricing ahead of MVP go live.',
  },
  {
    name: 'On demand',
    meta: 'Burst and experiment',
    desc: 'Flexible capacity for bursty or experimental usage. Scale up when you need it, without a long commitment.',
  },
  {
    name: 'Hybrid',
    meta: 'Baseline plus peaks',
    desc: 'Reservation carries the steady baseline while on demand absorbs the peaks. Predictable cost, room to spike.',
  },
]
