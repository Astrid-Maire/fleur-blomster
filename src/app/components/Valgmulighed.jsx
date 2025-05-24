"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useKurv } from "./KurvContext";

export default function Valgmulighed({ onChange }) {
  const router = useRouter();
  const { tilføjTilKurv } = useKurv();

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

  const handleSelect = (value) => {
    const newValue = selected === value ? "" : value;
    setSelected(newValue);
    if (onChange) onChange(newValue);
    if (!newValue) {
      setPreferences("");
    }
    setError(null);
  };

  const handleSubmit = () => {
    setError(null);
    if (!selected) {
      setError("Du skal vælge en anledning.");
      return;
    }

    // Opret anledning vare med præferencer
    const anledningVare = {
      id: "anledning-" + selected,
      navn:
        "Anledning: " + anledninger.find((a) => a.value === selected)?.label,
      stoerrelse: "-",
      pris: 0,
      antal: 1,
      info: {
        præferencer: preferences,
      },
    };

    tilføjTilKurv(anledningVare);

    router.push("/pages/beslutning");
  };

  return (
    <div>
      <h5 className="text-xl mb-4">VÆLG ANLEDNING</h5>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {anledninger.map((anledning) => (
          <button
            key={anledning.value}
            type="button"
            onClick={() => handleSelect(anledning.value)}
            className={`w-full text-left flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
              selected === anledning.value
                ? "btn-selected"
                : "border-[var(--mørkegrøn)]"
            }`}
          >
            <span>{anledning.label}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="space-y-6 mb-4">
          <div>
            <label htmlFor="preferences" className="block mb-2 font-semibold">
              PRÆFERENCER (fx blomsterønsker, farver)
            </label>
            <textarea
              id="preferences"
              rows={3}
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
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
