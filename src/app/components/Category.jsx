"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js"; // Supabase-klient til databasekald
import Link from "next/link";
import Knap from "@/app/components/Knap"; // Genbrugt “Læg i kurv”-knap (eller lign.)

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

// Funktionen modtager den valgte kategori som prop
export default function Produkter({ selectedCategory }) {
  // State til at gemme produkterne
  const [produkter, setProdukter] = useState([]);
  // State til at holde styr på om vi stadig loader data
  const [indlaeser, setIndlaeser] = useState(true);
  // State til fejlbesked, hvis der opstår fejl ved hentning
  const [fejl, setFejl] = useState(null);

  // useEffect kører når komponenten mountes eller når selectedCategory ændres
  useEffect(() => {
    const hentProdukter = async () => {
      // Start med at lave en forespørgsel på alle produkter i tabellen "fleurblomster"
      let query = supabase.from("fleurblomster").select("*");

      // Hvis brugeren har valgt en specifik kategori (ikke "alle"), filtreres der på den kategori
      if (selectedCategory && selectedCategory !== "alle") {
        query = query.eq("type", selectedCategory);
      }

      // Udfør forespørgslen
      const { data, error } = await query;

      // Hvis der er en fejl, opdaterer vi fejl-state og tømmer produkter
      if (error) {
        setFejl(error.message);
        setProdukter([]);
      } else {
        // Ellers gemmes de hentede produkter i state
        setProdukter(data);
      }

      // Loading er færdig
      setIndlaeser(false);
    };

    hentProdukter();
  }, [selectedCategory]); // Effekt afhænger af selectedCategory

  // Hvis vi stadig loader data, vises loading-tekst
  if (indlaeser) return <p>Indlæser produkter...</p>;
  // Hvis der er fejl, vises fejlbesked
  if (fejl) return <p>Fejl: {fejl}</p>;
  // Hvis ingen produkter fundet, vis besked
  if (produkter.length === 0) return <p>Ingen produkter fundet.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {produkter.map((produkt) => (
        <div key={produkt.id} className="border p-4 shadow">
          <div className="uppercase text-sm">{produkt.name}</div>
          <Link href={`/pages/shop/${produkt.id}`}>
            <img
              src={produkt.images}
              alt={produkt.name}
              className="w-full aspect-square object-cover rounded"
            />
          </Link>
          <p className="mt-4 text-justify">{produkt.kortbeskrives}</p>
          <p className="font-bold mt-2">
            {produkt.price_s} kr {produkt.price_m} kr {produkt.price_l} kr
          </p>
          <Knap produkt={produkt} />
        </div>
      ))}
    </div>
  );
}
