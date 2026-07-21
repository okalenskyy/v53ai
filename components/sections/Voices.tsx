import { VOICES } from '@/content/voices'
import { SECTIONS } from '@/content/site'

export function Voices() {
  if (!SECTIONS.voices || VOICES.length === 0) return null

  return (
    <section className="voices" id="voices" aria-labelledby="voices-heading">
      <div className="voices__head">
        <span className="section-label reveal">Voices</span>
        <h2 className="section-title reveal rd-1" id="voices-heading">
          What partners
          <br />
          are saying.
        </h2>
        <span className="amber-rule reveal rd-2" aria-hidden="true" />
      </div>

      <div className="voices__grid">
        {VOICES.map((v, i) => (
          <figure key={v.name} className={`voice-card reveal${i > 0 ? ` rd-${Math.min(i, 4)}` : ''}`}>
            <blockquote className="voice-card__quote">{v.quote}</blockquote>
            <figcaption className="voice-card__by">
              <span className="voice-card__avatar" aria-hidden="true">
                {v.initials ?? v.name.charAt(0)}
              </span>
              <span className="voice-card__meta">
                <span className="voice-card__name">{v.name}</span>
                <span className="voice-card__role">
                  {v.title}, {v.org}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
