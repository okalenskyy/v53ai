import { COMPUTE_LAYER } from '@/content/infrastructure'

export function ComputeLayer() {
  return (
    <section className="chapter chapter--dark" id="compute" aria-labelledby="compute-heading">
      <div className="chapter__inner">
        <div className="chapter__head">
          <span className="section-label reveal">{COMPUTE_LAYER.label}</span>
          <h2 className="section-title section-title--on-dark reveal rd-1" id="compute-heading">
            {COMPUTE_LAYER.heading}
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <p className="chapter__lead reveal rd-2">{COMPUTE_LAYER.lead}</p>
        </div>

        <div className="spec-band reveal rd-2">
          {COMPUTE_LAYER.specs.map((s) => (
            <div className="spec" key={s.num}>
              <div className="spec__num">{s.num}</div>
              <div className="spec__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
