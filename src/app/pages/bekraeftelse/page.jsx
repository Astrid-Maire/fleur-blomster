"use client";

import { useKurv } from "@/app/components/KurvContext";
import { useRouter } from "next/navigation";

export default function Betaling() {
  const { kurv, nulstilKurv } = useKurv();
  const router = useRouter();

  const handleTilbage = () => {
    nulstilKurv();
    router.push("/");
  };

  const kurvTekst =
    kurv.length === 0
      ? "Kurven er tom."
      : kurv
          .map((item) => {
            let tekst = `Navn: ${item.navn}, Størrelse: ${item.stoerrelse}, Antal: ${item.antal}, Pris: ${item.pris} kr`;
            if (item.info?.præferencer) {
              tekst += `, Præferencer: ${item.info.præferencer}`;
            }
            return tekst;
          })
          .join(" | ");

  return (
    <div className="px-[var(--space-3xl)] pt-[var(--space-3xs)] bg-responsive">
      <h3 className="text-center text-2xl font-bold">BEKRÆFTELSE</h3>

      <p className="text-justify md:px-[var(--space-3xs)] max-w-2xl mx-auto py-[var(--space-s)] leading-relaxed">
        Tak for din bestilling. Vi har modtaget din ordre og betalingen er
        gennemført. Du vil snart modtage en bekræftelse på e-mail med alle
        detaljer. Vi går nu i gang med at klargøre din bestilling, og vi sørger
        for, at alt bliver gjort med den samme omhu og kærlighed, som vi lægger
        i alle vores blomster. Har du spørgsmål eller særlige ønsker, er du
        altid velkommen til at kontakte os. Tak fordi du valgte Fleur – vi
        glæder os til at sende blomstrende glæde din vej.
        <br />
        <br />
        <strong>Din bestilling:</strong> {kurvTekst}
      </p>
      <div className="pb-[var(--space-2xl)]">
        <button onClick={handleTilbage} className="min-knap pb-10 ">
          TILBAGE TIL FORSIDEN
        </button>
      </div>
    </div>
  );
}
