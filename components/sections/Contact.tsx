import { EMAIL, LINKEDIN_URL, ADDRESS, MAPS_URL } from '@/content/site'
import { NLMap } from '@/components/sections/NLMap'
import { MapCities } from '@/components/sections/MapCities'

// Office pin (Weesp) in the map's 0 0 1024 1024 coordinate space.
const PIN_X = 452
const PIN_Y = 456

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__inner">
        <div>
          <span className="section-label section-label--on-dark reveal">Contact</span>
          <h2 className="contact__title reveal rd-1" id="contact-heading">
            Reserve your <span className="accent">compute capacity.</span>
          </h2>
          <p className="contact__sub reveal rd-2">
            Tell us about the workload: training, inference, HPC or sovereign hosting,
            and the capacity you need before, at and after MVP go live. We will come
            back with a proposal: scope, timeline, reservation terms.
          </p>
        </div>

        <aside className="contact__panel reveal rd-2" aria-label="Direct contact">
          <div className="contact__panel-label">Direct</div>
          <a className="contact__panel-email" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
          {LINKEDIN_URL ? (
            <a
              className="contact__panel-linkedin"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          ) : null}
          <dl className="contact__panel-meta">
            <div className="contact__panel-meta-row">
              <dt>Location</dt>
              <dd>Groningen region, Netherlands</dd>
            </div>
            <div className="contact__panel-meta-row">
              <dt>MVP</dt>
              <dd>Compute go live 2027</dd>
            </div>
            <div className="contact__panel-meta-row">
              <dt>Coverage</dt>
              <dd>EU jurisdiction, sovereign by default</dd>
            </div>
          </dl>
        </aside>
      </div>

      <figure className="contact__map reveal rd-3">
        <div className="map-panel">
          <div className="map-panel__grid" aria-hidden="true" />
          <svg
            className="map-panel__svg"
            viewBox="0 0 1024 1024"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Map of the Netherlands with the V53 office at Weesp marked"
          >
            <NLMap />
            <MapCities />
            <line className="map__cross" x1={PIN_X} y1="0" x2={PIN_X} y2="1024" />
            <line className="map__cross" x1="0" y1={PIN_Y} x2="1024" y2={PIN_Y} />
            <circle className="map__ring" cx={PIN_X} cy={PIN_Y} r="58" />
            <circle className="map__pin" cx={PIN_X} cy={PIN_Y} r="19" />
            <circle className="map__pin-core" cx={PIN_X} cy={PIN_Y} r="7" />
          </svg>
          <figcaption className="map-panel__label">
            <span className="map-panel__place">V53 AI Cluster</span>
            <span className="map-panel__addr">{ADDRESS}</span>
            <a
              className="map-panel__link"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </figcaption>
        </div>
      </figure>
    </section>
  )
}
