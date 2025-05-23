"use client";

import { useState } from "react";
import { useKurv } from "./KurvContext";

export default function Knap({ produkt }) {
  const [valgtStoerrelse, setValgtStoerrelse] = useState("");
  const { tilføjTilKurv } = useKurv();

  const handleClick = () => {
    if (!valgtStoerrelse) return;

    const pris =
      valgtStoerrelse === "S"
        ? produkt.price_s
        : valgtStoerrelse === "M"
        ? produkt.price_m
        : produkt.price_l;

    tilføjTilKurv({
      id: produkt.id,
      navn: produkt.name,
      stoerrelse: valgtStoerrelse,
      pris,
      antal: 1,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={valgtStoerrelse}
        onChange={(e) => setValgtStoerrelse(e.target.value)}
        className="border p-1 rounded"
      >
        <option value="">Vælg størrelse</option>
        <option value="S">Lille - {produkt.price_s} kr</option>
        <option value="M">Mellem - {produkt.price_m} kr</option>
        <option value="L">Stor - {produkt.price_l} kr</option>
      </select>

      <button
        onClick={handleClick}
        disabled={!valgtStoerrelse}
        className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50"
      >
        LÆG I KURV
      </button>
    </div>
  );
}
