import Link from "next/link";
import React from "react";
import OptimizedImage from "../images/optimized-image-component";
import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 w-80 h-screen py-8 px-4 border-r border-gray-200">
      <div className="flex flex-col justify-start items-start gap-1">
        <Link href="/">
          <div className="flex gap-1 items-end justify-start w-full">
            {/* <OptimizedImage
              src="/images/profile.png"
              alt="profile image"
              className="w-[60px] rounded-full"
            /> */}
            <p className="text-[18px] font-mono w-full">Kaialan Razz</p>
          </div>
        </Link>
        {/* <p className="text-[12px] text-[#929292]">
          Elevating brands with stunning design.
        </p> */}
      </div>
      <p className="text-gray-500 text-[12px] font-mono py-4">
        UI/UX and Graphics designer, currently Freelancing, building things that
        hopefully encourage us to lead more thoughtful lives.
      </p>
      <div className="w-full flex flex-col gap-8 py-8">
        {/* <div className="text-left justify-start rounded-sm font-mono text-[12px] h-full p-4 border border-gray-500 bg-transparent">
          <div>
            <p className="uppercase">Work</p>
            <p className="text-[#929292]">A selection of recent works</p>
          </div>
        </div> */}
        <Link
          href="/"
          className="group w-full text-left justify-start rounded-sm font-mono text-[12px] h-full cursor-pointer"
        >
          <p className="flex flex-col justify-start items-start text-muted-foreground hover:text-[#463f39]">
            <span className="uppercase">Work</span>
            <span className="">A selection of recent works</span>
          </p>
          <span className="w-0 h-[1px] block bg-[#463F39] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="/about"
          className="group w-full text-left justify-start rounded-sm font-mono text-[12px] h-full cursor-pointer"
        >
          <p className="flex flex-col justify-start items-start text-muted-foreground hover:text-[#463f39]">
            <span className="uppercase">About</span>
            <span className="">Let us get to know each other</span>
          </p>
          <span className="w-0 h-[1px] block bg-[#463F39] transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-2 py-8">
        <h3 className=" font-medium font-mono uppercase pb-2">Contact</h3>
        <div
          className="group w-full text-left justify-start rounded-sm font-mono text-[12px] h-full cursor-pointer"
        >
          <p className="flex justify-between items-start text-muted-foreground hover:text-[#463f39]">
            <span className="uppercase">Email</span>
            <span className="hidden group-hover:block">dev.kaialan@gmail.com</span>
          </p>
          <span className="w-0 h-[1px] block bg-[#463F39] transition-all duration-300 group-hover:w-full" />
        </div>
        <Link
          href="https://x.com/kaialan_"
          className="group w-full text-left justify-start rounded-sm font-mono text-[12px] h-full cursor-pointer"
        >
          <p className="flex justify-between items-start text-muted-foreground hover:text-[#463f39]">
            <span className="uppercase font-sans">X/Twitter</span>
            <span className="hidden group-hover:block">@kaialan_</span>
          </p>
          <span className="w-0 h-[1px] block bg-[#463F39] transition-all duration-300 group-hover:w-full" />
        </Link>
        <Link
          href="https://linkedin.com/in/kaialan"
          className="group w-full text-left justify-start rounded-sm font-mono text-[12px] h-full cursor-pointer"
        >
          <p className="flex justify-between items-start text-muted-foreground hover:text-[#463f39]">
            <span className="uppercase">LinkedIn</span>
            <span className="hidden group-hover:block">@kaialan</span>
          </p>
          <span className="w-0 h-[1px] block bg-[#463F39] transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
