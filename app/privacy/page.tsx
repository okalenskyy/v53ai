import type { Metadata } from 'next'
import { LegalShell } from '@/components/layout/LegalShell'
import { EMAIL, ENTITY, LEGAL_UPDATED } from '@/content/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How V53 AI Cluster processes personal data, the lawful basis, retention and your rights under the GDPR.',
  alternates: { canonical: '/privacy/' },
}

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated={LEGAL_UPDATED}>
      <p>
        This policy explains how {ENTITY.registeredName}, operating the V53 AI Cluster
        (&quot;V53&quot;, &quot;we&quot;), processes personal data when you visit this
        website or contact us. We process the minimum data needed and keep it inside the
        EU by default.
      </p>

      <h2>Who is the controller</h2>
      <p>
        The data controller is {ENTITY.registeredName}
        {ENTITY.kvk ? `, KvK ${ENTITY.kvk}` : ' '}
        {ENTITY.address ? `, ${ENTITY.address}` : ''}
        {!ENTITY.kvk || !ENTITY.address ? (
          <>
            {' '}
            <span className="legal__todo">TODO(entity): registered name, KvK, address</span>
          </>
        ) : null}
        . For any privacy question, contact <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <h2>What data we process</h2>
      <ul>
        <li>
          <strong>Contact data.</strong> If you email us, we receive your email address,
          your message and anything you choose to include (for example the workload and
          capacity you describe).
        </li>
        <li>
          <strong>Technical logs.</strong> Our hosting provider may record standard
          server access logs (IP address, timestamp, requested page, user agent) to
          operate and secure the site.
        </li>
      </ul>
      <p>
        We do not run advertising or marketing trackers, and we do not sell personal
        data. See the <a href="/cookies/">Cookie Statement</a> for details on cookies.
      </p>

      <h2>Lawful basis</h2>
      <p>
        We process contact data on the basis of taking steps at your request before
        entering into a contract, and our legitimate interest in responding to business
        enquiries. Technical logs are processed on the basis of our legitimate interest
        in operating a secure, reliable website.
      </p>

      <h2>Retention</h2>
      <p>
        We keep enquiry emails only as long as needed to handle your request and any
        resulting relationship, then delete or archive them. Server logs are kept for a
        short period for security and diagnostics.
      </p>

      <h2>Where your data is processed</h2>
      <p>
        Data stays inside the EU by default. We do not transfer personal data outside
        the EU without a lawful transfer mechanism and, where required, your consent.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR you can request access, correction, deletion, restriction or a
        copy of your personal data, and you can object to processing based on legitimate
        interest. To exercise a right, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. You
        also have the right to lodge a complaint with the Dutch Data Protection Authority
        (Autoriteit Persoonsgegevens).
      </p>

      <p>
        This page is provided for transparency and is not legal advice. It is reviewed
        before each material change to the site.
      </p>
    </LegalShell>
  )
}
