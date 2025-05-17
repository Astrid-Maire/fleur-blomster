"use client";
import Image from "next/image";

const FlowerGallery = () => {
  const flowers = [
    { src: "/images/anledning/anledning1.png", alt: "Blomsterarrangement 1" },
    { src: "/images/anledning/anledning2.png", alt: "Blomsterarrangement 2" },
    { src: "/images/anledning/anledning3.png", alt: "Blomsterarrangement 3" },
    { src: "/images/anledning/anledning4.png", alt: "Blomsterarrangement 4" },
    { src: "/images/anledning/anledning5.png", alt: "Blomsterarrangement 5" },
  ];

  return (
    <div className="flex flex-col gap-4 px-[var(--space-xl)] ">
      <div className="grid grid-cols-20 gap-4">
        <div className="col-span-12">
          <Image
            src={flowers[0].src}
            alt={flowers[0].alt}
            width={600}
            height={400}
            className="w-full h-auto object-cover "
          />
        </div>
        <div className="col-span-8">
          <Image
            src={flowers[1].src}
            alt={flowers[1].alt}
            width={300}
            height={350}
            className="w-full h-auto object-cover "
          />
        </div>
      </div>

      <div className="grid grid-cols-30 gap-4">
        <div className="col-span-11">
          <Image
            src={flowers[2].src}
            alt={flowers[2].alt}
            width={600}
            height={400}
            className="w-full h-auto object-cover "
          />
        </div>
        <div className="col-span-11">
          <Image
            src={flowers[3].src}
            alt={flowers[3].alt}
            width={300}
            height={350}
            className="w-full h-auto object-cover "
          />
        </div>
        <div className="col-span-8">
          <Image
            src={flowers[4].src}
            alt={flowers[4].alt}
            width={300}
            height={300}
            className="w-full h-auto object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default FlowerGallery;
