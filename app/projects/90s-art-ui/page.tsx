import OptimizedImage from "@/components/images/optimized-image-component";
import ProjectDetails from "@/components/project-details";
import React from "react";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center py-12 px-4">
      <ProjectDetails projectType="Web Design" projectName="90s Pixel Ui" />
      <span className="w-full h-20" />
      <div className='w-full max-w-[1000px]'>
        <OptimizedImage
        src='https://images.ctfassets.net/xsgwjwcuxltx/6jBJHDTXwIn6ZnEax2rY4C/fa7694184df9c39f29fbd1964507578f/90-s_Pixel_Art.png'
        alt='htb-graphics'
        width={542}
        height={377}
        className='w-full'
        />
      </div>
      <div className="w-full columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 space-y-4 py-12">
        <OptimizedImage
          src='https://images.ctfassets.net/xsgwjwcuxltx/5jpIAYoosyntNYbRQJ0ZwH/f1602a6afc46202c5b469f36aca93786/90-s_Pixel_Art_-_1.png'
          alt='90s-art-ui'
          width={1}
          height={1}
          className="w-full"
        />
        <OptimizedImage
          src='https://images.ctfassets.net/xsgwjwcuxltx/4GpdoNVV7GlRnC4b9ZsO9E/71a9936821382994debf90ca64a3dd59/90-s_Pixel_Art_-_2.png'
          alt='90s-art-ui'
          width={1}
          height={1}
          className="w-full"
        />
        <OptimizedImage
          src='https://images.ctfassets.net/xsgwjwcuxltx/5MowWuHAQlOU268zHFk0A3/04db02554ce4067dbc5e2066a9337c87/90-s_Pixel_Art_-_3.png'
          alt='90s-art-ui'
          width={1}
          height={1}
          className="w-full"
        />
        <OptimizedImage
          src='https://images.ctfassets.net/xsgwjwcuxltx/6CkWRSuTVtec7kC2T0muDh/de9d77365c9697c95aa3bf52631f3615/90-s_Pixel_Art_-_4.png'
          alt='90s-art-ui'
          width={1}
          height={1}
          className="w-full"
        />
        <OptimizedImage
          src='https://images.ctfassets.net/xsgwjwcuxltx/5eZqofGM69nuX36689pEbd/d467d24902816a90366f1294c91007db/90-s_Pixel_Art_-_5.png'
          alt='90s-art-ui'
          width={1}
          height={1}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
