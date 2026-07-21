import { TEAM } from '@/content/team'
import { SECTIONS } from '@/content/site'

/**
 * Team lockup rendered inside the About section. Photo cards with a one-line
 * bio; falls back to initials monograms when a member has no photo.
 */
export function Team() {
  if (!SECTIONS.team || TEAM.length === 0) return null

  return (
    <div className="team reveal">
      <div className="team__head">
        <span className="section-label">Team</span>
        <h3 className="team__title">The people building V53.</h3>
      </div>
      <div className="team__grid">
        {TEAM.map((m) => (
          <article className="team-card" key={m.name}>
            <div className="team-card__photo">
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.photo} alt={m.name} />
              ) : (
                <span className="team-card__initials" aria-hidden="true">
                  {m.initials}
                </span>
              )}
            </div>
            <div className="team-card__name">{m.name}</div>
            <div className="team-card__role">{m.role}</div>
            <p className="team-card__bio">{m.bio}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
