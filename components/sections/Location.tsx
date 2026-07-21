import { NLMap } from '@/components/sections/NLMap'

// Groningen / Veendam position in the map's 0 0 1024 1024 coordinate space.
const PIN_X = 792
const PIN_Y = 202

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
              viewBox="0 0 1024 1024"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Map of the Netherlands with the Groningen region marked"
            >
              <NLMap />
              {/* crosshair through the pin */}
              <line className="map__cross" x1={PIN_X} y1="0" x2={PIN_X} y2="1024" />
              <line className="map__cross" x1="0" y1={PIN_Y} x2="1024" y2={PIN_Y} />
              {/* pulsing locator ring + pin at Groningen / Veendam */}
              <circle className="map__ring" cx={PIN_X} cy={PIN_Y} r="58" />
              <circle className="map__pin" cx={PIN_X} cy={PIN_Y} r="19" />
              <circle className="map__pin-core" cx={PIN_X} cy={PIN_Y} r="7" />
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
