import type { Metadata } from 'next'
// import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProject, getAllProjectSlugs } from '@/lib/projects'
import StructuredData from '@/components/StructuredData'

// Generate static params for all known projects
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each project dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Your Name`,
      description: project.description,
      url: `https://your-portfolio-domain.com/projects/${slug}`,
      type: 'article',
      images: [
        {
          url: project.ogImage || '/images/project-default-og.jpg',
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      title: `${project.title} | Your Name`,
      description: project.description,
      images: [project.twitterImage || '/images/project-default-twitter.jpg'],
    },
    alternates: {
      canonical: `https://your-portfolio-domain.com/projects/${slug}`,
    },
  }
}

const ProjectPage = async({ params }: { params: Promise<{ slug: string }> }) => {
  const {slug} = await params
  const project = await getProject(slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <>
      <StructuredData 
        type="CreativeWork"
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          author: {
            '@type': 'Person',
            name: 'Your Name',
          },
          description: project.description,
          datePublished: project.date,
          image: project.images[0],
          url: `https://your-portfolio-domain.com/projects/${slug}`,
          keywords: project.tags.join(', '),
        }}
      />
      <main>
        {/* Project content here */}
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        {/* Project images and details */}
      </main>
    </>
  )
}

export default ProjectPage