"use client";

import { useState } from "react";
import { useKurv } from "./KurvContext";

export default function Knap({ produkt }) {
  const [valgtStoerrelse, setValgtStoerrelse] = useState("");
  const { tilføjTilKurv } = useKurv();

  const handleClick = () => {
    if (!valgtStoerrelse) return; // Skal aldrig ske pga disabled knap

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

    setValgtStoerrelse("");
  };

  return (
    <div className="flex items-center gap-2 font-libre">
      <select
        value={valgtStoerrelse}
        onChange={(e) => setValgtStoerrelse(e.target.value)}
        className="custom-border p-1"
      >
        <option value="">VÆLG STØRRELSE</option>
        <option value="S">LILLE - {produkt.price_s} kr</option>
        <option value="M">MELLEM - {produkt.price_m} kr</option>
        <option value="L">STOR - {produkt.price_l} kr</option>
      </select>

      <button
        onClick={handleClick}
        disabled={!valgtStoerrelse}
        className={`px-3 py-1 rounded text-[var(--baggrundsfarve)] white ${
          valgtStoerrelse ? "min-knap" : "min-knap1"
        }`}
      >
        {valgtStoerrelse ? "LÆG I KURV" : "VÆLG STØRRELSE"}
      </button>
    </div>
  );
}
