import { FAQ } from '@/content/faq'
import { EMAIL } from '@/content/site'

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="faq__inner">
        <div>
          <span className="section-label reveal">FAQ</span>
          <h2 className="section-title reveal rd-1" id="faq-heading">
            Questions
            <br />
            people ask.
          </h2>
          <span className="amber-rule reveal rd-2" aria-hidden="true" />
          <p className="faq__aside-text reveal rd-3">
            Anything not answered here, email{' '}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </div>
        <div className="faq__list">
          {FAQ.map(({ question, answer }, i) => (
            <details key={i} className="faq-item reveal">
              <summary>{question}</summary>
              <p className="faq-item__answer">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
