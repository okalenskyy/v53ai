import type { MetadataRoute } from 'next'
import { DOMAIN } from '@/content/site'

// Statically exported sitemap (ADR-0007).
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${DOMAIN}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${DOMAIN}/privacy/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${DOMAIN}/cookies/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${DOMAIN}/imprint/`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
