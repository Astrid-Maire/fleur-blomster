"use client";
import { useState } from "react";
import { useKurv } from "./KurvContext";

export default function Knap({ produkt }) {
  const [valgtStoerrelse, setValgtStoerrelse] = useState(""); // Gemmer valgt størrelse fra dropdown
  const { tilføjTilKurv } = useKurv(); // Henter funktion fra KurvContext til at tilføje varer

  const handleClick = () => {
    // Hvis der ikke er valgt størrelse, gør ingenting
    if (!valgtStoerrelse) return;

    // Vælg pris ud fra valgt størrelse
    const pris =
      valgtStoerrelse === "S"
        ? produkt.price_s
        : valgtStoerrelse === "M"
        ? produkt.price_m
        : produkt.price_l;

    // Tilføj produkt til kurv med de relevante oplysninger
    tilføjTilKurv({
      id: produkt.id,
      navn: produkt.name,
      stoerrelse: valgtStoerrelse,
      pris,
      antal: 1,
    });

    // Nulstil valg efter tilføjelse
    setValgtStoerrelse("");
  };

  return (
    <div className="flex items-center gap-2 font-libre">
      {/* Dropdown til valg af størrelse */}
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

      {/* Knap til at tilføje til kurv */}
      <button
        onClick={handleClick}
        disabled={!valgtStoerrelse} // Deaktiveret indtil en størrelse er valgt
        className={`px-3 py-1 rounded text-[var(--baggrundsfarve)] white ${
          valgtStoerrelse ? "min-knap" : "min-knap1" // Brug forskellig styling alt efter om der er valgt størrelse
        }`}
      >
        {valgtStoerrelse ? "LÆG I KURV" : "VÆLG STØRRELSE"}{" "}
        {/* Skift tekst afhængigt af om der er valgt størrelse */}
      </button>
    </div>
  );
}
