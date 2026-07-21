export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__top-stripe" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow hero-anim ha-1" aria-hidden="true">
          <span className="hero__eyebrow-line" />
          V53 AI Cluster · Groningen, NL
        </div>

        <h1 className="hero__headline hero-anim ha-2" id="hero-heading">
          <span className="accent">Computing capacity</span> for the EU digital economy.
        </h1>

        <p className="hero__sub hero-anim ha-3">
          V53 is a next generation AI Compute Cluster in the Groningen region, a critical
          building block of Europe’s digital backbone. Industrial grade capacity for
          large scale AI and HPC: scalable, demand ready and sovereign by design.
        </p>

        <div className="hero__actions hero-anim ha-4">
          <a className="btn btn--primary" href="#contact" aria-label="Reserve capacity">
            Reserve capacity
          </a>
          <a className="btn btn--ghost-dark" href="#services" aria-label="Explore services">
            Explore services
          </a>
        </div>

        <div className="hero__stats hero-anim ha-5" aria-label="At a glance">
          <div className="hero__stat">
            <div className="hero__stat-num">2027</div>
            <div className="hero__stat-label">MVP compute go live</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-num">Groningen</div>
            <div className="hero__stat-label">Strategic EU location</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-num">EU sovereign</div>
            <div className="hero__stat-label">GDPR native by design</div>
          </div>
        </div>
      </div>
    </section>
  )
}
