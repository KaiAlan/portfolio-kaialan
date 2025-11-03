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

const Topbar = () => {
  const router = useRouter();
  const [likeCount, setLikeCount] = useState(469);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
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

      setLikeCount(likeCount + 1);
    };

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  };

  return (
    <div className="w-full h-16 flex justify-between items-center px-5 border-b border-b-[#EBEBEB]">
      <div className="flex justify-center items-center gap-2">
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
