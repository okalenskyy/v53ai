import { Footer } from '@/components/sections/Footer'

/**
 * Shared chrome for the static legal routes (/privacy, /cookies, /imprint).
 * A light, minimal header (logo home + back to site) plus the shared footer.
 * The main-site anchor nav is deliberately not reused here: its hash links only
 * resolve on the home page.
 */
export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <>
      <header className="legal-nav">
        <a href="/" className="legal-nav__brand" aria-label="V53 AI Cluster, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand_assets/logo_V53_dark.png" alt="V53 AI Cluster" />
        </a>
        <a href="/" className="legal-nav__back">
          Back to site
        </a>
      </header>

      <main className="legal">
        <div className="legal__inner">
          <span className="section-label">Legal</span>
          <h1 className="legal__title">{title}</h1>
          <p className="legal__updated">Last updated {updated}</p>
          <div className="legal__body">{children}</div>
        </div>
      </main>

      <Footer />
    </>
  )
}
