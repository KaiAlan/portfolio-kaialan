"use client";

import { useState, useEffect } from "react";
import NextImage, { ImageProps } from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string;
  cacheKey?: string;
  blurDataURL?: string;
  caption?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// type ImageSrc = string | { default: string; height: number; width: number; blurDataURL?: string; blurWidth?: number; blurHeight?: number; };
const LOCAL_STORAGE_PREFIX = "image_cache_";
const DEFAULT_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmMWYxIiAvPjwvc3ZnPg==";

const OptimizedImage = ({
  src,
  alt,
  width = 100,
  height = 100,
  fallbackSrc,
  cacheKey,
  blurDataURL = DEFAULT_PLACEHOLDER,
  priority = false,
  caption,
  onLoad,
  onError,
  className,
  ...props
}: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<typeof src>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  const key = cacheKey || (typeof src === "string" ? src : "");
  const aspectRatio =
    typeof height === "number" && typeof width === "number"
      ? height / width
      : 0.75;

  // Load cached base64 data on mount
  useEffect(() => {
    if (typeof window === "undefined" || !key) return;

    try {
      const cachedData = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${key}`);
      if (cachedData) {
        setImageSrc(cachedData);
        setIsLoading(false);
      }
    } catch (error) {
      console.warn("Failed to load image from cache:", error);
    }
  }, [key]);

  // Handle image load
  const handleLoadComplete = () => {
    setIsLoading(false);
    if (onLoad) onLoad();

    // Cache the image as base64 if possible
    if (typeof window !== "undefined" && key && typeof src === "string") {
      try {
        // We'll only cache remote images, not local ones
        if (src.startsWith("http")) {
          cacheImageAsBase64(src, key);
        }
      } catch (error) {
        console.warn("Failed to cache image:", error);
      }
    }
  };

  // Handle image error
  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
    if (onError) onError();
  };

  // Function to cache image as base64
  const cacheImageAsBase64 = async (imageUrl: string, key: string) => {
    try {
      // Check if we've already cached this image
      if (localStorage.getItem(`${LOCAL_STORAGE_PREFIX}${key}`)) return;

      // Fetch the image and convert to base64
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        try {
          // Only store if it's a reasonable size (2MB max)
          if (base64data.length < 2 * 1024 * 1024) {
            localStorage.setItem(`${LOCAL_STORAGE_PREFIX}${key}`, base64data);
          }
        } catch (e) {
          // Handle quota exceeded or other storage errors
          console.warn("Failed to store image in cache:", e);

          // Clean up cache if we're out of space
          cleanImageCache();
        }
      };
      reader.readAsDataURL(blob);
    } catch (error) {
      console.warn("Error caching image:", error);
    }
  };

  // Clean up old cache items
  const cleanImageCache = () => {
    if (typeof window === "undefined") return;

    try {
      const keys = Object.keys(localStorage).filter((k) =>
        k.startsWith(LOCAL_STORAGE_PREFIX)
      );

      // Sort by last accessed (if we stored that) or just remove oldest entries
      if (keys.length > 50) {
        // Keep only the 50 most recent
        keys.slice(0, keys.length - 50).forEach((key) => {
          localStorage.removeItem(key);
        });
      }
    } catch (error) {
      console.warn("Error cleaning image cache:", error);
    }
  };

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div
        ref={ref}
        className="relative"
        style={{
          paddingBottom: props.style?.width ? "auto" : `${aspectRatio * 100}%`,
          width: props.style?.width || "100%",
          height: props.style?.height || "auto",
        }}
      >
        {/* Skeleton Loader */}
        {isLoading && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Image */}
        {(inView || priority) && (
          <NextImage
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            onLoadingComplete={handleLoadComplete}
            onError={handleError}
            placeholder="blur"
            blurDataURL={blurDataURL}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            style={{ objectFit: "cover" }}
            {...props}
          />
        )}
      </div>

      {/* Optional caption */}
      {caption && (
        <div className="text-sm text-muted-foreground mt-2">{caption}</div>
      )}
    </div>
  );
};

export default OptimizedImage;
