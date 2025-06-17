"use client";
import { useKurv } from "@/app/components/KurvContext";
import { useRouter } from "next/navigation";

export default function Betaling() {
  const { kurv, nulstilKurv } = useKurv(); // Henter kurven og en funktion til at nulstille den
  const router = useRouter(); // Initialiserer router til at navigere programmatisk

  // Funktion der kaldes når brugeren klikker "tilbage" knappen
  const handleTilbage = () => {
    nulstilKurv(); // Tømmer kurven
    router.push("/"); // Sender brugeren tilbage til forsiden
  };

  // Funktion til at oversætte størrelses-koder til læsbar tekst
  const oversætStørrelse = (value) => {
    if (!value) return ""; // Returner tom streng hvis værdien er falsy
    switch (value.toLowerCase()) {
      case "s":
        return "lille størrelse";
      case "m":
        return "mellemstørrelse";
      case "l":
        return "stor størrelse";
      default:
        return value; // Hvis ikke s, m eller l, returner som den er
    }
  };

  // Genererer en tekstbaseret oversigt over indholdet i kurven
  const kurvTekst =
    kurv.length === 0
      ? "Kurven er tom." // Hvis kurven er tom, vis denne tekst
      : kurv
          .map((item) => {
            const erAnledning = item.id?.startsWith("anledning-"); // Tjekker om item er en anledning (f.eks. en kategori eller speciel type)
            if (erAnledning) {
              // Hvis det er en anledning, lav en tekst med navn og antal
              let tekst = `${item.navn}, Antal: ${item.antal}`;
              // Hvis der findes præferencer i item.info, tilføj dem til teksten
              if (item.info?.præferencer) {
                tekst += `, Præferencer: ${item.info.præferencer}`;
              }
              return tekst;
            } else {
              // Ellers lav en tekst med navn, størrelse, antal og pris
              return ` ${item.navn}, ${oversætStørrelse(
                item.stoerrelse
              )}, Antal: ${item.antal}, Pris: ${item.pris} kr`;
            }
          })
          .join(" og "); // Sammenkæder alle elementer med " og "

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
      <div className="pb-[var(--space-2xl)] mt-10">
        <button onClick={handleTilbage} className="min-knap pb-10 ">
          TILBAGE TIL FORSIDEN
        </button>
      </div>
    </div>
  );
}
