"use client"; // Sørg for at denne fil er en client component

import Image from "next/image";
import BagrundsbilledetOm from "@/app/components/BagrundsbilledetOm";
import Info from "@/app/components/Info";
import Kort from "@/app/components/Kort";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/images/omoshovedbilledet.png"
          alt="hovedbilledet på Om fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-4/10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h2 className="text-4xl mb-4">OM FLEUR BLOMSTER</h2>
        </div>
      </div>

      <div>
        <h3 className="p-[var(--space-xl)] pb-[var(--space-l)]">
          FLEUR BLOMSTER SKABER <br />
          <div className="block text-right"> SMUKKE ØJEBLIKKE </div>
        </h3>
        <div className="container">
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
