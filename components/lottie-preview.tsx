import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";

interface LottiePreviewProps {
  name: string;
  animationData: object;
}

const LottiePreview: React.FC<LottiePreviewProps> = ({ name, animationData }) => {
  const [isVisible, setIsVisible] = useState(false);
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
      {
        rootMargin: "0px 0px 200px 0px", // start loading slightly before in view
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative mb-2 w-full aspect-3/2 max-w-2xl bg-[#F6F6F5] rounded-sm hover:scale-95 transition-all duration-300 p-6 md:p-12"
    >
      {isVisible ? (
        <Lottie animationData={animationData} loop={true} />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span>Loading animation...</span>
        </div>
      )}
      <span className="absolute bottom-2 left-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white rounded-sm text-xs text-black p-2 transition-all">
        {name}
      </span>
    </div>
  );
};

export default LottiePreview;
