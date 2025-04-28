import OptimizedImage from "@/components/images/optimized-image-component";
import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails
        projectType="Web Design"
        projectName="Sparkit Ui Design"
      />
      <span className="w-full h-20" />
      <div className="max-w-[1300px] w-full flex flex-col justify-start items-center gap-2 mx-auto">
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1ABiTQMt1lopJClb9iJGQm/63c1fb030b3ef1bbf03fd83a6a397e12/sparkit-Home_Page_-_1.png"
          alt="sparkit"
          width={1512}
          height={4267}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/2XovzBYTzBZ34gCQ53Itlb/d8185754de4de34710750bfe2bd7fa11/Onboarding_-_2.png"
          alt="sparkit"
          width={1512}
          height={982}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/o2KzbhhKJkGYkhW4U84Ey/3f72b4fc9177c4b3511ee89bf70ff0ff/Product_Details_-_1.png"
          alt="sparkit"
          width={1512}
          height={982}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/2SupctZRRAaVBdOtumqYEn/49837dc00ebcc61aab77392ce0eba07d/Search_Results_-_1.png"
          alt="sparkit"
          width={1512}
          height={1147}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/6XTjFvJrmt5ycrpzJKtVBV/e3182dc58596df08cdf275a79f021ad1/Product_Details_-_3.png"
          alt="sparkit"
          width={1512}
          height={13326}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
