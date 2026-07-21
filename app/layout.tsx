import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { DOMAIN, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, OG_IMAGE } from '@/content/site'
import { JsonLd } from '@/components/seo/JsonLd'
import { organizationSchema, websiteSchema } from '@/content/schema'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

// Display face for H1/H2 headings only (ADR-0003 Option A). Body stays Inter.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  // Absolute-URL base is production (ADR-0009): canonical/OG resolve to v53ai.eu
  // even on the dev/preview host, which is served noindex.
  metadataBase: new URL(DOMAIN),
  title: {
    default: SITE_TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  icons: { icon: '/brand_assets/favicon.png', shortcut: '/brand_assets/favicon.ico' },
  openGraph: {
    type: 'website',
    url: DOMAIN,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'V53 AI Cluster, next generation AI compute for Europe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  )
}
