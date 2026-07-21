import type { MetadataRoute } from 'next'
import { DOMAIN } from '@/content/site'

// Statically exported robots.txt (ADR-0007). Production is indexable; the
// dev/preview host is kept out of the index via a CloudFront noindex header
// (ADR-0009), not here, so this file always reflects production.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${DOMAIN}/sitemap.xml`,
    host: DOMAIN,
  }
}
