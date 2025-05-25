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
    <div>
      <h3>Bekræftelse</h3>
      <button onClick={handleTilbage} className="min-knap">
        TILBAGE TIL FORSIDEN
      </button>
    </div>
  );
}
