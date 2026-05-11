'use client'

import { useEffect, useState } from 'react'

const SERVICES: { num: string; title: string; meta: string; desc: string; tag: string }[] = [
  {
    num: '01',
    title: 'AI Training Compute',
    meta: 'GPU clusters · multi-node',
    desc:
      'Dense GPU capacity for training foundation models, fine-tuning LLMs and running large-scale deep-learning workloads. Reserved nodes, predictable performance, transparent utilisation reporting from day one.',
    tag: 'Train · Fine-tune · Iterate',
  },
  {
    num: '02',
    title: 'High-Performance Computing',
    meta: 'HPC · research & enterprise',
    desc:
      'Industrial-grade HPC capacity for scientific computing, simulation, computational chemistry, financial modelling and any workload that has outgrown a standard cloud quota. Built to run hot, designed to stay stable.',
    tag: 'Simulate · Solve · Scale',
  },
  {
    num: '03',
    title: 'AI Inference at Scale',
    meta: 'Low-latency · production',
    desc:
      'Production inference for chat, search, agents and decision systems. Tuned for latency, cost-per-token and sustained throughput, with capacity that grows with your traffic instead of throttling it.',
    tag: 'Serve · Scale · Save',
  },
  {
    num: '04',
    title: 'Sovereign AI Hosting',
    meta: 'EU · GDPR-native',
    desc:
      'Compute and data that never leave Europe. Sovereign infrastructure for regulated industries — finance, healthcare, public sector, defence — where jurisdiction, lineage and audit trail are not negotiable.',
    tag: 'Sovereignty · Residency · Audit',
  },
  {
    num: '05',
    title: 'Colocation & Hybrid',
    meta: 'Bring-your-own · custom',
    desc:
      'Place your own hardware inside an AI-grade facility. Direct power, dense cooling, high-bandwidth interconnect, plus a clean handoff into the wider V53 fabric when you need to burst beyond your own racks.',
    tag: 'Co-locate · Connect · Extend',
  },
  {
    num: '06',
    title: 'Capacity Reservation',
    meta: 'Pre-2027 · forward-booked',
    desc:
      'Secure dedicated AI compute ahead of MVP go-live in 2027. Forward contracts, ramp schedules and engineering support so your roadmap is not gated by capacity that has not been built yet.',
    tag: 'Reserve · Ramp · Launch',
  },
]

const FAQ: [string, string][] = [
  [
    "What is V53 AI Cluster?",
    "V53 is a next-generation AI Compute Cluster being built in the Groningen region. It exists to give European AI builders, researchers and enterprises an industrial-grade place to run training, inference and high-performance computing workloads. MVP compute goes live in 2027.",
  ],
  [
    "When can I start using V53 compute?",
    "MVP compute is scheduled to go live in 2027. Forward capacity reservations are open today — talk to us early and we will reserve dedicated nodes and a ramp schedule aligned with your roadmap.",
  ],
  [
    "Why Groningen?",
    "The Groningen region combines abundant grid power, fibre infrastructure and a stable EU jurisdiction. That mix lets V53 scale dense GPU and HPC capacity without the power, network or regulatory bottlenecks that constrain most European sites.",
  ],
  [
    "What workloads is V53 designed for?",
    "Large-scale AI training, foundation model work and fine-tuning, production inference at scale, scientific HPC, and sovereign hosting for regulated workloads. If a job has outgrown standard cloud quotas, V53 is built for it.",
  ],
  [
    "What does EU-sovereign actually mean here?",
    "Your data and compute stay inside EU jurisdiction by default. No US extra-territorial reach, no cross-border data transfers without explicit consent, and audit trails that meet GDPR, EU AI Act and sectoral requirements out of the box.",
  ],
  [
    "Can I reserve capacity before 2027?",
    "Yes. Forward contracts are open now. We work backwards from your launch date to size the reservation, set a ramp schedule and lock in pricing — so your roadmap is not gated by capacity that has not been built yet.",
  ],
  [
    "What hardware will V53 run?",
    "Dense GPU clusters tuned for current-generation training and inference, plus CPU-heavy nodes for HPC, simulation and scientific workloads. Specific SKUs, memory and interconnect topology are confirmed in your reservation — what is in the contract is what you get, not a marketing slide.",
  ],
  [
    "How does pricing work?",
    "Three modes. Reserved capacity for known, sustained workloads at the best per-unit price. On-demand for bursty or experimental usage. Hybrid where reservation carries the baseline and on-demand absorbs the peaks. No mystery line items, no surprise egress bills.",
  ],
  [
    "Can I bring my own hardware?",
    "Yes. Colocation is part of the offer — place your own racks inside the V53 facility for power, dense cooling and high-bandwidth interconnect, then burst into the wider cluster fabric when you need to scale beyond what you brought.",
  ],
  [
    "How do you handle data residency and compliance?",
    "Data stays inside the EU unless you explicitly opt to move it. We provide signed Data Processing Agreements, region-locked storage, and the audit hooks needed for GDPR, the EU AI Act, and sector regulators in finance, healthcare and the public sector.",
  ],
  [
    "Who is behind V53?",
    "V53 is operated by MCPV, the entity building and running the cluster infrastructure. NODUM AI Competence Hub is the applied AI engineering arm in the same family — together they form the V53 AI Cluster ecosystem.",
  ],
  [
    "How do I get started?",
    "Send a short note to call@v53ai.eu describing the workload, the capacity you need and the timeframe. We come back within two working days with a scoping conversation and — if we are a fit — a proposal covering reservation terms, ramp and engineering support.",
  ],
]

