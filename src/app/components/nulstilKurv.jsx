"use client";

import { useKurv } from "./KurvContext"; // Juster sti
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
      style={
        {
          /* dine styles */
        }
      }
    >
      <h3>Bekræftelse</h3>
      {/* Vis kurvens indhold her hvis ønsket */}

      <button onClick={handleTilbage} className="min-knap">
        TILBAGE TIL FORSIDEN
      </button>
    </div>
  );
}
