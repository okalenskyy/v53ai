import { ENERGY_CLUSTER } from '@/content/infrastructure'

export function EnergyCluster() {
  return (
    <section className="chapter chapter--dark" id="energy" aria-labelledby="energy-heading">
      <div className="chapter__inner">
        <div className="chapter__head">
          <span className="section-label reveal">{ENERGY_CLUSTER.label}</span>
          <h2 className="section-title section-title--on-dark reveal rd-1" id="energy-heading">
            {ENERGY_CLUSTER.heading}
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <p className="chapter__lead reveal rd-2">{ENERGY_CLUSTER.lead}</p>
        </div>

        <div className="chapter__grid chapter__grid--auto reveal rd-2">
          {ENERGY_CLUSTER.points.map((p) => (
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
