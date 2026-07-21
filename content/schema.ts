/**
 * JSON-LD structured data (ADR-0007), built from the same content modules the
 * page renders, so the schema can never drift from the visible content.
 */
import { DOMAIN, SITE_NAME, SITE_DESCRIPTION, EMAIL, LINKEDIN_URL, OG_IMAGE } from './site'
import { FAQ } from './faq'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: DOMAIN,
  logo: `${DOMAIN}/brand_assets/logo_V53.png`,
  image: `${DOMAIN}${OG_IMAGE}`,
  email: EMAIL,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Groningen',
    addressCountry: 'NL',
  },
  // sameAs only appears once a public profile URL is supplied.
  ...(LINKEDIN_URL ? { sameAs: [LINKEDIN_URL] } : {}),
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: DOMAIN,
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}
