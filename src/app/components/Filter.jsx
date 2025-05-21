"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase client
const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function Filter({ selected, onChange }) {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTypes() {
      const { data, error } = await supabase
        .from("fleurblomster")
        .select("type")
        .neq("type", null);

      if (error) {
        console.error("Fejl ved hentning af typer:", error);
      } else {
        // Fjern dubletter og trim whitespace
        const uniqueTypes = Array.from(
          new Set(data.map((item) => item.type.trim()))
        );
        setTypes(uniqueTypes);
      }
      setLoading(false);
    }

    fetchTypes();
  }, []);

  return (
    <div className="mb-6">
      <label htmlFor="filter" className="block mb-2 font-semibold">
        Vælg kategori:
      </label>
      {loading ? (
        <p>Indlæser kategorier...</p>
      ) : (
        <select
          id="filter"
          value={selected}
          onChange={(e) => onChange(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="alle">Alle</option>
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
