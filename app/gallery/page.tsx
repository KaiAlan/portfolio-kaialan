"use client";

import { MasonryWithParallax } from "@/components/masonary-layout/masonary-with-paralaxx";
import { PinterestMasonry } from "@/components/masonary-layout/pinterest-masonary";
import { ReactMasonryCss } from "@/components/masonary-layout/react-masonary-css";
import { thumbnailData } from "@/data/thumbnails";
import { useLenisScroll } from "@/hooks/use-lenis-scroll";

export default function GalleryPage() {
  useLenisScroll();
  return (
    <div className="relative w-full mx-auto px-5">
      <div className="sticky top-0 z-100 w-full flex flex-col md:flex-row justify-between items-start gap-2 py-5 bg-[#FCFCFC]">
        <h1 className="text font-semibold">Gallery</h1>
        <p className="text-wrap md:text-right text-sm text-[#929292]">A collection of my design crafts, ideas, inspirations and pictures.</p>
      </div>
      <div className="w-full mx-auto pb-2">
        {/* <PinterestMasonry images={thumbnailData} /> */}
        <ReactMasonryCss images={thumbnailData} />
        {/* <MasonryWithParallax images={thumbnailData} /> */}
      </div>
    </div>
  );
}
