import { SERVICES } from '@/content/services'

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="services__head">
        <div className="services__head-grid">
          <div>
            <span className="section-label reveal">Services</span>
            <h2 className="section-title reveal rd-1" id="services-heading">
              Industrial grade
              <br />
              compute, ready
              <br />
              for AI.
            </h2>
            <span className="amber-rule reveal rd-2" aria-hidden="true" />
          </div>
          <p className="services__intro reveal rd-2">
            From training the next foundation model to running production inference,
            V53 delivers the kind of fully equipped, demand ready capacity that
            standard cloud quotas simply cannot match. Reserved, sovereign and
            scalable.
          </p>
        </div>
      </div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <article
            key={s.num}
            className={`service-card reveal${s.featured ? ' service-card--featured' : ''}${i % 3 > 0 ? ` rd-${Math.min(i % 3, 4)}` : ''}`}
          >
            <div className="service-card__top">
              <div className="service-card__num">{s.num}</div>
              {s.featured ? <span className="service-card__badge">Open now</span> : null}
            </div>
            <h3 className="service-card__title">{s.title}</h3>
            <div className="service-card__meta">{s.meta}</div>
            <div className="service-card__rule" aria-hidden="true" />
            <p className="service-card__desc">{s.desc}</p>
            <div className="service-card__tag">{s.tag}</div>
            {s.featured ? (
              <a className="service-card__cta" href="#contact">
                Reserve capacity
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
