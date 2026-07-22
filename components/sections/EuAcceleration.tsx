import { EU_ZONES } from '@/content/infrastructure'

export function EuAcceleration() {
  return (
    <section className="chapter chapter--white" id="eu-zones" aria-labelledby="eu-heading">
      <div className="chapter__inner">
        <div className="chapter__head">
          <span className="section-label reveal">{EU_ZONES.label}</span>
          <h2 className="section-title reveal rd-1" id="eu-heading">
            {EU_ZONES.heading}
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <p className="chapter__lead reveal rd-2">{EU_ZONES.lead}</p>
        </div>

        <div className="chapter__grid chapter__grid--2 reveal rd-2">
          {EU_ZONES.cards.map((c) => (
            <article className="eu-card" key={c.label}>
              <h3 className="eu-card__label">{c.label}</h3>
              <p className="eu-card__text">{c.text}</p>
              {c.note ? <p className="eu-card__note">{c.note}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
