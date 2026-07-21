import { RESERVATION_MODES } from '@/content/reservationModes'

export function ReservationModes() {
  return (
    <section className="modes" id="modes" aria-labelledby="modes-heading">
      <div className="modes__head">
        <div>
          <span className="section-label reveal">Reservation modes</span>
          <h2 className="section-title reveal rd-1" id="modes-heading">
            Three ways
            <br />
            to book capacity.
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
        </div>
        <p className="modes__intro reveal rd-2">
          Match the commitment to the workload. Reserved for the baseline, on demand for
          the spikes, hybrid for both. No mystery line items, no surprise egress bills.
        </p>
      </div>

      <div className="modes__grid">
        {RESERVATION_MODES.map((m, i) => (
          <article key={m.name} className={`mode-card reveal${i > 0 ? ` rd-${Math.min(i, 4)}` : ''}`}>
            <div className="mode-card__meta">{m.meta}</div>
            <h3 className="mode-card__name">{m.name}</h3>
            <div className="mode-card__rule" aria-hidden="true" />
            <p className="mode-card__desc">{m.desc}</p>
            <a className="mode-card__cta" href="#contact">
              Reserve capacity
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
