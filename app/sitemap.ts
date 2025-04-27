import { getAllProjects } from "@/lib/projects"

const siteUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? 'http://localhost:3000'

export default async function sitemap() {
  const projects = await getAllProjects()

  const projectUrls = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt || new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectUrls,
  ]
}