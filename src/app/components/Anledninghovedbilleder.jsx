import Image from "next/image";

export default function Abledninghovedbilleder() {
  const images = [
    "/images/blomster2.jpg",
    "/images/blomster4.jpg",
    "/images/blomster3.jpg",
  ];

  return (
    <div className="px-[var(--space-xl)] pb-[var(--space-m)]">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-[5/5] ">
            <Image
              src={src}
              alt={`Fleur blomster ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className=""
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
