"use client";

import confetti from "canvas-confetti";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { HeartFilledIcon, HeartIcon } from "@radix-ui/react-icons";
import { useLikes } from "@/hooks/useLikes";

const LikeButton = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { likes, isLoading, error, incrementLikes, isIncrementing } = useLikes();


  const handleClick = async () => {
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

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);

    incrementLikes()
  };


  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      disabled={isIncrementing}
      className="group w-24 rounded-lg cursor-pointer font-medium gap-2"
    >
      <HeartIcon className="text-rose-400 group-hover:hidden" />
      <HeartFilledIcon className="hidden group-hover:block text-rose-400" />
      {/* {likeCount} */}
      {isLoading ? "Loading" : error ? 469 : likes}
    </Button>
  );
};

export default LikeButton;
