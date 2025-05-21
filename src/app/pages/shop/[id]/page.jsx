"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Back from "@/app/components/Back";
import Link from "next/link";

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function ProduktDetalje() {
  const { id } = useParams();
  const [blomst, setBlomst] = useState(null);

  useEffect(() => {
    async function hentBlomst() {
      if (!id || typeof id !== "string") return;

      const { data } = await supabase
        .from("fleurblomster")
        .select("*")
        .eq("id", id)
        .single();

      setBlomst(data);
    }

    hentBlomst();
  }, [id]);

  // Hvis data ikke er klar endnu, returner ingenting
  if (!blomst) return null;

  return (
    <div>
      <Back />

      <div className="px-[var(--space-xl)] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          {blomst.images && (
            <img
              src={blomst.images}
              alt={blomst.name}
              className="w-full h-auto max-h-[600px] object-cover"
            />
          )}
        </div>
        <div>
          <h4 className=" font-bold uppercase">{blomst.name}</h4>
          <p className=" mb-4 text-justify">{blomst.description}</p>
          <p className=" mb-4 text-justify">{blomst.Pleje}</p>
          <ul className="space-y-1 mt-6 max-w-xs">
            <li className="flex justify-between w-full ">
              <span>Lille:</span>
              <span>{blomst.price_s} kr</span>
            </li>
            <li className="flex justify-between w-full ">
              <span>Mellem:</span>
              <span>{blomst.price_m} kr</span>
            </li>
            <li className="flex justify-between w-full  ">
              <span>Stor:</span>
              <span>{blomst.price_l} kr</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
