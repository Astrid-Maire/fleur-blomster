"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase opsætning
const SUPABASE_URL = "https://xraaztpjtcujqbtvczfb.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function Produkter({ id }) {
  const [blomst, setBlomst] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function hentBlomst() {
      const { data, error } = await supabase
        .from("fleurblomster")
        .select("*")
        .eq("id", id)
        .single();

      if (error) setError(error.message);
      else setBlomst(data);

      setLoading(false);
    }

    if (id) {
      hentBlomst();
    }
  }, [id]);

  if (loading) return <p className="text-center mt-10">Indlæser...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-600">Fejl: {error}</p>;
  if (!blomst) return <p className="text-center mt-10">Blomst ikke fundet</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={blomst.images}
        alt={blomst.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{blomst.name}</h1>
      <p className="text-gray-700 mb-4">{blomst.description}</p>
      <p className="text-xl font-semibold text-pink-600">{blomst.price_m} kr</p>
    </div>
  );
}
