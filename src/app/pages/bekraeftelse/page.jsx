"use client";

import { useKurv } from "./KurvContext";
import { useRouter } from "next/navigation";

export default function Betaling() {
  const { kurv, nulstilKurv } = useKurv();
  const router = useRouter();

  const handleTilbage = () => {
    nulstilKurv();
    router.push("/");
  };

  return (
    <div
      className="px-[var(--space-3xl)] py-[var(--space-m)]"
      style={{
        backgroundImage: "url('/images/blomster1.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h3 className="text-center">Bekræftigelse</h3>

      <div className="max-w-2xl w-full bg-white bg-opacity-80 rounded-md p-4 shadow-md">
        <h4 className="mb-4 font-semibold">Din bestilling:</h4>

        {kurv.length === 0 ? (
          <p>Din kurv er tom.</p>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {kurv.map((vare) => (
              <li key={vare.id + "-" + vare.stoerrelse}>
                <strong>{vare.navn}</strong> - Størrelse: {vare.stoerrelse} -
                Antal: {vare.antal}
                {vare.info?.præferencer && (
                  <p className="italic text-sm">
                    Præferencer: {vare.info.præferencer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="text-justify px-[var(--space-3xs)] max-w-2xl mx-auto py-[var(--space-s)] leading-relaxed bg-white bg-opacity-80 rounded-md shadow-md">
        Tak for din bestilling. Vi har modtaget din ordre og betalingen er
        gennemført. Du vil snart modtage en bekræftelse på e-mail med alle
        detaljer. Vi går nu i gang med at klargøre din bestilling, og vi sørger
        for, at alt bliver gjort med den samme omhu og kærlighed, som vi lægger
        i alle vores blomster. Har du spørgsmål eller særlige ønsker, er du
        altid velkommen til at kontakte os. Tak fordi du valgte Fleur – vi
        glæder os til at sende blomstrende glæde din vej.
      </p>

      <button onClick={handleTilbage} className="min-knap">
        TILBAGE TIL FORSIDEN
      </button>
    </div>
  );
}
