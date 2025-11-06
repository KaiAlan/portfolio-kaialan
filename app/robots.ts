const siteUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? 'https://kaialan.vercel.app'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}