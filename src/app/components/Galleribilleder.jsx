import Image from "next/image"; // Hvis du bruger Next.js – ellers brug <img> i almindelig React

const FleurGallery = () => {
  const imageCount = 14;
  const images = Array.from(
    { length: imageCount },
    (_, i) => `/images/FleurGalleri/FleurGalleri${i + 1}.jpg`
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((src, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <Image
            src={src}
            alt={`Fleur Galleri ${index + 1}`}
            width={500}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default FleurGallery;
