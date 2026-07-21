import { WHY_V53 } from '@/content/whyV53'

export function WhyV53() {
  return (
    <section className="why" id="why" aria-labelledby="why-heading">
      <div className="why__head">
        <span className="section-label reveal">Why V53</span>
        <h2 className="section-title reveal rd-1" id="why-heading">
          Built for the
          <br />
          hard questions.
        </h2>
        <span className="amber-rule reveal rd-2" aria-hidden="true" />
      </div>

      <div className="why__grid">
        {WHY_V53.map((b, i) => (
          <article
            key={b.num}
            className={`why-card reveal${i % 2 > 0 ? ' rd-1' : ''}`}
          >
            <div className="why-card__num">{b.num}</div>
            <h3 className="why-card__question">{b.question}</h3>
            <p className="why-card__answer">{b.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
