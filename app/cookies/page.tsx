import type { Metadata } from 'next'
import { LegalShell } from '@/components/layout/LegalShell'
import { EMAIL, LEGAL_UPDATED } from '@/content/site'

export const metadata: Metadata = {
  title: 'Cookie Statement',
  description: 'V53 AI Cluster uses only strictly necessary cookies and runs no analytics or marketing trackers.',
  alternates: { canonical: '/cookies/' },
}

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Statement" updated={LEGAL_UPDATED}>
      <p>
        This site is built to respect your privacy and the sovereignty of your data. We
        keep cookies to the minimum and run no third party tracking.
      </p>

      <h2>What we use</h2>
      <p>
        The site currently sets <strong>only strictly necessary cookies</strong> needed
        to serve pages securely and remember basic preferences. These are exempt from
        consent requirements, so no cookie banner is shown.
      </p>

      <h2>What we do not use</h2>
      <ul>
        <li>No analytics or measurement cookies.</li>
        <li>No advertising or marketing trackers.</li>
        <li>No third party embeds that set cookies (no external maps, fonts or pixels).</li>
      </ul>

      <h2>If this changes</h2>
      <p>
        If we ever add analytics, we will prefer an EU hosted, cookieless option. If any
        non essential cookie is introduced, we will add a consent mechanism and update
        this statement first.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can clear or block cookies in your browser settings at any time. Blocking
        strictly necessary cookies may affect how the site works.
      </p>

      <p>
        Questions about cookies? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. See also
        our <a href="/privacy/">Privacy Policy</a>.
      </p>
    </LegalShell>
  )
}
