"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js"; // Supabase til databasekommunikation
import { useKurv } from "@/app/components/KurvContext"; // Henter kurv (indkøbskurv) fra context
import { useRouter } from "next/navigation"; // Til navigation efter formularafsendelse
import Back2 from "@/app/components/Back2"; // Komponent til tilbage-knap

// Initialiserer Supabase-klienten med URL og anonym nøgle
const supabase = createClient(
  "https://xraaztpjtcujqbtvczfb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA"
);

export default function BestilIndhold({ flow }) {
  // Initial tilstand for formularfelterne
  const [formData, setFormData] = useState({
    fornavn: "",
    efternavn: "",
    email: "",
    telefon: "",
    afhentningsdato: "",
    korttekst: "",
  });

  const { kurv } = useKurv(); // Henter varer fra kurv
  const [besked, setBesked] = useState(""); // Til feedbackbesked til bruger
  const router = useRouter(); // Router til navigation

  // Når formularen indsendes
  async function handleSubmit(e) {
    e.preventDefault();

    // Finder første vare i kurv, som starter med "anledning-"
    const anledningItem = kurv.find((item) =>
      item.id?.startsWith("anledning-")
    );

    const anledning = anledningItem?.navn || "";
    const preferences = anledningItem?.info?.præferencer || "";

    // Kombinerer brugerens oplysninger med kurvens data
    const samletKurv = {
      ...formData,
      anledning,
      preferences,
      kurv,
    };

    // Indsætter ordre i "orders"-tabellen i Supabase
    const { data, error } = await supabase.from("orders").insert([samletKurv]);

    if (error) {
      console.error("Fejl ved bestilling:", JSON.stringify(error, null, 2));
      setBesked("Fejl ved bestilling. Prøv igen.");
    } else {
      setBesked("Din bestilling er sendt!");

      // Nulstiller formular
      setFormData({
        fornavn: "",
        efternavn: "",
        email: "",
        telefon: "",
        afhentningsdato: "",
        korttekst: "",
      });

      // Navigerer afhængigt af flow-parameteren
      if (flow === "med-betaling") {
        router.push("/pages/betaling");
      } else {
        router.push("/pages/bekraeftelse");
      }
    }
  }

  return (
    <div className="py-4 px-4 sm:py-[var(--space-m)] sm:px-[var(--space-33xl)] relative">
      <div className="relative z-10 sm:absolute sm:left-5 sm:top-20 sm:mb-0">
        <Back2 />
      </div>
      <div className="mx-auto px-4 py-4 sm:px-[var(--space-22xl)] sm:py-[var(--space-l)] bg-[var(--lysegrøn)] rounded-xl shadow-md relative z-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Felter til brugerens oplysninger */}
          <input
            name="fornavn"
            placeholder="Fornavn"
            value={formData.fornavn}
            onChange={(e) =>
              setFormData({ ...formData, fornavn: e.target.value })
            }
            className="rounded-lg p-2 w-full bg-[var(--baggrundsfarve)]"
            required
          />
          <input
            name="efternavn"
            placeholder="Efternavn"
            value={formData.efternavn}
            onChange={(e) =>
              setFormData({ ...formData, efternavn: e.target.value })
            }
            className="rounded-lg p-2 w-full bg-[var(--baggrundsfarve)]"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="rounded-lg p-2 w-full bg-[var(--baggrundsfarve)]"
            required
          />
          <input
            name="telefon"
            placeholder="Telefonnummer"
            value={formData.telefon}
            onChange={(e) =>
              setFormData({ ...formData, telefon: e.target.value })
            }
            className="rounded-lg p-2 w-full bg-[var(--baggrundsfarve)]"
            required
          />
          {/* Afhentningsdato max til de næste 14 dage frem */}
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
            className="rounded-lg p-2 w-full bg-[var(--baggrundsfarve)]"
            required
          />
          {/* Korttekst */}
          <textarea
            name="korttekst"
            placeholder="Tekst til kortet (valgfrit)"
            value={formData.korttekst}
            onChange={(e) =>
              setFormData({ ...formData, korttekst: e.target.value })
            }
            className="rounded-lg p-2 w-full bg-[var(--baggrundsfarve)]"
          />
          <p className="text-justify">
            Hos Fleur Blomster ønsker vi, at du bliver helt tilfreds med dine
            blomster. Da vi arbejder med ferskvarer som blomster og planter,
            gælder fortrydelsesretten ikke for disse produkter, da de hurtigt
            kan blive forringet. Dette betyder, at du ikke kan fortryde dit køb,
            når du bestiller blomster, der er specielt udvalgt eller bundet til
            dig.
          </p>
          <p className="text-justify">
            Skulle du modtage en beskadiget ordre eller være utilfreds med
            noget, står vi klar til at hjælpe. Kontakt os gerne, så vi kan finde
            en løsning, der gør dig glad.
          </p>
          {/* Send-knap */}
          <button type="submit" className="min-knap">
            SEND BESTILLING
          </button>
        </form>
        {/* Feedbackbesked efter submission */}
        {besked && <p className="mt-4 text-center">{besked}</p>}
      </div>
    </div>
  );
}
