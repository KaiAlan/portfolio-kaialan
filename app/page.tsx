import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ProjectTile from "@/components/project-tiles";
import { showcaseProject } from "@/data/projects/showcase";

const siteUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "https://kaialan.vercel.app";

export const metadata: Metadata = {
  title: "Kaialan Razz",
  description:
    "Professional portfolio showcasing kaialan's work in UI/UX, Web, Mobile and Brand design",
  openGraph: {
    title: "Kaialan Razz",
    description:
      "My creative corner, showcasing my works in UI/UX, Web, Mobile and Brand design",
    url: `${siteUrl}`,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Gallery - Kaialan Razz",
      },
    ],
  },
  twitter: {
    title: "Kaialan Razz",
    description:
      "My creative corner, showcasing my works in UI/UX, Web, Mobile and Brand design",
    images: ["/images/twitter-default.jpg"],
  },
};

async function fetchProjectsWithLottie() {

  const projectsWithAnimation = await Promise.all(
    showcaseProject.map(async (project) => {
      if (project.lottieUrl) {
        const res = await fetch(project.lottieUrl);
        if (res.ok) {
          const lottieData = await res.json();
          return { ...project, lottieData };
        }
      }
      return project;
    })
  );

  return projectsWithAnimation;
}


export default async function HomePage() {

   const projects = await fetchProjectsWithLottie();


  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Kaialan Razz",
          description:
            "Explore my projects in UI/UX, Web, Mobile and Brand design",
          url: `${siteUrl}`,
          author: {
            "@type": "Person",
            name: "Kaialan Razz",
          },
        }}
      />
      <section className="w-full text-[12px]">
        <ProjectTile projects={projects} />
      </section>
    </>
  );
}
