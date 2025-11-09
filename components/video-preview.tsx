'use client'

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

interface VideoPreviewProps {
  name: string;
  videoUrl: string;
  className?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ name, videoUrl, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 200px 0px" }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle autoplay policy errors silently
      });
    } else {
      videoRef.current?.pause();
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={cn("group relative mb-2 w-full aspect-3/2 max-w-2xl bg-[#F6F6F5] rounded-sm hover:scale-95 transition-all duration-300 p-6 md:p-12", className)}
    >
      {isVisible ? (
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full"
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
        />
      ) : (
        <div className="w-full h-full bg-[#f6f6f5] flex items-center justify-center">
          <span className="font-space-grotesk">Loading video...</span>
        </div>
      )}
      <span className="absolute bottom-2 left-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white rounded-sm text-xs text-black p-2 transition-all">
        {name}
      </span>
    </div>
  );
};

export default VideoPreview;
