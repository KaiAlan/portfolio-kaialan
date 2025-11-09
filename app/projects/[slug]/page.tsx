import OptimizedImage from "@/components/images/optimized-image-component";
import Link from "next/link";
import VideoPreview from "@/components/video-preview";
import LottiePreview from "@/components/lottie-preview";
import { CellPreview } from "@/components/project-tiles";
import { showcaseProject } from "@/data/projects/showcase";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { MorphingText } from "@/components/ui/morphing-text";
import { notFound } from "next/navigation";

const domain =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL ?? "https://kaialan.vercel.app";

// --- Static params for Next.js 15 ---
export function generateStaticParams() {
  // Return slug as param for each project based on pageLink
  return showcaseProject.map((proj) => ({ slug: proj.pageLink }));
}

// --- Metadata generation for SEO/OpenGraph ---
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = showcaseProject.find((proj) => proj.pageLink === slug);
  if (!project) {
    return {
      title: "Project Not Found",
      description: "",
    };
  }
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Kaialan`,
      description: project.description,
      url: `${domain}/projects/${slug}`,
      type: "article",
      images: [
        {
          url: project.projectImageUrls[0] || "/images/project-default-og.jpg",
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      title: `${project.name} | Kaialan`,
      description: project.description,
      images: [
        project.projectImageUrls[0] || "/images/project-default-twitter.jpg",
      ],
    },
    alternates: {
      canonical: `${domain}/projects/${slug}`,
    },
  };
}

// --- Main project page ---
const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = showcaseProject.find((proj) => proj.pageLink === slug);
  if (!project) {
    const projectIsAddedToWorksPage = showcaseProject.find(
      (p) => p.pageLink === slug
    );

    if (!projectIsAddedToWorksPage) {
      notFound();
    }
    return (
      <div className="w-full min-h-svh sm:min-h-[calc(100%-64px)] flex flex-col items-center justify-center px-5 m-auto">
        <div className="flex flex-col items-center w-full">
          <MorphingText
            className="text-4xl mb-4 lg:mb-8"
            texts={["Coming Soon", "Later"]}
          />
          <p className="text-xs lg:text-base text-gray-500 mb-6 text-center">
            This project is not publicly available yet, but it is in the works.
            <br />
            Please check back later or explore other showcased projects in the
            meantime.
          </p>
          <Link href="/">
            <RainbowButton className="h-12 flex justify-center items-center text-base font-space-grotesk px-8">
              Back to works
            </RainbowButton>
          </Link>
        </div>
      </div>
    );
  }

  const moreProjects = showcaseProject.filter((proj) =>
    project.moreProjectPreviews.includes(proj.pageLink)
  );

  return (
    <section className="max-w-[1920px] w-full mx-auto flex flex-col justify-start items-start gap-10 p-5">
      <div className="relative w-full h-full flex flex-col 2xl:flex-row items-start gap-10 lg:gap-20">
        <div className="2xl:sticky top-[84px] 2xl:max-w-[450px] w-full flex flex-col gap-8 bg-[#FCFCFC] pb-5 z-1">
          <div className="w-full flex flex-col bg-[#FCFCFC]">
            <p className="w-full text-xs font-semibold mb-1">{project.date}</p>
            <h1 className="w-full text-6xl font-space-grotesk font-semibold mb-4">
              {project.name}
            </h1>
            <p className="max-w-3xl w-full text-base text-left text-wrap">
              {project.description}
            </p>
          </div>
          {project.clientProject && (
            <div className="max-w-3xl w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <p className="w-full text-xs flex flex-col gap-1">
                <span className="text-[#929292]">Cost</span>
                <span className="font-space-grotesk">{project.cost}</span>
              </p>
              <p className="w-full text-xs flex flex-col gap-1">
                <span className="text-[#929292]">Turnaround</span>
                <span className="font-space-grotesk">{project.turnaround}</span>
              </p>
              <p className="w-full text-xs flex flex-col gap-1">
                <span className="text-[#929292]">Client Came From</span>
                <span className="font-space-grotesk">
                  {project.clientCameFrom}
                </span>
              </p>
              <p className="w-full text-xs flex flex-col gap-1">
                <span className="text-[#929292]">Design Team</span>
                <span className="font-space-grotesk">{project.designTeam}</span>
              </p>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col gap-4 mb-20">
          {project.videoUrl && (
            <VideoPreview name={project.name} videoUrl={project.videoUrl} className="max-w-full aspect-video" />
          )}
          {project.projectImageUrls.map((item, idx) => {
            return (
              <OptimizedImage
                key={item}
                src={item}
                alt={`${project.name} preview ${idx + 1}`}
                width={16}
                height={9}
                className="w-full rounded-sm"
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-xl font-space-grotesk font-semibold">
          More Projects to see
        </h2>
        <div className="w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5">
          {moreProjects.map((project) => {
            return (
              <Link
                key={project.thumbnail}
                href={`/projects/${project.pageLink}`}
                className="w-full"
              >
                {project.videoUrl ? (
                  <VideoPreview
                    name={project.name}
                    videoUrl={project.videoUrl}
                  />
                ) : project.lottieData ? (
                  <LottiePreview
                    name={project.name}
                    animationData={project.lottieData}
                  />
                ) : (
                  <CellPreview name={project.name} href={project.thumbnail} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
