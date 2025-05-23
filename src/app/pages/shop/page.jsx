"use client";
import { useState } from "react";
import Category from "@/app/components/Category";
import Filter from "@/app/components/Filter";
import Produkter from "@/app/components/Produkter";
import Image from "next/image";
import KurvIkon from "@/app/components/KurvIkon";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("alle");

  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
        <Image
          src="/images/shophovedbilledet.png"
          alt="Hovedbilledet på shopping side for Fleur Blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="text-4xl ">WEBSHOP TIL FLEUR BLOMSTER</h2>
        </div>
      </div>

      <div className="px-space-xl">
        <h2 className="text-4xl ">
          WEBSHOP TIL <br />
          <span className="block text-right">FLEUR BLOMSTER</span>
        </h2>

        <div className="container1 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full items-start">
            <div className="w-full">
              <p className="paragraph1  leading-relaxed">
                Velkommen til vores webshop, hvor du nemt kan bestille smukke
                buketter og blomsterdekorationer online. Vi har samlet et udvalg
                af vores mest populære og sæsonaktuelle kreationer, så du
                hurtigt kan finde den rette hilsen til enhver anledning. Hver
                buket bliver håndbundet med omhu og leveret frisk, som var den
                hentet direkte i butikken.
              </p>
            </div>

            <div className="w-full">
              <p className="paragraph1 text-base leading-relaxed ">
                Hos Fleur hjælper vi dig med at vælge farver der passer til
                anledningen, eller vi sammensætter en buket i smukke harmoniske
                toner for dig.
              </p>

              <Filter
                selected={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Produkter selectedCategory={selectedCategory} />
      </div>
    </>
  );
}
