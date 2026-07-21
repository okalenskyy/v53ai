import type { Metadata } from 'next'
import { LegalShell } from '@/components/layout/LegalShell'
import { EMAIL, ENTITY, LEGAL_UPDATED } from '@/content/site'

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Legal entity and publisher details for the V53 AI Cluster website.',
  alternates: { canonical: '/imprint/' },
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <li>
      <strong>{label}:</strong>{' '}
      {value ? value : <span className="legal__todo">TODO(entity)</span>}
    </li>
  )
}

export default function ImprintPage() {
  return (
    <LegalShell title="Imprint" updated={LEGAL_UPDATED}>
      <p>
        This website is published by the entity operating the V53 AI Cluster. Publisher
        and legal details are listed below.
      </p>

      <h2>Publisher</h2>
      <ul>
        <Field label="Registered name" value={ENTITY.registeredName} />
        <Field label="KvK number" value={ENTITY.kvk} />
        <Field label="Registered address" value={ENTITY.address} />
        <li>
          <strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </li>
      </ul>

      <h2>Structure</h2>
      <p>
        The V53 AI Cluster is operated by {ENTITY.operatedBy}. MCPV builds and runs the
        cluster infrastructure; NODUM AI Competence Hub is the applied AI engineering arm
        in the same family.
      </p>

      <h2>Responsibility for content</h2>
      <p>
        We take care to keep the information on this site accurate and current. Content is
        provided for general information about the V53 AI Cluster and does not constitute
        an offer or a binding commitment.
      </p>

      <p>
        For questions about these details or to report an issue, email{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalShell>
  )
}
