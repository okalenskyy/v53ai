'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const goTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' })
  }

  // REPLACE: point to the actual application form / booking link
  const apply = () => { window.open('https://[APPLICATION-FORM-URL]', '_blank') }

  return (
    <>
      {/* ══════════════════ NAV ══════════════════ */}
      <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} aria-label="Main navigation">
        {/* REPLACE: swap logo file — place logo in /public/brand_assets/ */}
        <a href="#" className="nav__logo" aria-label="[SITE NAME] home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/logo-white.png" alt="[SITE NAME]" width={140} height={22} />
        </a>

        <ul className="nav__links" role="list">
          {([
            ['#how-it-works', 'How it works'],
            ['#cost',         'Cost'],
            ['#about',        'About'],
            ['#faq',          'FAQ'],
          ] as const).map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); goTo(href) }}>{label}</a>
            </li>
          ))}
        </ul>

        <button className="nav__cta" onClick={apply} aria-label="Apply now">
          Apply
        </button>
      </nav>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__glow-b" aria-hidden="true" />
        <div className="hero__glow-a" aria-hidden="true" />
        {/* Optional: keep or remove the geometric background mark */}
        <svg className="hero__bg-mark" aria-hidden="true"
          viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <polygon points="43,2 61,2 99,98 81,98" fill="#ffffff" />
          <polygon points="38,10 4,94 70,94" fill="#ED1C24" />
        </svg>
        <div className="hero__rule" aria-hidden="true" />

        <div className="hero__content">
          {/* REPLACE: program category / eyebrow label */}
          <div className="hero__eyebrow hero-anim ha-1" aria-hidden="true">
            <span className="hero__eyebrow-line" />
            [PROGRAM CATEGORY]
          </div>

          {/* REPLACE: main headline — 3-4 lines, accent on the key phrase */}
          <h1 className="hero__headline hero-anim ha-2" id="hero-heading">
            [Headline]<br />
            [line two.]<br />
            <span className="accent">[Accented]</span><br />
            <span className="accent">[line.]</span>
          </h1>

          {/* REPLACE: one or two sentence description */}
          <p className="hero__sub hero-anim ha-3">
            [One sentence that says what Ship Week is and who it is for.]
          </p>

          <div className="hero__actions hero-anim ha-4">
            <button className="btn btn--primary" onClick={apply} aria-label="Apply now">
              Apply now
            </button>
            <button className="btn btn--ghost" onClick={() => goTo('#how-it-works')} aria-label="See how it works">
              How it works
            </button>
          </div>

          {/* REPLACE: 3 stats meaningful to this program */}
          <div className="hero__stats hero-anim ha-5" aria-label="At a glance">
            <div className="hero__stat">
              <div className="hero__stat-num">[N]</div>
              <div className="hero__stat-label">[Stat label]</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-num">[N]</div>
              <div className="hero__stat-label">[Stat label]</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-num">[N]</div>
              <div className="hero__stat-label">[Stat label]</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHAT IT IS ══════════════════ */}
      {/* Nav anchor: "How it works" points here */}
      <section className="what-it-is" id="how-it-works" aria-labelledby="what-heading">
        <div className="what-it-is__inner">
          <div>
            <p className="section-label reveal">What Ship Week actually is</p>
            {/* REPLACE: short punchy heading */}
            <h2 className="section-title reveal rd-1" id="what-heading">
              [Heading that<br />names the thing.]
            </h2>
          </div>
          <div className="what-it-is__body reveal rd-2">
            {/* REPLACE: 2-3 paragraphs explaining what the program is */}
            <p>
              [First paragraph: what Ship Week is in plain terms. No jargon. One idea per sentence.]
            </p>
            <p>
              [Second paragraph: what makes it different from other programs.]
            </p>
            <p>
              [Optional third paragraph: the outcome or the promise.]
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════ STRUCTURE ══════════════════ */}
      <section className="structure" aria-labelledby="structure-heading">
        <div className="structure__inner">
          <div>
            <p className="section-label reveal">The structure</p>
            <h2 className="section-title reveal rd-1" id="structure-heading">
              What happens<br />each day.
            </h2>
          </div>
          <div className="structure__steps">
            {/* REPLACE: one entry per day or phase of the program */}
            {([
              ['01', '[Day / Phase name]', '[What happens. What participants do. What they leave with.]'],
              ['02', '[Day / Phase name]', '[What happens. What participants do. What they leave with.]'],
              ['03', '[Day / Phase name]', '[What happens. What participants do. What they leave with.]'],
              ['04', '[Day / Phase name]', '[What happens. What participants do. What they leave with.]'],
              ['05', '[Day / Phase name]', '[What happens. What participants do. What they leave with.]'],
            ] as [string, string, string][]).map(([n, title, desc], i) => (
              <div key={n} className={`structure__step reveal${i > 0 ? ` rd-${Math.min(i, 4)}` : ''}`}>
                <p className="structure__num">{n}</p>
                <div>
                  <h3 className="structure__name">{title}</h3>
                  <p className="structure__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHO FOR ══════════════════ */}
      <section className="who-for" aria-labelledby="who-heading">
        <div className="who-for__header">
          <p className="section-label reveal">Fit</p>
          <h2 className="section-title reveal rd-1" id="who-heading">
            Who this is for.<br />Who it is not.
          </h2>
        </div>
        <div className="who-for__groups">
          <div>
            <p className="who-for__group-label reveal">This is for you if</p>
            <ul className="who-for__list" role="list">
              {/* REPLACE: 4-6 bullet points describing the ideal participant */}
              {([
                '[Participant trait or situation 1.]',
                '[Participant trait or situation 2.]',
                '[Participant trait or situation 3.]',
                '[Participant trait or situation 4.]',
                '[Participant trait or situation 5.]',
              ] as string[]).map((item, i) => (
                <li key={i} className={`who-for__item reveal${i > 0 ? ` rd-${Math.min(i, 4)}` : ''}`}>
                  <span className="who-for__item-mark">+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="who-for__group-label reveal rd-1">This is not for you if</p>
            <ul className="who-for__list" role="list">
              {/* REPLACE: 3-5 honest exclusion criteria */}
              {([
                '[Exclusion reason 1.]',
                '[Exclusion reason 2.]',
                '[Exclusion reason 3.]',
                '[Exclusion reason 4.]',
              ] as string[]).map((item, i) => (
                <li key={i} className={`who-for__item reveal rd-${Math.min(i + 1, 4)}`}>
                  <span className="who-for__item-mark who-for__item-mark--no">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════ COST ══════════════════ */}
      <section className="cost" id="cost" aria-labelledby="cost-heading">
        <div className="cost__inner">
          <p className="section-label reveal">The cost</p>
          {/* REPLACE: price heading */}
          <h2 className="section-title reveal rd-1" id="cost-heading">
            Simple pricing.<br />No surprises.
          </h2>
          {/* REPLACE: actual price — format: $1,200 or €800 etc. */}
          <div className="cost__price reveal rd-2" aria-label="Price">
            <span>[€/$]</span>[0,000]
          </div>
          <p className="cost__note reveal rd-3">[Payment note — e.g. "One payment. No instalment plan available."]</p>

          <div className="cost__includes reveal rd-3">
            {/* REPLACE: list what is included in the price */}
            {([
              '[Included item 1]',
              '[Included item 2]',
              '[Included item 3]',
              '[Included item 4]',
            ] as string[]).map((item, i) => (
              <div key={i} className="cost__line">
                <span className="cost__line-mark">+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="btn btn--primary reveal rd-4" onClick={apply}>
            Apply now
          </button>
        </div>
      </section>

      {/* ══════════════════ ATTENDANCE POLICY ══════════════════ */}
      <section className="policy" aria-labelledby="policy-heading">
        <div className="policy__inner">
          <div>
            <p className="section-label reveal">The attendance policy</p>
            <h2 className="section-title reveal rd-1" id="policy-heading">
              What Ship Week<br />requires of you.
            </h2>
            <p className="approach__left-desc reveal rd-2" style={{ fontSize: '15px', lineHeight: 1.72, color: 'var(--muted-raw)', marginTop: '18px', maxWidth: '320px' }}>
              [One or two sentences on why the rules below exist.]
            </p>
          </div>
          <div className="policy__rules">
            {/* REPLACE: commitment and attendance rules — numbered list */}
            {([
              '[Rule 1 — e.g. attendance is mandatory for all sessions.]',
              '[Rule 2 — e.g. cameras on during all live sessions.]',
              '[Rule 3 — e.g. shipping the project is a graduation requirement.]',
              '[Rule 4 — e.g. no recording or redistribution of session content.]',
              '[Rule 5 — if applicable.]',
            ] as string[]).map((rule, i) => (
              <div key={i} className={`policy__rule reveal${i > 0 ? ` rd-${Math.min(i, 4)}` : ''}`}>
                <span className="policy__rule-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section className="about" id="about" aria-labelledby="about-name">
        <div className="about__inner">
          <div className="about__photo-wrap reveal">
            {/* Photo copied from Altenture — replace if a different photo is needed */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand_assets/ok_transparent.png"
              alt="[YOUR NAME], [TITLE]"
              className="about__photo"
              width={260} height={347}
            />
          </div>

          <div className="about__content">
            <p className="section-label reveal rd-1" id="about-name">About me</p>
            {/* REPLACE: your name */}
            <h2 className="about__name reveal rd-2">[Your Name]</h2>
            {/* REPLACE: your role / title */}
            <p className="about__role reveal rd-2">[Title or one-line role]</p>
            <div className="about__bio reveal rd-3">
              {/* REPLACE: bio — first person, 3-4 paragraphs */}
              <p>
                [First paragraph: who you are and what you do. Keep it grounded — not a résumé.]
              </p>
              <p>
                [Second paragraph: the experience or background that makes you qualified to run this program.]
              </p>
              <p>
                [Third paragraph: why you built Ship Week — the problem you saw and why you decided to solve it this way.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
      <section className="faq-section" id="faq" aria-labelledby="faq-heading">
        <div className="faq-section__inner">
          <div>
            <p className="section-label reveal">FAQ</p>
            <h2 className="section-title reveal rd-1" id="faq-heading">
              Questions<br />people ask.
            </h2>
            <p className="reveal rd-2" style={{ fontSize: '15px', lineHeight: 1.72, color: 'var(--muted-raw)', marginTop: '14px', maxWidth: '280px' }}>
              Anything not answered here — email [YOUR EMAIL].
            </p>
          </div>
          <div>
            {/* REPLACE: program-specific Q&A pairs — use double-quoted strings to avoid apostrophe issues */}
            {([
              ["[Question 1?]",
               "[Answer 1. Short and direct. No hedging.]"],
              ["[Question 2?]",
               "[Answer 2.]"],
              ["[Question 3?]",
               "[Answer 3.]"],
              ["[Question 4?]",
               "[Answer 4.]"],
              ["[Question 5?]",
               "[Answer 5.]"],
              ["[Question 6?]",
               "[Answer 6.]"],
              ["[Question 7?]",
               "[Answer 7.]"],
            ] as [string, string][]).map(([q, a], i) => (
              <details key={i} className="faq-item reveal">
                <summary>{q}</summary>
                <p className="faq-item__answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ APPLY / CTA ══════════════════ */}
      <section className="apply" id="apply" aria-labelledby="apply-heading">
        <div className="apply__inner">
          {/* REPLACE: closing CTA heading */}
          <h2 className="apply__title reveal" id="apply-heading">
            Ready to<br /><span className="accent">ship?</span>
          </h2>
          {/* REPLACE: one sentence sub-heading */}
          <p className="apply__sub reveal rd-1">[One sentence — tell them what happens when they click Apply.]</p>
          <div className="reveal rd-2">
            <button className="btn btn--primary" onClick={apply}>Apply now</button>
          </div>
          {/* REPLACE: contact email */}
          <a href="mailto:[YOUR-EMAIL]" className="apply__email reveal rd-3">
            [YOUR-EMAIL]
          </a>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="footer" role="contentinfo">
        <a href="#" className="footer__logo" aria-label="[SITE NAME] home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          {/* REPLACE: footer logo — white/light version */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/logo-white.png" alt="[SITE NAME]" width={110} height={18} />
        </a>
        {/* REPLACE: year and entity name */}
        <p className="footer__copy">&copy; {new Date().getFullYear()} [YOUR NAME / ENTITY]. All rights reserved.</p>
        <ul className="footer__links" role="list">
          <li><a href="mailto:[YOUR-EMAIL]">Contact</a></li>
          {/* REPLACE: add or remove social / legal links */}
          <li><a href="https://www.linkedin.com/in/[HANDLE]" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="#faq" onClick={(e) => { e.preventDefault(); goTo('#faq') }}>FAQ</a></li>
        </ul>
      </footer>
    </>
  )
}
