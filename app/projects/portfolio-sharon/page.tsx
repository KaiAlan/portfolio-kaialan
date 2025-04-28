import OptimizedImage from "@/components/images/optimized-image-component";
import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="Web Design" projectName="Portfolio Sharon Lara" />
      <span className="w-full h-20" />
      <div className="max-w-[1300px] w-full flex flex-col justify-start items-center gap-8 mx-auto">
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/7wzB48Pyut2MiPhlkJIW0Q/ad47f1d568eb786217c49076cfdd5a09/portfolio-sharon-full-page.png"
          alt="portfolio sharon"
          width={1512}
          height={5435}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
