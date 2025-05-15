export default function FleurGalleri() {
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
  };

  return (
    <div className="gallery-container">
      {Object.entries(images).map(([key, filename]) => (
        <div key={key} className={`item item-${key}`}>
          <img src={`/FleurGalleri/${filename}`} alt={`Fleur Galleri ${key}`} />
        </div>
      ))}
    </div>
  );
}
