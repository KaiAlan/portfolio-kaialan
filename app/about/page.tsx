import type { Metadata } from 'next'
import Image from 'next/image'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about my background, skills, and journey as a developer and designer',
  openGraph: {
    title: 'About Me | Your Name',
    description: 'Learn about my background, skills, and journey as a developer and designer',
    url: 'https://your-portfolio-domain.com/about',
    images: [
      {
        url: '/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'About Your Name - Profile Photo',
      },
    ],
  },
  twitter: {
    title: 'About Me | Your Name',
    description: 'Learn about my background, skills, and journey as a developer and designer',
    images: ['/images/about-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://your-portfolio-domain.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <StructuredData 
        type="Person"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Your Name',
          url: 'https://your-portfolio-domain.com',
          image: 'https://your-portfolio-domain.com/images/profile.jpg',
          jobTitle: 'Frontend Developer & Designer',
          worksFor: {
            '@type': 'Organization',
            name: 'Your Company/Freelance',
          },
          sameAs: [
            'https://twitter.com/yourtwitterhandle',
            'https://github.com/yourgithubhandle',
            'https://linkedin.com/in/yourlinkedinhandle',
          ],
          description: 'Frontend Developer specializing in TypeScript, React, and Next.js',
          knowsAbout: ['Web Development', 'UI/UX Design', 'TypeScript', 'Next.js', 'React'],
        }}
      />
      <main>
        {/* About page content here */}
      </main>
    </>
  )
}
