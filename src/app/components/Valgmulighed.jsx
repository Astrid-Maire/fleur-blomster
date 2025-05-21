"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xraaztpjtcujqbtvczfb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Valgmulighed({ onChange }) {
  const [selected, setSelected] = useState("");
  const [preferences, setPreferences] = useState("");
  const [cardMessage, setCardMessage] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
    setSuccess(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!selected) {
      setError("Du skal vælge en anledning.");
      setLoading(false);
      return;
    }

    if (!date) {
      setError("Du skal vælge en dato for afhentning.");
      setLoading(false);
      return;
    }

    const chosenDate = new Date(date);
    if (chosenDate < today) {
      setError("Datoen kan ikke være i fortiden.");
      setLoading(false);
      return;
    }

    if (chosenDate > maxDate) {
      setError("Du kan kun vælge en dato op til to uger frem i tiden.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("ønsker").insert([
        {
          anledning: selected,
          preferences,
          card_message: cardMessage,
          tidspunkt: date,
        },
      ]);

      if (error) throw error;

      setSuccess("Din bestilling er modtaget!");
      setPreferences("");
      setCardMessage("");
      setSelected("");
      setDate("");
    } catch (e) {
      setError("Noget gik galt: " + e.message);
    }

    setLoading(false);
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
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-black border-green-700"
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
              Præferencer (fx blomsterønsker, farver)
            </label>
            <textarea
              id="preferences"
              rows={3}
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="Skriv dine blomsterønsker eller farvepræferencer her..."
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="cardMessage" className="block mb-2 font-semibold">
              Besked til kortet (valgfrit)
            </label>
            <textarea
              id="cardMessage"
              rows={3}
              value={cardMessage}
              onChange={(e) => setCardMessage(e.target.value)}
              placeholder="Skriv en besked til kortet, hvis du ønsker det..."
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="pickupDate" className="block mb-2 font-semibold">
              Vælg dato for afhentning (max 2 uger frem)
            </label>
            <input
              type="date"
              id="pickupDate"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={formatDate(today)}
              max={formatDate(maxDate)}
              className="p-2 border rounded-md"
            />
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 disabled:opacity-50"
      >
        {loading ? "Sender..." : "Send"}
      </button>

      {error && <p className="mt-2 text-red-600">{error}</p>}
      {success && <p className="mt-2 text-green-600">{success}</p>}
    </div>
  );
}
