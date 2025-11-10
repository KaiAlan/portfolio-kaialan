"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

interface RotatingCDProps {
  className?: string;
  width?: number;
  height?: number;
}

const RotatingCD: React.FC<RotatingCDProps> = ({ className, width, height }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={cn(
        "flex gap-6 items-center justify-center absolute -left-40 -top-20 origin-center",
        className
      )}
    >
      <button
        aria-label={isPlaying ? "Pause Song" : "Play Song"}
        onClick={handleToggle}
        className="focus:outline-none"
      >
        <img
          src="/red-cd.webp"
          alt="red-cd"
          width={width || 400}
          height={height || 400}
          className={
            isPlaying
              ? "animate-spin-slow origin-center rotate-45"
              : "origin-center rotate-45"
          }
        />
      </button>
      <audio
        ref={audioRef}
        src="https://assets.ctfassets.net/xsgwjwcuxltx/31w204f0ZUIYd1Y1fYYElt/850b09d92f741e7b2f02d1dc024801df/cant-help-falling-in-love-lyrics.mp3"
        loop
      />
    </div>
  );
};

export default RotatingCD;
