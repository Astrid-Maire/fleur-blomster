"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useKurv } from "@/app/components/KurvContext";
import { useRouter } from "next/navigation";

// Supabase setup
const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function BestilSide() {
  const [formData, setFormData] = useState({
    fornavn: "",
    efternavn: "",
    email: "",
    telefon: "",
    afhentningsdato: "",
    korttekst: "",
  });

  const { kurv } = useKurv();
  const [besked, setBesked] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    // Find "anledning" fra kurven
    const anledningItem = kurv.find((item) =>
      item.id?.startsWith("anledning-")
    );
    const anledning = anledningItem?.navn || "";
    const preferences = anledningItem?.info?.præferencer || "";

    const samletKurv = {
      ...formData,
      anledning,
      preferences,
      kurv,
    };

    const { data, error } = await supabase.from("orders").insert([samletKurv]);

    if (error) {
      console.error("Fejl ved bestilling:", JSON.stringify(error, null, 2));
      setBesked("Fejl ved bestilling. Prøv igen.");
    } else {
      setBesked("Din bestilling er sendt!");
      setFormData({
        fornavn: "",
        efternavn: "",
        email: "",
        telefon: "",
        afhentningsdato: "",
        korttekst: "",
      });
      router.push("/pages/bekraeftelse");
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h3 className="text-2xl">BESTIL BLOMSTER</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="fornavn"
          placeholder="Fornavn"
          value={formData.fornavn}
          onChange={(e) =>
            setFormData({ ...formData, fornavn: e.target.value })
          }
          className="border p-2 w-full"
          required
        />
        <input
          name="efternavn"
          placeholder="Efternavn"
          value={formData.efternavn}
          onChange={(e) =>
            setFormData({ ...formData, efternavn: e.target.value })
          }
          className="border p-2 w-full"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <input
          name="telefon"
          placeholder="Telefonnummer"
          value={formData.telefon}
          onChange={(e) =>
            setFormData({ ...formData, telefon: e.target.value })
          }
          className="border p-2 w-full"
          required
        />
        <input
          type="date"
          name="afhentningsdato"
          value={formData.afhentningsdato}
          min={new Date().toISOString().split("T")[0]}
          max={
            new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split("T")[0]
          }
          onChange={(e) =>
            setFormData({ ...formData, afhentningsdato: e.target.value })
          }
          className="border p-2 w-full"
          required
        />
        <textarea
          name="korttekst"
          placeholder="Tekst til kortet (valgfrit)"
          value={formData.korttekst}
          onChange={(e) =>
            setFormData({ ...formData, korttekst: e.target.value })
          }
          className="border p-2 w-full"
        />

        <button type="submit" className="min-knap">
          Send bestilling
        </button>
      </form>

      {besked && <p className="mt-4 text-center">{besked}</p>}
    </div>
  );
}
