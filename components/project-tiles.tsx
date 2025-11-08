"use client";

import { useSearchParams } from "next/navigation";
import { Project } from "@/data/projects/showcase";
import OptimizedImage from "./images/optimized-image-component";
import MobileHero from "./mobile-hero";
import Link from "next/link";
import AnimatedTabsWithContent from "./sliding-tab";
import { useMemo } from "react";
import LottiePreview from "./lottie-preview";
import VideoPreview from "./video-preview";
import { MorphingText } from "./ui/morphing-text";
import { RainbowButton } from "./ui/rainbow-button";

interface ProjectTileProps {
  projects: Project[];
}

const ProjectTile: React.FC<ProjectTileProps> = ({ projects }) => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("tab") || "all";

  const filteredProjects = useMemo(() => {
    return selectedTab === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTab));
  }, [selectedTab, projects]);

  console.log(filteredProjects);

  return (
    <div className="relative w-full min-h-svh sm:min-h-full flex flex-col px-5">
      <div className="hidden sticky top-16 z-10 bg-[#FCFCFC] w-full h-16 sm:flex justify-between items-center">
        <h2>My Works</h2>
        <AnimatedTabsWithContent />
      </div>
      <MobileHero />

      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 2xl:grid-cols-3 desktop:grid-cols-4 gap-5">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full w-full flex flex-col items-center justify-center px-5 mx-auto my-20">
            <div className="flex flex-col items-center w-full">
              <MorphingText
                className="text-4xl mb-4 lg:mb-8"
                texts={["Coming Soon", "Later"]}
              />
              <p className="text-xs lg:text-base text-gray-500 mb-6 text-center">
                This project is not publicly available yet, but it is in the
                works.
                <br />
                Please check back later or explore other showcased projects in
                the meantime.
              </p>
              <Link href="/?tab=all">
                <RainbowButton className="h-12 flex justify-center items-center text-base font-space-grotesk px-8">
                  Back to all view
                </RainbowButton>
              </Link>
            </div>
          </div>
        ) : (
          filteredProjects.map((project) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default ProjectTile;

export const CellPreview = ({ name, href }: { name: string; href: string }) => {
  return (
    <div className="group relative mb-2 w-full aspect-3/2 max-w-2xl bg-[#F6F6F5] rounded-sm hover:scale-95 transition-all duration-300 p-6 md:p-12">
      <OptimizedImage
        className="w-full select-none transition-all"
        src={href}
        alt={name}
        width={3}
        height={2}
      />
      <span className="absolute bottom-2 left-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white rounded-sm text-xs text-black p-2 transition-all">
        {name}
      </span>
    </div>
  );
};
