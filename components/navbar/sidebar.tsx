import Link from "next/link";
import React from "react";
import OptimizedImage from "../images/optimized-image-component";
import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 w-80 h-screen py-8 px-4 border-r border-gray-200 bg-[#fafafa]">
      <div className="flex flex-col justify-start items-start gap-1">
        <Link href="/">
          <div className="flex gap-1 items-end justify-start w-full">
            <OptimizedImage
              src="/images/profile.png"
              alt="profile image"
              className="w-[60px] rounded-full"
            />
            <p className="text-[18px] text-black font-mono w-full">
              Kaialan Razz
            </p>
          </div>
        </Link>
        {/* <p className="text-[12px] text-[#929292]">
          Elevating brands with stunning design.
        </p> */}
      </div>
      <p className="text-gray-500 text-[12px] py-4">UI/UX and Graphics designer, currently Freelancing, building things that hopefully encourage us to lead more thoughtful lives.</p>
      <div className="w-full flex flex-col gap-2 py-8">
          <Button variant='secondary' className="text-left justify-start rounded-sm font-mono text-[12px] h-full p-4 border border-gray-500">
            {/* <span className="w-8 h-8 rounded-sm bg-gray-300"></span> */}
            <div>
              <p className="uppercase">Work</p>
              <p className="text-[#929292]">A selection of recent works</p>
            </div>
          </Button>
          <Button variant='secondary' className="text-left justify-start rounded-sm font-mono text-[12px] h-full p-4 cursor-not-allowed">
            {/* <span className="w-8 h-8 rounded-sm bg-gray-300"></span> */}
            <div>
              <p className="uppercase">About</p>
              <p className="text-[#929292]">Let us get to know each other</p>
            </div>
          </Button>
      </div>
      <div className="w-full flex flex-col gap-2 py-8">
          <Button variant='secondary' className="text-left justify-start rounded-sm font-mono text-[12px] h-full p-4 hover:outline-2 hover:outline-gray-600">
            {/* <span className="w-8 h-8 rounded-sm bg-gray-300"></span> */}
            <div>
              <p className="uppercase">Email</p>
              <p className="text-[#929292] select-text">dev.kaialan@gmail.com</p>
            </div>
          </Button>
          <Link href='https://x.com/kaialan_' className="w-full h-full cursor-pointer">
            <Button variant='secondary' className="w-full text-left justify-start rounded-sm font-mono text-[12px] h-full p-4 hover:outline-2 hover:outline-gray-600 cursor-pointer">
              {/* <span className="w-8 h-8 rounded-sm bg-gray-300"></span> */}
              <div>
                <p className="uppercase">x/twitter</p>
                <p className="text-[#929292]">@kaialan_</p>
              </div>
            </Button>
          </Link>
          <Link href='https://linkedin.com/in/kaialan' className="w-full cursor-pointer">
            <Button variant='secondary' className="w-full text-left justify-start rounded-sm font-mono text-[12px] h-full p-4 hover:outline-2 hover:outline-gray-600 cursor-pointer">
              {/* <span className="w-8 h-8 rounded-sm bg-gray-300"></span> */}
              <div>
                <p className="uppercase">LinkedIn</p>
                <p className="text-[#929292]">@kaialan</p>
              </div>
            </Button>
          </Link>
          {/* <Button variant='secondary' className="text-left justify-start rounded-sm font-mono text-[12px] h-full p-4 hover:outline-2 hover:outline-gray-600">
            <span className="w-8 h-8 rounded-sm bg-gray-300"></span>
            <div>
              <p className="uppercase">Contact</p>
              <p className="text-[#929292]">A selection of recent works</p>
            </div>
          </Button> */}
      </div>
    </aside>
  );
};

export default Sidebar;
