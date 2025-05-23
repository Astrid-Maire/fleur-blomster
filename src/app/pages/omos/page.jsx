"use client"; // Sørg for at denne fil er en client component

import Image from "next/image";
import BagrundsbilledetOm from "@/app/components/BagrundsbilledetOm";
import Info from "@/app/components/Info";
import Kort from "@/app/components/Kort";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
        <Image
          src="/images/omoshovedbilledet.png"
          alt="hovedbilledet på Om fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h2>OM FLEUR BLOMSTER </h2>
        </div>
      </div>

      <div className="">
        <div className="px-[var(--space-xl)] pt-[var(--space--m)] ">
          <h3 className="text-2xl sm:text-3xl md:text-4xl mt-[var(--space-xl)] mb-[var(--space-xl)] leading-tight ">
            <span className="block sm:hidden ">
              FLEUR BLOMSTER SKABER SMUKKE ØJEBLIKKE
            </span>
            <span className="hidden sm:block">
              FLUER BLOMSTER SKABER
              <br />
              <span className="block text-right">SMUKKE ØJEBLIKKE</span>
            </span>
          </h3>
        </div>
        <div className="paragraph-container">
          <p className="paragraph">
            Hos os handler det om mere end blomster. Vi skaber personlige
            buketter og blomstrende oplevelser, der bringer glæde, nærvær og
            skønhed ind i hverdagen. Hver blomst er nøje udvalgt, hver buket
            bundet med kærlighed og tanke på dem, der skal modtage den. Uanset
            om du leder efter en gave, noget smukt til dig selv eller blot
            inspiration, glæder vi os til at dele vores passion med dig.
          </p>
          <p className="paragraph">
            Vi er passionerede omkring at bringe naturens skønhed tættere på
            dig. Hos os finder du ikke bare blomster, men inspiration til at
            skabe magiske øjeblikke i dit liv. Uanset om du ønsker at forkæle
            dig selv eller give en betænksom gave, er vi her for at hjælpe dig
            med at vælge de perfekte blomster. Besøg os i Trørød, hvor vi glæder
            os til at dele vores passion for blomster med dig.
          </p>
        </div>
      </div>
      <BagrundsbilledetOm />
      <Info />
      <Kort />
    </>
  );
}
