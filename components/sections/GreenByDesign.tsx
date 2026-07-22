import { INFRA_INTRO, GREENFIELD } from '@/content/infrastructure'

export function GreenByDesign() {
  return (
    <section className="chapter chapter--cloud" id="infrastructure" aria-labelledby="infra-heading">
      <div className="chapter__inner">
        <div className="chapter__head">
          <span className="section-label reveal">{INFRA_INTRO.label}</span>
          <h2 className="section-title reveal rd-1" id="infra-heading">
            {INFRA_INTRO.heading}
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <div className="chapter__lead reveal rd-2">
            {INFRA_INTRO.lead.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="chapter__block reveal rd-2">
          <h3 className="chapter__subhead">{GREENFIELD.heading}</h3>
          <p className="chapter__sublead">{GREENFIELD.lead}</p>
          <div className="chapter__grid chapter__grid--3">
            {GREENFIELD.points.map((p) => (
              <article className="feature-card" key={p.label}>
                <div className="feature-card__rule" aria-hidden="true" />
                <h4 className="feature-card__label">{p.label}</h4>
                <p className="feature-card__text">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
