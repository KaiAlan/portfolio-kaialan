import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type MasonryImage = {
  name: string;
  src: string;
};

type PinterestMasonryProps = {
  images: MasonryImage[];
};

export function MasonryWithParallax({ images }: PinterestMasonryProps) {

   const { scrollY } = useScroll();
   // Parallax effect: elements move slower than scroll (less translation)
  const y = useTransform(scrollY, [0, 1000], [0, -200]); // adjust distances as needed


    // Define breakpoints for responsive columns
  const breakpointColumnsObj = {
    default: 7,
    1920: 5,
    1567: 4,
    1200: 3,
    960: 2,
    640: 1,
  };

  return (
    <motion.div style={{ y }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-full gap-4"
        columnClassName="masonry-column"
      >
        {images.map((image) => (
          <div key={image.name} className="mb-4 rounded-lg bg-gray-200 overflow-hidden group">
            <Image
              src={image.src}
              alt={image.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Masonry>
    </motion.div>
  );
}
