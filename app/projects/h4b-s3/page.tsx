import OptimizedImage from "@/components/images/optimized-image-component";
import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="Web Design" projectName="Hack4Bengal Season 3 Website" />
      <span className="w-full h-20" />
      <div className="max-w-[1300px] w-full flex flex-col justify-start items-center gap-2 mx-auto">
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/4hBCJLJPHlYPFwRKnX5cBr/392a5ebf49172181a33758d2a98efd1a/h4b-s3.png"
          alt="axtionable"
          width={1728}
          height={1064}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/6N2EqRdtbyJvobomTUw5na/9df97e78347b97521a7ab8bb4fd68166/h4b-s3-timer.png"
          alt="axtionable"
          width={1728}
          height={1172}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1pclj3LqYgXoXS2OH2kngC/7ac43bf119276266d31134ec24f8ba71/h4b-s3-about.png"
          alt="axtionable"
          width={1728}
          height={815}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1n0CEXO2dwmU7qTw33wdXH/b4035c6f7a2fd4567b4826b35db81117/h4b-s3-Timeline-01.png"
          alt="axtionable"
          width={1728}
          height={1569}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/1ZEWiVcVYg7K1NivkrpU5F/d6301538e4ec0109ffed00fec431123f/h4b-s3-sponsor.png"
          alt="axtionable"
          width={1728}
          height={2972}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/R1gUvITx7xKFxxszYptQl/7a8be085bd8c1750afccc13684e75d4b/h4b-s3-404_page.png"
          alt="axtionable"
          width={1728}
          height={1117}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/16vfSe9nik5AodlaOGkQW6/0f1b6616304dba574bcb036cd463f1aa/h4b-s3-404_page-v2.png"
          alt="axtionable"
          width={1728}
          height={1117}
          className="w-full"
        />
          <OptimizedImage
            src="https://images.ctfassets.net/xsgwjwcuxltx/3g8fzApxDcIUQr4BqtBaiJ/010b234c452edf871905fa1257a7bcb3/h4b-s3-FAQ.png"
            alt="axtionable"
            width={1728}
            height={1759}
            className="w-full"
          />
          <div className="w-full flex gap-8 py-10">
            <OptimizedImage
              src="https://images.ctfassets.net/xsgwjwcuxltx/35ZrzOLrdC5NbjfJy6XF1B/dec1d10a96db77d9ec95f873b85f7d9a/h4b-s3-Hero-mv.png"
              alt="axtionable"
              width={375}
              height={812}
              className="w-full"
            />
            <OptimizedImage
              src="https://images.ctfassets.net/xsgwjwcuxltx/4Cs6VX13pMWNtFN2ewH363/61bced6725f4ffe2cf6ff37163d739e4/h4b-s3-Hero-mv-nav.png"
              alt="axtionable"
              width={375}
              height={812}
              className="w-full"
            />
          </div>
      </div>
    </div>
  );
};

export default Page;
