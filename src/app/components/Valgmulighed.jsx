"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useKurv } from "./KurvContext";

export default function Valgmulighed({ onChange }) {
  const router = useRouter(); // Initialiserer router til navigation
  const { tilføjTilKurv } = useKurv(); // Henter funktionen til at tilføje varer til kurven

  // States til at holde styr på valgt anledning, præferencer og fejlbesked
  const [selected, setSelected] = useState("");
  const [preferences, setPreferences] = useState("");
  const [error, setError] = useState(null);

  const anledninger = [
    { label: "FØDSELSDAG", value: "birthday" },
    { label: "BRYLLUP", value: "wedding" },
    { label: "BEGRAVELSE", value: "funeral" },
    { label: "FØDSEL / NYFØDT", value: "newborn" },
    { label: "VALENTINSDAG", value: "valentines" },
    { label: "MORS DAG", value: "mothersday" },
    { label: "TAK", value: "thanks" },
    { label: "GOD BEDRING", value: "getwell" },
    { label: "UNDSKYLD", value: "sorry" },
    { label: "BARE FORDI", value: "justbecause" },
  ];

  // Funktion til at håndtere valg af anledning
  const handleSelect = (value) => {
    // Hvis man klikker på allerede valgt anledning, fjernes valget
    const newValue = selected === value ? "" : value;
    setSelected(newValue); // Opdaterer valgt anledning
    if (onChange) onChange(newValue); // Kalder evt. callback for ændring
    if (!newValue) {
      setPreferences(""); // Nulstil præferencer hvis ingen anledning valgt
    }
    setError(null); // Ryd fejlbesked ved nyt valg
  };

  // Funktion til at håndtere submit (når brugeren klikker SEND)
  const handleSubmit = () => {
    setError(null); // Ryd fejlbesked

    if (!selected) {
      setError("Du skal vælge en anledning."); // Fejl hvis ingen anledning valgt
      return;
    }

    // Opretter et vare-objekt med valgt anledning og evt. præferencer
    const anledningVare = {
      id: "anledning-" + selected, // ID med prefix for anledninger
      navn:
        "Anledning: " + anledninger.find((a) => a.value === selected)?.label, // Navnet til visning
      stoerrelse: "-", // Størrelse ikke relevant her
      pris: 0, // Pris er 0, da anledning ikke koster noget
      antal: 1, // Antal 1
      info: {
        præferencer: preferences, // Gemmer brugerens præferencer
      },
    };

    tilføjTilKurv(anledningVare); // Tilføjer anledning til kurven

    router.push("/pages/beslutning?flow=uden-betaling"); // Navigerer til næste side uden betaling
  };

  return (
    <div>
      <h5 className="text-xl mb-4">VÆLG ANLEDNING</h5>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {anledninger.map((anledning) => (
          <button
            key={anledning.value}
            type="button"
            onClick={() => handleSelect(anledning.value)} // Vælger anledning ved klik
            className={`w-full text-left flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
              selected === anledning.value
                ? "btn-selected" // CSS-klasse hvis valgt
                : "border-[var(--mørkegrøn)]" // Almindelig kant hvis ikke valgt
            }`}
          >
            <span>{anledning.label}</span> {/* Viser anledningens label */}
          </button>
        ))}
      </div>
      {/* Hvis en anledning er valgt, vis tekstfelt til præferencer */}
      {selected && (
        <div className="space-y-6 mb-4">
          <div>
            <label htmlFor="preferences" className="block mb-2 font-semibold">
              PRÆFERENCER (fx blomsterønsker, farver)
            </label>
            <textarea
              id="preferences"
              rows={3}
              value={preferences} // Værdi fra state
              onChange={(e) => setPreferences(e.target.value)} // Opdaterer state ved skrivning
              placeholder="Skriv dine blomsterønsker eller farvepræferencer her..."
              className="w-full custom-border rounded-md"
            />
          </div>
        </div>
      )}
      <button onClick={handleSubmit} className="min-knap">
        SEND
      </button>
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
}
