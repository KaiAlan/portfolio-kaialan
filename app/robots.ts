const siteUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? 'http://localhost:3000'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}