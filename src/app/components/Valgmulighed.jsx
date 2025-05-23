"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Valgmulighed({ onChange }) {
  const router = useRouter();

  const [selected, setSelected] = useState("");
  const [preferences, setPreferences] = useState("");
  const [cardMessage, setCardMessage] = useState("");
  const [date, setDate] = useState("");
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

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 14);

  const formatDate = (d) => d.toISOString().split("T")[0];

  const handleSelect = (value) => {
    const newValue = selected === value ? "" : value;
    setSelected(newValue);
    if (onChange) onChange(newValue);
    if (!newValue) {
      setPreferences("");
      setCardMessage("");
      setDate("");
    }
    setError(null);
  };

  const handleSubmit = () => {
    setError(null);
    if (!selected) {
      setError("Du skal vælge en anledning.");
      return;
    }

    // Naviger til /beslutning med data i URL
    const query = new URLSearchParams({
      anledning: selected,
      preferences,
      cardMessage,
      date,
    }).toString();

    router.push(`/pages/beslutning?${query}`);
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
