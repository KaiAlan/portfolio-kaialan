import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import ProjectTile from "@/components/project-tiles";

const siteUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Kaialan Razz",
  description:
    "Professional portfolio showcasing kaialan's work in UI/UX, Web, Mobile and Brand design",
  openGraph: {
    title: "Kaialan Razz",
    description:
      "Professional portfolio showcasing kaialan's work in UI/UX, Web, Mobile and Brand design",
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
      "Professional portfolio showcasing kaialan's work in UI/UX, Web, Mobile and Brand design",
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
        <ProjectTile />
      </section>
    </>
  );
}
