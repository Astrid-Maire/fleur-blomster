import Image from "next/image";

export default function Abledninghovedbilleder() {
  const images = [
    "/public/images/blomster2.jpg",
    "/public/images/blomster4.jpg",
    "/public/images/blomster3.jpg",
  ];

  return (
    <div className="px-[var(--space-xl)] pb-[var(--space-m)]">
      <div
        className="
          flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3
          sm:overflow-visible
        "
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="
              relative flex-shrink-0 w-60 h-60 sm:w-full sm:aspect-[5/5]
            "
          >
            <Image
              src={src}
              alt={`Fleur blomster ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
