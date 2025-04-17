import { getAllProjects } from "@/lib/projects"

export default async function sitemap() {
  const projects = await getAllProjects()

  const projectUrls = projects.map((project) => ({
    url: `https://your-portfolio-domain.com/projects/${project.slug}`,
    lastModified: project.updatedAt || new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://your-portfolio-domain.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://your-portfolio-domain.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...projectUrls,
  ]
}