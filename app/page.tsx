import type { Metadata } from "next";
// import Image from 'next/image'
// import Link from 'next/link'
// import ProjectGallery from '@/components/ProjectGallery'
import StructuredData from "@/components/StructuredData";
import OptimizedImage from "@/components/images/optimized-image-component";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio | Kaialan Razz",
  description:
    "Explore my projects in web development, UI/UX design and creative coding",
  openGraph: {
    title: "Portfolio | Kaialan Razz",
    description:
      "Explore my projects in web development, UI/UX design and creative coding",
    url: "https://your-portfolio-domain.com",
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
    title: "Portfolio | Kaialan Razz",
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
          name: "Portfolio | Kaialan Razz",
          description:
            "Explore my projects in web development, UI/UX design and creative coding",
          url: "https://your-portfolio-domain.com",
          author: {
            "@type": "Person",
            name: "Kaialan Razz",
          },
        }}
      />
      <main className="max-w-[1456px] w-full px-8 text-[12px]">
        {/* Homepage content here */}
        {/* <ProjectGallery /> */}
        <section className="w-full mt-96">
          <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <div className="w-full flex flex-col gap-4">
              <Image
                src="/images/projects/3.png"
                alt="project"
                width={0}
                height={0}
                className="w-full object-cover"
              />
              <p className="w-full flex flex-col justify-start items-start gap-0">
                <p className="font-mono">Project 1</p>
                <p className="text-gray-300">This is the project description</p>
              </p>
            </div>
            <div className="w-full flex flex-col gap-4">
              <Image
                src="/images/projects/1.png"
                alt="project"
                width={0}
                height={0}
                className="w-full object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-0">
                <p className="font-mono">Project 1</p>
                <p className="text-gray-300">This is the project description</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <Image
                src="/images/projects/2.png"
                alt="project"
                width={0}
                height={0}
                className="w-full object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-0">
                <p className="font-mono">Project 1</p>
                <p className="text-gray-300">This is the project description</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <Image
                src="/images/projects/4.png"
                alt="project"
                width={0}
                height={0}
                className="w-full object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-0">
                <p className="font-mono">Project 1</p>
                <p className="text-gray-300">This is the project description</p>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </>
  );
}
