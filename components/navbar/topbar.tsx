"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HeartFilledIcon,
  HeartIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import confetti from "canvas-confetti";
import { useRef, useState } from "react";
import OptimizedImage from "../images/optimized-image-component";
import Link from "next/link";
import { incrementLikeCount } from "@/app/actions/increase-likes";

type TopbarProps = {
  initialLikeCount: number;
};


const Topbar = ({ initialLikeCount }: TopbarProps) => {
  const router = useRouter();
  const [likeCount, setLikeCount] = useState(initialLikeCount || 469);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = async() => {
    const scalar = 2;
    const heart = confetti.shapeFromText({ text: "❤️", scalar });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [heart],
      scalar,
      origin: { x: 0.5, y: 0.5 },
    };

    const shoot = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        const originX = (rect.left + rect.width / 2) / window.innerWidth;
        const originY = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
          ...defaults,
          origin: { x: originX, y: originY },
          particleCount: 1,
        });

        confetti({
          ...defaults,
          origin: { x: originX, y: originY },
          particleCount: 30,
        });
      } else {
        // fallback to center if ref missing
        confetti(defaults);
      }

    };
    setLikeCount(prev => (prev ?? 0) + 1);

    
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    try {
      const updatedCount = await incrementLikeCount();
      setLikeCount(updatedCount);
    } catch {
      setLikeCount((prev) => (prev !== null ? prev - 1 : 0)); // rollback on fail
    }
  };

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
      <Link href='/' className='w-full sm:hidden flex justify-start items-center gap-2'>
        <OptimizedImage
          src='/images/profile.png'
          alt='profile'
          width={16}
          height={16}
          className='w-5 h-5 rounded-full'
        />
        <h1 className='text-left text-base text-black font-space-grotesk font-medium'>Kaialan Razz</h1>
      </Link>
      <Button
        ref={buttonRef}
        onClick={handleClick}
        className="group w-24 rounded-lg cursor-pointer font-medium gap-2"
      >
        <HeartIcon className="text-rose-400 group-hover:hidden" />
        <HeartFilledIcon className="hidden group-hover:block text-rose-400" />
        {likeCount}
      </Button>
    </div>
  );
};

export default Topbar;
