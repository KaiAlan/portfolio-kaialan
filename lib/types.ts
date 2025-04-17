export interface Project {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  client?: string
  date: string
  updatedAt: string
  tags: string[]
  category: 'web' | 'design' | 'mobile' | 'art' | 'other'
  featured: boolean
  coverImage: string
  ogImage?: string
  twitterImage?: string
  images: string[]
  technologies: string[]
  liveUrl?: string
  sourceUrl?: string
  content: string
  color?: string
  testimonial?: {
    quote: string
    author: string
    role: string
    company?: string
  }
}

export type ProjectSummary = Pick<Project, 'id' | 'slug' | 'title' | 'shortDescription' | 'coverImage' | 'tags' | 'category' | 'date' | 'featured'>;
