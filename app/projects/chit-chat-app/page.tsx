import OptimizedImage from "@/components/images/optimized-image-component";
import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="graphics" projectName="Chit Chat WebApp" />
      <span className="w-full h-20" />
      <div className="w-full max-w-[1300px] flex flex-col gap-2 mx-auto">
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/tO71XK8XdO3b5BoRI4y9j/d76731f5024bf0ecd498c7720904d751/chit-chat.png"
          alt="htb-graphics"
          width={1508}
          height={1072}
          className="w-full"
        />
        <OptimizedImage
          src="https://images.ctfassets.net/xsgwjwcuxltx/7olVRUXn0elTU4aYxv2js5/47a5c82b11906300e69e71d4f64c0628/chit-chat-app.png"
          alt="htb-graphics"
          width={1440}
          height={1024}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
