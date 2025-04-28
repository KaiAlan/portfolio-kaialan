import OptimizedImage from "@/components/images/optimized-image-component";
import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="Web Design" projectName="Axtionable" />
      <span className="w-full h-20" />
      <div className="max-w-[1300px] w-full flex flex-col justify-start items-center gap-8 mx-auto">
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/5ryf3tn6nD0gwSMly1Athd/42e501cb48164aaa2c9f42e51c460577/axtionable_home_page_MacBook_Pro_14__-_60.png"
          alt="axtionable"
          width={1512}
          height={2976}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/2jycPHiCubDadOSE1uJj4h/93c048e15ab2ba10c530f0fc3dacaa17/axtionable_job_listing_page_MacBook_Pro_14__-_47.png"
          alt="axtionable"
          width={1512}
          height={1762}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/74dTrb94CBseFq0itaJlLd/af97824cf58d3faf7b0ea0bb1e66d63b/New_Job_Posting.png"
          alt="axtionable"
          width={1512}
          height={956}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1jnWtVB7B9GI28DOFuDJTK/f3d7fe8fcb36af94b07f025ec22c4463/Admin_Panle.png"
          alt="axtionable"
          width={1512}
          height={1829}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
