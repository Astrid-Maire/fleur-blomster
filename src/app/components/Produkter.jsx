"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Knap from "@/app/components/Knap";

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function ProductList({ selectedCategory }) {
  // State til produkter, loading-tilstand og fejlbesked
  const [produkter, setProdukter] = useState([]);
  const [indlaeser, setIndlaeser] = useState(true);
  const [fejl, setFejl] = useState(null);

  // useEffect kører hver gang selectedCategory ændres
  useEffect(() => {
    const hentProdukter = async () => {
      let query = supabase.from("fleurblomster").select("*"); // Hent alle produkter

      // Hvis kategori valgt og ikke "alle", filtrer på type
      if (selectedCategory && selectedCategory !== "alle") {
        query = query.eq("type", selectedCategory);
      }

      // Kør forespørgslen til Supabase
      const { data, error } = await query;

      // Hvis fejl, sæt fejlstate og ryd produkter
      if (error) {
        setFejl(error.message);
        setProdukter([]);
      } else {
        // Ellers sæt produkterne til dataen fra DB
        setProdukter(data);
      }

      setIndlaeser(false); // Stop loading når data er hentet
    };

    hentProdukter(); // Kald funktionen for at hente produkter
  }, [selectedCategory]); // Kører på ændring af selectedCategory

  // Hvis stadig loading, vis besked
  if (indlaeser) return <p>Indlæser produkter...</p>;

  // Hvis fejl, vis fejlbesked
  if (fejl) return <p>Fejl: {fejl}</p>;

  // Hvis ingen produkter fundet, vis besked
  if (produkter.length === 0) return <p>Ingen produkter fundet.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-[var(--space-xl)]">
      {produkter.map((produkt) => (
        <div
          key={produkt.id}
          className="custom-border p-4 shadow flex flex-col justify-between"
          style={{ minHeight: "450px" }}
        >
          <div>
            <div className="h9 uppercase text-sm">{produkt.name}</div>
            <Link
              href={`/pages/shop/${produkt.id}`}
              className="block w-full aspect-square overflow-hidden group rounded-md"
            >
              <img
                src={
                  Array.isArray(produkt.images)
                    ? produkt.images[0]
                    : produkt.images
                }
                alt={produkt.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-1"
              />
            </Link>
            <p className="mt-4 text-justify">{produkt.kortbeskrives}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="mt-4 pb-3 text-center">
              {produkt.price_s} kr&nbsp;&nbsp;&nbsp;
              {produkt.price_m} kr&nbsp;&nbsp;&nbsp;
              {produkt.price_l} kr
            </p>
            <Knap produkt={produkt} />
          </div>
        </div>
      ))}
    </div>
  );
}
