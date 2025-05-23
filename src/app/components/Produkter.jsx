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
  const [produkter, setProdukter] = useState([]);
  const [indlaeser, setIndlaeser] = useState(true);
  const [fejl, setFejl] = useState(null);

  useEffect(() => {
    const hentProdukter = async () => {
      let query = supabase.from("fleurblomster").select("*");

      if (selectedCategory && selectedCategory !== "alle") {
        query = query.eq("type", selectedCategory);
      }

      const { data, error } = await query;

      if (error) {
        setFejl(error.message);
        setProdukter([]);
      } else {
        setProdukter(data);
      }

      setIndlaeser(false);
    };

    hentProdukter();
  }, [selectedCategory]);

  if (indlaeser) return <p>Indlæser produkter...</p>;
  if (fejl) return <p>Fejl: {fejl}</p>;
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
              className="block w-full aspect-square"
            >
              <img
                src={produkt.images}
                alt={produkt.name}
                className="w-full h-full object-cover"
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
