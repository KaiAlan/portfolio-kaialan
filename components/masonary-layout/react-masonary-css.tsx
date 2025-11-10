import Masonry from 'react-masonry-css';
import Image from 'next/image';
// import { useEffect, useState } from 'react';

type MasonryImage = {
  name: string;
  src: string;
};

type PinterestMasonryProps = {
  images: MasonryImage[];
};

const grayPlaceholder =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNlMWUxZTEiLz48L3N2Zz4=';

export function ReactMasonryCss({ images }: PinterestMasonryProps) {

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // Define breakpoints for responsive columns
  const breakpointColumnsObj = {
    default: 4,
    1920: 5,
    1567: 4,
    1200: 3,
    960: 2,
    // 640: 1,
  };

  
  // if (!isMounted) {
  //   // Render a placeholder, loader, or nothing on SSR and initial hydration
  //   return null;
  // }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-full gap-2"
      columnClassName="masonry-column"
    >
      {images.map((image) => (
        <div
          key={image.name}
          className="rounded-sm bg-gray-200 overflow-hidden group"
        >
          <Image
            src={image.src}
            alt={image.name}
            width={400}
            height={400}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={grayPlaceholder}
            loading="lazy"
          />
        </div>
      ))}
    </Masonry>
  );
}
