"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ScrollGallery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-[var(--space-xl)] pb-[var(--space-xl)]">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide"
      >
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
            className="relative min-w-[300px] h-[400px] flex-shrink-0"
          >
            <Image
              src={`/images/${img}.png`}
              alt={`Billede ${i}`}
              fill
              className="object-cover rounded shadow-md"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="absolute left-[var(--space-s)] top-1/2 -"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-[var(--space-s)]  "
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
}
