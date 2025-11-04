import type { Metadata } from "next";
// import Image from 'next/image'
// import Link from 'next/link'
// import ProjectGallery from '@/components/ProjectGallery'
import StructuredData from "@/components/StructuredData";
import OptimizedImage from "@/components/images/optimized-image-component";
import Image from "next/image";
import { thumbnailData } from "@/data/thumbnails";
import Link from "next/link";
import MasonaryWithGrid from "@/components/masonary-layout/masonary-layout-with-grid";
import Sidebar from "@/components/navbar/sidebar";
import ProjectTile from "@/components/project-tiles";

const siteUrl =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "http://localhost:3000";

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
      <section className="w-full text-[12px]">
        {/* Homepage content here */}
        {/* <ProjectGallery /> */}
        {/* <section className="relative w-full flex"> */}
          {/* <Sidebar /> */}
          {/* <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-16 space-y-16 py-12">
            {thumbnailData.map((data, index) => (
              <div className="flex flex-col gap-8">
                <Image
                  key={index}
                  src={data.src}
                  alt={data.name}
                  width={0}
                  height={0}
                  className="w-full h-auto"
                />
                <p></p>
              </div>
            ))}
          </div> */}
          {/* <div className="w-full"> */}
            {/* <MasonaryWithGrid /> */}
            <ProjectTile />
          {/* </div> */}
        {/* </section> */}
      </section>
    </>
  );
}
