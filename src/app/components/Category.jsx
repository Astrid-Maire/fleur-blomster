"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Knap from "@/app/components/Knap";

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function Produkter({ selectedCategory }) {
  const [produkter, setProdukter] = useState([]);
  const [indlaeser, setIndlaeser] = useState(true);
  const [fejl, setFejl] = useState(null);

  useEffect(() => {
    const hentProdukter = async () => {
      let query = supabase.from("fleurblomster").select("*");

      if (selectedCategory && selectedCategory !== "alle") {
        query = query.eq("type", selectedCategory); // 🔁 Skiftet fra "category" til "type"
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
