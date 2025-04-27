import type { Metadata } from "next";
// import Image from 'next/image'
// import Link from 'next/link'
// import ProjectGallery from '@/components/ProjectGallery'
import StructuredData from "@/components/StructuredData";
import OptimizedImage from "@/components/images/optimized-image-component";
import Image from "next/image";
import { thumbnailData } from "@/data/thumbnails";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'


export const metadata: Metadata = {
  title: "Kaialan Razz",
  description:
    "Explore my projects in web development, UI/UX design and creative coding",
  openGraph: {
    title: "Kaialan Razz",
    description:
      "Explore my projects in web development, UI/UX design and creative coding",
    url: `${siteUrl}`,
    images: [
      {
        url: "/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Gallery - Kaialan Razz",
      },
    ],
  },
  twitter: {
    title: "Kaialan Razz",
    description:
      "Explore my projects in web development, UI/UX design and creative coding",
    images: ["/images/home-twitter.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Kaialan Razz",
          description:
            "Explore my projects in web development, UI/UX design and creative coding",
          url: `${siteUrl}`,
          author: {
            "@type": "Person",
            name: "Kaialan Razz",
          },
        }}
      />
      <main className="w-full px-8 text-[12px]">
        {/* Homepage content here */}
        {/* <ProjectGallery /> */}
        <section className="w-full mt-96">
          <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {thumbnailData.map((data, index) => (
              <Image
                key={index}
                src={data.src}
                alt={data.name}
                width={0}
                height={0}
                className="w-full h-auto"
              />
            ))}
            
          </div>
        </section>
      </main>
    </>
  );
}
