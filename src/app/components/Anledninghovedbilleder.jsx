// Importerer Next.js' optimerede Image-komponent
import Image from "next/image";

// Exporterer en React-komponent med navn Abledninghovedbilleder
export default function Abledninghovedbilleder() {
  // Array med billedstier
  const images = [
    "/images/blomster2.jpg",
    "/images/blomster4.jpg",
    "/images/blomster3.jpg",
  ];

  return (
    <div className="px-[var(--space-xl)] pb-[var(--space-m)]">
      <div
        className="
          flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3
          sm:overflow-visible
        "
      >
        {/* Mapper billederne ud i hver sin container */}
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
              priority={index === 0} // Det første billede får prioritet i indlæsning
            />
          </div>
        ))}
      </div>
    </div>
  );
}
