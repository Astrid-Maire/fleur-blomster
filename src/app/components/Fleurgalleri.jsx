import Image from "next/image";

const images = {
  1: "/images/FleurGalleri/FleurGalleri1.png",
  2: "/images/FleurGalleri/FleurGalleri2.png",
  3: "/images/FleurGalleri/FleurGalleri3.png",
  4: "/images/FleurGalleri/FleurGalleri4.png",
  5: "/images/FleurGalleri/FleurGalleri5.png",
  6: "/images/FleurGalleri/FleurGalleri6.png",
  7: "/images/FleurGalleri/FleurGalleri7.png",
  8: "/images/FleurGalleri/FleurGalleri8.png",
  9: "/images/FleurGalleri/FleurGalleri9.png",
  10: "/images/FleurGalleri/FleurGalleri10.png",
  11: "/images/FleurGalleri/FleurGalleri11.png",
  12: "/images/FleurGalleri/FleurGalleri12.png",
  13: "/images/FleurGalleri/FleurGalleri13.png",
  14: "/images/FleurGalleri/FleurGalleri14.png",
  15: "/images/FleurGalleri/FleurGalleri15.JPG",
  16: "/images/FleurGalleri/FleurGalleri16.JPG",
  17: "/images/FleurGalleri/FleurGalleri17.png",
  18: "/images/FleurGalleri/FleurGalleri18.JPG",
  19: "/images/FleurGalleri/FleurGalleri19.JPG",
  20: "/images/FleurGalleri/FleurGalleri20.JPG",
  21: "/images/FleurGalleri/FleurGalleri22.JPG",
};

export default function FleurGalleri() {
  return (
    <div className="gallery-container">
      {Object.entries(images).map(([key, src]) => (
        <div key={key} className={`item item-${key}`}>
          <Image
            src={src}
            alt={`Fleur Galleri ${key}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
    </div>
  );
}
