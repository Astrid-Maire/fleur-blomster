"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Back from "@/app/components/Back";
import Link from "next/link";
import Knap from "@/app/components/Knap";

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function ProduktDetalje() {
  const { id } = useParams();
  const [blomst, setBlomst] = useState(null);
  const [forslag, setForslag] = useState([]);

  useEffect(() => {
    async function hentBlomst() {
      if (!id || typeof id !== "string") return;

      const { data: blomstData } = await supabase
        .from("fleurblomster")
        .select("*")
        .eq("id", id)
        .single();

      setBlomst(blomstData);

      if (blomstData) {
        const { data: forslagData } = await supabase
          .from("fleurblomster")
          .select("*")
          .eq("type", blomstData.type)
          .neq("id", id)
          .limit(3);

        setForslag(forslagData);
      }
    }

    hentBlomst();
  }, [id]);

  if (!blomst) return null;

  return (
    <div className="px-4  lg:px-[var(--space-xl)]">
      <Back />

      <div className="mx-auto py-6  grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="">
          {blomst.images && (
            <img
              src={blomst.images}
              alt={blomst.name}
              className="w-full h-auto max-h-[600px] object-cover "
            />
          )}
        </div>
        <div>
          <h4 className="text-2xl font-bold uppercase mb-2">{blomst.name}</h4>
          <p className="mb-4 text-justify">{blomst.description}</p>
          <p className="mb-4 text-justify">{blomst.Pleje}</p>
          <ul className="space-y-2 mt-6 max-w-xs mb-6">
            <li className="flex justify-between border-b pb-1">
              <span>Lille:</span>
              <span>{blomst.price_s} kr</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span>Mellem:</span>
              <span>{blomst.price_m} kr</span>
            </li>
            <li className="flex justify-between border-b pb-1">
              <span>Stor:</span>
              <span>{blomst.price_l} kr</span>
            </li>
          </ul>
          <div className="flex justify-start">
            <Knap produkt={blomst} />
          </div>
        </div>
      </div>

      <div className="py-7">
        <h4 className="font-semibold uppercase mb-4">
          Du kunne måske også lide
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forslag.map((item) => (
            <Link
              key={item.id}
              href={`/produkt/${item.id}`}
              className="block custom-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="p-1">
                <h7 className="font-bold text-lg mb-2 uppercase">
                  {item.name}
                </h7>
              </div>
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-80 md:h-100 object-cover"
              />
              <div className="p-4">
                <p className="text-sm mb-1">Lille: {item.price_s} kr</p>
                <p className="text-sm mb-1">Mellem: {item.price_m} kr</p>
                <p className="text-sm">Stor: {item.price_l} kr</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
