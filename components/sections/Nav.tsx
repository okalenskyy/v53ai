'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/content/nav'
import { EMAIL, LINKEDIN_URL } from '@/content/site'

export function Nav() {
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
          aria-label="V53 AI Cluster, home"
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
          {NAV_LINKS.map(({ href, label }) => (
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
          aria-label="Talk to us, jump to contact"
        >
          Talk to us
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
            {NAV_LINKS.map(({ href, label }, i) => (
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
              Talk to us
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </button>
            <a className="mobile-menu__email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
            {LINKEDIN_URL ? (
              <a
                className="mobile-menu__email"
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn →
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
