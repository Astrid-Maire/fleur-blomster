"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ScrollGallery() {
  // Ref til at tilgå scrollbaren i containeren
  const scrollRef = useRef(null);

  // Funktion der håndterer scroll i containeren til venstre eller højre
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current; // Aktuel scrollposition og bredde af visible område
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - clientWidth // Scroll ikon
          : scrollLeft + clientWidth, // Scroll højre ikon
      behavior: "smooth", // Smooth animation ved scroll
    });
  };

  // Hook til at lytte efter keyboard-pil tryk og scrolle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") scroll("left");
      if (e.key === "ArrowRight") scroll("right");
    };
    window.addEventListener("keydown", handleKeyDown); // Tilføjer event listener til tastetryk
    return () => window.removeEventListener("keydown", handleKeyDown); // Rydder op ved unmount
  }, []);

  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-[var(--space-xl)] pb-8">
      <div
        ref={scrollRef} // Kobler ref til denne div
        className="flex overflow-x-auto gap-4 sm:gap-4 md:gap-6 scroll-smooth scrollbar-hide"
      >
        {/* Mapper over billederne og laver hver til en scrollbar-item */}
        {[
          "favorit",
          "favorit-1",
          "favorit-2",
          "favorit-3",
          "favorit-4",
          "favorit-5",
          "favorit-6",
        ].map((img, i) => (
          <div
            key={i}
            tabIndex={0} // Gør elementet fokusérbart for tastaturnavigation
            className="relative min-w-[70%] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex-shrink-0 outline-none focus:ring-2 focus:ring-[var(--knapfarve)] rounded-md group"
          >
            <div className="absolute inset-0 overflow-hidden rounded-md">
              <Image
                src={`/images/${img}.png`}
                alt={`Billede ${i + 1}`}
                fill // Fylder hele containeren
                loading="lazy" // Lazy load billeder for performance
                className="object-cover shadow-md transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-1" // Animation ved hover
              />
            </div>
            <Link
              href="/pages/shop"
              className="absolute bottom-4 left-4 z-10 px-4 py-2 bg-[var(--knapfarve)] rounded-md text-sm font-medium shadow hover:bg-[var(--mørkegrøn)] focus:outline-none focus:ring-2 focus:ring-[var(--knapfarve)] uppercase transition"
            >
              Kig på udvalg
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        aria-label="Rul til venstre"
        className="hidden sm:flex items-center justify-center absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[var(--baggrundsfarve)] rounded-full shadow p-2 hover:bg-[var(--knapfarve)] focus:outline-none focus:ring-2 focus:ring-[var(--knapfarve)] transition"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        aria-label="Rul til højre"
        className="hidden sm:flex items-center justify-center absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[var(--baggrundsfarve)] rounded-full shadow p-2 hover:bg-[var(--knapfarve)] focus:outline-none focus:ring-2 focus:ring-[var(--knapfarve)] transition"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