const NAV_LINKS: [string, string][] = [
  ['#services', 'Services'],
  ['#about', 'About'],
  ['#faq', 'FAQ'],
  ['#contact', 'Contact Us'],
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const goTo = (id: string) => {
    setMenuOpen(false)
    const el = document.querySelector(id)
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth',
      })
    }
  }

  // Placeholder action for the Contact Us button — wire to booking / form later.
  const requestContact = () => goTo('#contact')

  return (
    <>
      {/* ══════════════════ NAV ══════════════════ */}
      <nav
        className={`nav${scrolled || menuOpen ? ' is-scrolled' : ' is-hero'}${menuOpen ? ' is-menu-open' : ''}`}
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="nav__brand"
          aria-label="V53 AI Cluster — home"
          onClick={(e) => {
            e.preventDefault()
            setMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="nav__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand_assets/logo_V53_dark.png" alt="V53 AI Cluster" />
          </span>
        </a>

        <ul className="nav__links" role="list">
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  goTo(href)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav__cta"
          onClick={() => goTo('#contact')}
          aria-label="Call us — jump to contact"
        >
          Call us
          <span className="nav__cta-arrow" aria-hidden="true">
            →
          </span>
        </button>

        <button
          type="button"
          className={`nav__burger${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__backdrop" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <ul className="mobile-menu__links" role="list">
            {NAV_LINKS.map(([href, label], i) => (
              <li key={href} style={{ transitionDelay: `${menuOpen ? 0.08 + i * 0.04 : 0}s` }}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault()
                    goTo(href)
                  }}
                >
                  <span className="mobile-menu__link-num">{String(i + 1).padStart(2, '0')}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer">
            <button
              className="btn btn--primary mobile-menu__cta"
              onClick={() => goTo('#contact')}
            >
              Call us
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </button>
            <a className="mobile-menu__email" href="mailto:call@v53ai.eu">
              call@v53ai.eu
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__top-stripe" aria-hidden="true" />
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__racks" aria-hidden="true" />

        <div className="hero__content">
          <div className="hero__eyebrow hero-anim ha-1" aria-hidden="true">
            <span className="hero__eyebrow-line" />
            V53 AI Cluster · Groningen, NL
          </div>

          <h1 className="hero__headline hero-anim ha-2" id="hero-heading">
            Next-generation{' '}
            <span className="accent">AI compute</span> for Europe&apos;s digital economy.
          </h1>

          <p className="hero__sub hero-anim ha-3">
            V53 is an industrial-grade AI Compute Cluster purpose-built for large-scale
            AI and high-performance workloads. Strategically located in the Groningen
            region, designed to be a critical backbone for enterprise AI adoption,
            data-driven innovation and economic competitiveness.
          </p>

          <div className="hero__actions hero-anim ha-4">
            <button
              className="btn btn--primary"
              onClick={requestContact}
              aria-label="Call us"
            >
              Call us
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </button>
            <button
              className="btn btn--ghost-dark"
              onClick={() => goTo('#services')}
              aria-label="Explore services"
            >
              Explore services
            </button>
          </div>

          <div className="hero__stats hero-anim ha-5" aria-label="At a glance">
            <div className="hero__stat">
              <div className="hero__stat-num">2027</div>
              <div className="hero__stat-label">MVP compute go-live</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-num">Groningen</div>
              <div className="hero__stat-label">Strategic EU location</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-num">EU-sovereign</div>
              <div className="hero__stat-label">GDPR-native by design</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section className="services" id="services" aria-labelledby="services-heading">
        <div className="services__head">
          <div className="services__head-grid">
            <div>
              <span className="section-label reveal">Services</span>
              <h2 className="section-title reveal rd-1" id="services-heading">
                Industrial-grade
                <br />
                compute, ready
                <br />
                for AI.
              </h2>
              <span className="amber-rule reveal rd-2" aria-hidden="true" />
            </div>
            <p className="services__intro reveal rd-2">
              From training the next foundation model to running production inference,
              V53 delivers the kind of fully-equipped, demand-ready capacity that
              standard cloud quotas simply cannot match. Reserved, sovereign and built
              to scale.
            </p>
          </div>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article
              key={s.num}
              className={`service-card reveal${i % 3 > 0 ? ` rd-${Math.min(i % 3, 4)}` : ''}`}
            >
              <div className="service-card__num">{s.num}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <div className="service-card__meta">{s.meta}</div>
              <div className="service-card__rule" aria-hidden="true" />
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__tag">{s.tag}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section className="about" id="about" aria-labelledby="about-heading">
        <div className="about__inner">
          <div>
            <span className="section-label reveal">About</span>
            <h2 className="section-title reveal rd-1" id="about-heading">
              A backbone for
              <br />
              European AI.
            </h2>
            <span className="amber-rule reveal rd-2" aria-hidden="true" />
            <p className="about__lead reveal rd-2">
              An AI Compute Cluster built for the workloads that define the next decade.
            </p>
          </div>

          <div>
            <div className="about__body reveal rd-2">
              <p>
                <strong>V53 is a next-generation AI Compute Cluster</strong> strategically
                located in the Groningen region, designed to become a critical backbone of
                Europe&apos;s digital economy. It exists for one reason: to give European
                AI builders, researchers and enterprises a fully-equipped, industrial-grade
                place to run the workloads that matter.
              </p>
              <p>
                Across the continent, demand for large-scale AI and high-performance
                computing has outpaced supply. Standard clouds throttle, sovereign options
                are scarce, and projects stall on capacity that has not been built.
                V53 directly addresses that structural shortage with scalable, demand-ready
                infrastructure engineered for enterprise AI adoption.
              </p>
              <p>
                The cluster is being built for the long arc — training, inference, HPC and
                sovereign hosting under one roof, with EU jurisdiction by default. MVP
                compute goes live in 2027. Forward capacity is open to discuss today.
              </p>
            </div>
            <div className="about__pillars reveal rd-3">
              <div className="about__pillar">
                <div className="about__pillar-label">Industrial-grade</div>
                <div className="about__pillar-text">Built for sustained AI and HPC workloads, not bursty side projects.</div>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-label">EU-sovereign</div>
                <div className="about__pillar-text">Jurisdiction, data residency and audit trail by default.</div>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-label">Demand-ready</div>
                <div className="about__pillar-text">Capacity sized for the enterprise AI adoption curve.</div>
              </div>
              <div className="about__pillar">
                <div className="about__pillar-label">Strategically located</div>
                <div className="about__pillar-text">Groningen region — power, fibre and a clear path to scale.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FAQ ══════════════════ */}
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
              Anything not answered here — email{' '}
              <a href="mailto:call@v53ai.eu">call@v53ai.eu</a>.
            </p>
          </div>
          <div className="faq__list">
            {FAQ.map(([q, a], i) => (
              <details key={i} className="faq-item reveal">
                <summary>{q}</summary>
                <p className="faq-item__answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CONTACT / CTA ══════════════════ */}
      <section className="contact" id="contact" aria-labelledby="contact-heading">
        <div className="contact__inner">
          <div>
            <span className="section-label section-label--on-dark reveal">Contact</span>
            <h2 className="contact__title reveal rd-1" id="contact-heading">
              Talk to us about <span className="accent">AI capacity.</span>
            </h2>
            <p className="contact__sub reveal rd-2">
              Tell us about the workload — training, inference, HPC or sovereign hosting —
              and the capacity you need before, at and after MVP go-live. We will come
              back with a proposal: scope, timeline, reservation terms.
            </p>
            <div className="reveal rd-3">
              <button
                className="btn btn--primary"
                onClick={requestContact}
                aria-label="Contact us"
              >
                Contact Us
                <span className="btn__arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </div>

          <aside className="contact__panel reveal rd-2" aria-label="Direct contact">
            <div className="contact__panel-label">Direct</div>
            <a className="contact__panel-email" href="mailto:call@v53ai.eu">
              call@v53ai.eu
            </a>
            <dl className="contact__panel-meta">
              <div className="contact__panel-meta-row">
                <dt>Location</dt>
                <dd>Groningen region, Netherlands</dd>
              </div>
              <div className="contact__panel-meta-row">
                <dt>MVP</dt>
                <dd>Compute go-live 2027</dd>
              </div>
              <div className="contact__panel-meta-row">
                <dt>Coverage</dt>
                <dd>EU & UK, sovereign by default</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="footer" role="contentinfo">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logos">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand_assets/logo_V53_light.png" alt="V53 AI Cluster" />
            </div>
            <p className="footer__tag">
              V53 AI Cluster — next-generation AI compute for Europe&apos;s digital
              economy. Infra enabling AI.
            </p>
          </div>

          <div className="footer__cols">
            <div>
              <div className="footer__col-label">Explore</div>
              <ul className="footer__col-list" role="list">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault()
                      goTo('#services')
                    }}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault()
                      goTo('#about')
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => {
                      e.preventDefault()
                      goTo('#faq')
                    }}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      goTo('#contact')
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="footer__col-label">Contact</div>
              <ul className="footer__col-list" role="list">
                <li>
                  <a href="mailto:call@v53ai.eu">call@v53ai.eu</a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      goTo('#contact')
                    }}
                  >
                    Call us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} V53 AI Cluster · MCPV. All rights reserved.</span>
          <span>Infra enabling AI</span>
        </div>
      </footer>
    </>
  )
}
