"use client";

import { useState } from "react";
import { useKurv } from "./KurvContext";

export default function Knap({ produkt }) {
  const [valgtStoerrelse, setValgtStoerrelse] = useState("");
  const { tilføjTilKurv } = useKurv();

  const handleClick = () => {
    if (!valgtStoerrelse) return;

    // ✅ Antal skal IKKE med – det håndteres i KurvContext
    tilføjTilKurv({
      id: produkt.id,
      navn: produkt.name, // gem navn fra Supabase
      billede: produkt.images, // gem billede fra Supabase
      stoerrelse: valgtStoerrelse,
    });
  };

  return (
    <div>
      <select
        value={valgtStoerrelse}
        onChange={(e) => setValgtStoerrelse(e.target.value)}
        className="border px-2 py-1"
      >
        <option value="">Vælg størrelse</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>

      <button
        onClick={handleClick}
        disabled={!valgtStoerrelse}
        className={`ml-2 px-4 py-2 text-white ${
          valgtStoerrelse ? "bg-green-600" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Læg i kurv
      </button>
    </div>
  );
}
