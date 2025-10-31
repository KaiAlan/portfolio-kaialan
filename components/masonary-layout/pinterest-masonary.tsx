import Image from "next/image";

type MasonryImage = {
  name: string;
  src: string;
};

type PinterestMasonryProps = {
  images: MasonryImage[];
};

export function PinterestMasonry({ images }: PinterestMasonryProps) {
  return (
    <div
      className="w-full gap-4"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gridAutoRows: "auto",
      }}
    >
      {images.map((image) => (
        <div
          key={image.name}
          className="relative overflow-hidden rounded-lg bg-gray-200 group w-full"
        >
          <Image
            src={image.src}
            alt={image.name}
            width={4}
            height={3}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
