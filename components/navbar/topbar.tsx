"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import OptimizedImage from "../images/optimized-image-component";
import Link from "next/link";
import LikeButton from "../like-button";


const Topbar = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 w-full h-16 flex justify-between items-center px-5 z-20 bg-[#FCFCFC] border-b border-b-[#EBEBEB]">
      <div className="hidden sm:flex justify-center items-center gap-2">
        <Button
          variant="secondary"
          className="w-7 h-7 rounded-[7px] shrink-0 cursor-pointer"
          onClick={() => router.back()}
          aria-label="Go Back"
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant="ghost"
          className="w-7 h-7 rounded-[7px] shrink-0 cursor-pointer"
          onClick={() => window.history.forward()}
          aria-label="Go Forward"
        >
          <ArrowRightIcon />
        </Button>
      </div>
      <Link
        href="/"
        className="w-full sm:hidden flex justify-start items-center gap-2"
      >
        <OptimizedImage
          src="/images/profile.png"
          alt="profile"
          width={16}
          height={16}
          className="w-5 h-5 rounded-full"
        />
        <h1 className="text-left text-base text-black font-space-grotesk font-medium">
          Kaialan Razz
        </h1>
      </Link>
      <LikeButton />
    </div>
  );
};

export default Topbar;
