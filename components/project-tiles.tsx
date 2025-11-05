"use client";

import { useSearchParams } from "next/navigation";
import { Project, showcaseProject } from "@/data/projects/showcase";
import OptimizedImage from "./images/optimized-image-component";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cross2Icon } from "@radix-ui/react-icons";
import MobileHero from "./mobile-hero";
import Link from "next/link";
import { FilterTab } from "./filter-tab";
import AnimatedTabsWithContent from "./sliding-tab";
import { useMemo } from "react";

const ProjectTile = () => {
  const searchParams = useSearchParams();
  const selectedTab = searchParams.get("tab") || "all";

  const filteredProjects = useMemo(() => {
    return selectedTab === "all"
      ? showcaseProject
      : showcaseProject.filter((project) => project.tags.includes(selectedTab));
  }, [selectedTab]);

  // console.log("Selected tab:", selectedTab);
  // showcaseProject.forEach((p) => {
  //   console.log(p.name, p.tags);
  // });
  // console.log("Filtered projects:", filteredProjects);

  return (
    <div className="relative w-full flex flex-col px-5">
      <div className="hidden sticky top-0 z-10 bg-[#FCFCFC] w-full h-16 sm:flex justify-between items-center">
        <h2>My Works</h2>
        {/* <FilterTab /> */}
        <AnimatedTabsWithContent />
      </div>
      <MobileHero />

      {/* <div className="w-full columns-1 tablet:columns-2 laptop:columns-3 gap-5">
        {showcaseProject.map((project) => {
          return(
            <SingleCell
              name={project.name}
              href={project.thumbnail}
            />
          )
        })}
      </div> */}
      {/* <span className="w-full h-16"></span> */}

      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-5">
        {filteredProjects.map((project) => {
          // return <SingleCell key={index} project={project} />;
          return (
            <Link key={project.thumbnail} href="" className="w-full">
              <CellPreview
                name={project.name}
                href={project.thumbnail}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTile;

const CellPreview = ({ name, href }: { name: string; href: string }) => {
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

const SingleCell = ({ project }: { project: Project }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <CellPreview name={project.name} href={project.thumbnail} />
      </DrawerTrigger>
      <DrawerContent className="max-h-[90vh] flex flex-col">
        <ScrollArea className="relative h-full overflow-y-auto p-4">
          <div className="sticky top-0 z-10 flex justify-end bg-white">
            <DrawerClose>
              <Button
                variant="ghost"
                className="rounded-full w-16 h-16 cursor-pointer"
              >
                <Cross2Icon className="radix-icon w-8 h-8" />
              </Button>
            </DrawerClose>
          </div>
          <DrawerHeader>
            <DrawerTitle>{project.name}</DrawerTitle>
            <DrawerDescription className="sr-only">
              This action cannot be undone.
            </DrawerDescription>
          </DrawerHeader>
          <div className="w-full h-full pb-20 flex flex-col">
            <OptimizedImage
              className="w-1/2 aspect-4/3 select-none transition-all"
              src={project.thumbnail}
              alt={project.name}
              width={3}
              height={2}
            />
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};
