"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function Filter({ selected, onChange }) {
  const [types, setTypes] = useState([]); // Liste over unikke kategorier
  const [loading, setLoading] = useState(true); // Laster-status

  useEffect(() => {
    // Funktion der henter unikke typer fra Supabase
    async function fetchTypes() {
      const { data, error } = await supabase
        .from("fleurblomster") // Tabelnavn
        .select("type") // Kun feltet 'type'
        .neq("type", null); // Undgår null-værdier

      if (error) {
        console.error("Fejl ved hentning af typer:", error);
      } else {
        // Fjerner dubletter og trims whitespace
        const uniqueTypes = Array.from(
          new Set(data.map((item) => item.type.trim()))
        );
        setTypes(uniqueTypes);
      }
      setLoading(false); // Marker at data er hentet
    }

    fetchTypes(); // Kalder funktionen én gang ved mount
  }, []);

  return (
    <div className="w-80 pb-5 md:pb-0">
      {/* Label til dropdown */}
      <label
        htmlFor="filter"
        className="block mb-2 pt-2 md:pt-0 font-semibold "
      >
        VÆLG KATEGORI:
      </label>

      {/* Hvis data er ved at blive hentet, vis loader */}
      {loading ? (
        <p>Indlæser kategorier...</p>
      ) : (
        // Dropdown til at vælge en kategori
        <select
          id="filter"
          value={selected} // Valgt værdi
          onChange={(e) => onChange(e.target.value)} // hvis category ændring sig
          className={`custom-border p-2 w-full appearance-none ${
            selected !== "ALLE"
              ? "bg-[var(--baggrundsfarve)] "
              : "bg-[var(--baggrundsfarve)]"
          }`}
        >
          <option value="alle">Alle</option>
          {/* Genererer option-elementer for hver unik type */}
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
