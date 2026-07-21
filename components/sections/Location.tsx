const FACTS: { label: string; text: string }[] = [
  { label: 'Grid power', text: 'Abundant grid capacity in the northern Netherlands, sized for dense GPU and HPC loads.' },
  { label: 'Fibre', text: 'Dense connectivity into the European backbone, low latency to major hubs.' },
  { label: 'Room to scale', text: 'Land and power headroom for a phased buildout beyond the 2027 MVP.' },
]

export function Location() {
  return (
    <section className="location" id="location" aria-labelledby="location-heading">
      <div className="location__inner">
        <div className="location__copy">
          <span className="section-label reveal">Location</span>
          <h2 className="section-title reveal rd-1" id="location-heading">
            Anchored in
            <br />
            Groningen.
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <p className="location__lead reveal rd-2">
            V53 sits in the Groningen region, where grid power, fibre and a stable EU
            jurisdiction meet. The physical ground under a sovereign digital backbone.
          </p>
          <dl className="location__facts reveal rd-3">
            {FACTS.map((f) => (
              <div className="location__fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="location__map reveal rd-2">
          <div className="map-panel">
            <div className="map-panel__grid" aria-hidden="true" />
            <svg
              className="map-panel__svg"
              viewBox="0 0 420 380"
              role="img"
              aria-label="Stylised map of the northern Netherlands with the Groningen region marked"
            >
              {/* stylised northern-NL landmass */}
              <path
                className="map__land"
                d="M40,150 L96,120 L150,132 L196,108 L236,120 L250,104 L272,116 L330,126 L372,168 L360,214 L322,242 L262,236 L214,258 L156,250 L104,258 L66,224 L48,190 Z"
              />
              {/* crosshair through the pin */}
              <line className="map__cross" x1="252" y1="40" x2="252" y2="340" />
              <line className="map__cross" x1="70" y1="176" x2="400" y2="176" />
              {/* pulsing locator ring + pin */}
              <circle className="map__ring" cx="252" cy="176" r="26" />
              <circle className="map__pin" cx="252" cy="176" r="9" />
              <circle className="map__pin-core" cx="252" cy="176" r="3" />
            </svg>
            <div className="map-panel__label">
              <span className="map-panel__place">Groningen · Veendam</span>
              <span className="map-panel__coord">53.1°N · 6.9°E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
