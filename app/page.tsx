import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import ProjectGallery from '@/components/ProjectGallery'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Portfolio | Kaialan Razz',
  description: 'Explore my projects in web development, UI/UX design and creative coding',
  openGraph: {
    title: 'Portfolio | Kaialan Razz',
    description: 'Explore my projects in web development, UI/UX design and creative coding',
    url: 'https://your-portfolio-domain.com',
    images: [
      {
        url: '/images/home-og.jpg',
        width: 1200,
        height: 630, 
        alt: 'Portfolio Gallery - Kaialan Razz',
      },
    ],
  },
  twitter: {
    title: 'Portfolio | Kaialan Razz',
    description: 'Explore my projects in web development, UI/UX design and creative coding',
    images: ['/images/home-twitter.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <StructuredData 
        type="WebPage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Portfolio | Kaialan Razz',
          description: 'Explore my projects in web development, UI/UX design and creative coding',
          url: 'https://your-portfolio-domain.com',
          author: {
            '@type': 'Person',
            name: 'Kaialan Razz',
          },
        }}
      />
      <main>
        {/* Homepage content here */}
        {/* <ProjectGallery /> */}
      </main>
    </>
  )
}