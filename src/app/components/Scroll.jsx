"use client";

import Image from "next/image";
import Link from "next/link";
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
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-[var(--space-xl)] pb-8">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 sm:gap-4 md:gap-6 scroll-smooth scrollbar-hide"
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
            className="relative min-w-[70%] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex-shrink-0"
          >
            <Image
              src={`/images/${img}.png`}
              alt={`Billede ${i}`}
              fill
              className="object-cover shadow-md"
            />

            <Link
              href="/pages/shop"
              className="absolute bottom-4 left-4 z-10 px-4 py-2 bg-[var(--knapfarve)]  rounded-md text-sm font-medium shadow hover:bg-[var(--mørkegrøn)] uppercase transition"
            >
              Kig på udvalg
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("left")}
        className="hidden sm:flex items-center justify-center absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-[var(--baggrundsfarve)] rounded-full shadow p-2 hover:bg-[var(--knapfarve)] transition"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden sm:flex items-center justify-center absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-[var(--baggrundsfarve)] rounded-full shadow p-2 hover:bg-[var(--knapfarve)] transition"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
