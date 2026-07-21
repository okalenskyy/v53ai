import { EMAIL, LINKEDIN_URL } from '@/content/site'

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__inner">
        <div>
          <span className="section-label section-label--on-dark reveal">Contact</span>
          <h2 className="contact__title reveal rd-1" id="contact-heading">
            Talk to us about <span className="accent">AI capacity.</span>
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
    </section>
  )
}
