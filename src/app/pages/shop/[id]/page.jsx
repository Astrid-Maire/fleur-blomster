"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Back from "@/app/components/Back";
import Link from "next/link";
import Knap from "@/app/components/Knap";

const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "din-anonyme-offentlige-nøgle-her"
);

export default function ProduktDetalje() {
  const { id } = useParams(); // Henter produkt-id fra URL
  const [blomst, setBlomst] = useState(null); // Det valgte produkt
  const [forslag, setForslag] = useState([]); // Andre produkter med samme type

  useEffect(() => {
    async function hentBlomst() {
      if (!id || typeof id !== "string") return;

      // Henter det valgte produkt fra Supabase
      const { data: blomstData } = await supabase
        .from("fleurblomster")
        .select("*")
        .eq("id", id)
        .single();

      setBlomst(blomstData);

      // Hvis der blev fundet et produkt, hentes lignende produkter
      if (blomstData) {
        const { data: forslagData } = await supabase
          .from("fleurblomster")
          .select("*")
          .eq("type", blomstData.type)
          .neq("id", id) // Ekskluderer det nuværende produkt
          .limit(3); // Viser op til 3 forslag

        setForslag(forslagData);
      }
    }

    hentBlomst(); // Kalder funktionen ved sideindlæsning
  }, [id]);

  // Hvis produktet ikke er indlæst endnu, vis intet
  if (!blomst) return null;

  return (
    <div className="px-4 lg:px-[var(--space-xl)]">
      <Back />
      <div className="mx-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="overflow-hidden rounded-md group">
          {blomst.images && (
            <img
              src={blomst.images}
              alt={blomst.name}
              className="w-full h-auto max-h-[600px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
        <div
          className="
            flex overflow-x-auto gap-6 py-2
            sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:flex-none
            lg:grid-cols-3
          "
        >
          {forslag.map((item) => (
            <Link
              key={item.id}
              href={`/pages/shop/${item.id}`}
              className="
                group min-w-[300px] sm:min-w-auto
                custom-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between
              "
            >
              <div className="p-1">
                <div className="h7 font-bold text-lg mb-2 uppercase">
                  {item.name}
                </div>
              </div>
              <div className="overflow-hidden aspect-square w-full">
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:translate-y-1"
                />
              </div>
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
