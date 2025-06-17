"use client";
import { useKurv } from "./KurvContext";
import { useRouter } from "next/navigation";

export default function Betaling() {
  // Hent kurv og nulstil funktion fra kontekst
  const { kurv, nulstilKurv } = useKurv();
  const router = useRouter();

  // Funktion til at nulstille kurven og navigere tilbage til forsiden
  const handleTilbage = () => {
    nulstilKurv(); // Tøm kurven
    router.push("/"); // Naviger til forsiden
  };

  return (
    <div>
      <h3>Bekræftelse</h3>
      <button onClick={handleTilbage} className="min-knap">
        TILBAGE TIL FORSIDEN
      </button>
    </div>
  );
}
