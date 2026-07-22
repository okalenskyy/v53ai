import { NODUM } from '@/content/infrastructure'

export function Nodum() {
  return (
    <section className="chapter chapter--cloud" id="nodum" aria-labelledby="nodum-heading">
      <div className="chapter__inner">
        <div className="chapter__head">
          <span className="section-label reveal">{NODUM.label}</span>
          <h2 className="section-title reveal rd-1" id="nodum-heading">
            {NODUM.heading}
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <p className="chapter__lead reveal rd-2">{NODUM.lead}</p>
        </div>

        <div className="chapter__grid chapter__grid--auto reveal rd-2">
          {NODUM.points.map((p) => (
            <article className="feature-card" key={p.label}>
              <div className="feature-card__rule" aria-hidden="true" />
              <h3 className="feature-card__label">{p.label}</h3>
              <p className="feature-card__text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
