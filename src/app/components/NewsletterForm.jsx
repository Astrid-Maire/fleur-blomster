"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xraaztpjtcujqbtvczfb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function NewsletterForm({ onSuccess }) {
  // State til input felter
  const [formData, setFormData] = useState({ name: "", email: "" });
  // State til at vise om formularen loader (ventetid)
  const [loading, setLoading] = useState(false);
  // State til eventuelle fejlbeskeder
  const [error, setError] = useState("");

  // Funktion til at opdatere formData når brugeren skriver i inputfelterne
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Funktion der håndterer formularens submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Forhindrer siden i at reloade ved submit
    setLoading(true); // Sæt loading til true for at vise at vi arbejder
    setError(""); // Nulstil tidligere fejl

    // Simpel validering: tjek at navn og email er udfyldt
    if (!formData.name || !formData.email) {
      setError("Du skal venligst udfyld både navn og email.");
      setLoading(false);
      return; // Stop funktionen hvis fejl
    }

    // Forsøg at indsætte data i Supabase-tabellen "newsletter_signups"
    const { data, error } = await supabase.from("newsletter_signups").insert([
      {
        name: formData.name,
        email: formData.email,
      },
    ]);

    if (error) {
      // Hvis der opstår en fejl ved indsættelsen, log og vis fejl til bruger
      console.error("Supabase insert error:", error);
      setError("Noget gik galt. Prøv igen senere.");
    } else {
      // Hvis indsættelsen lykkedes, nulstil formularen
      setFormData({ name: "", email: "" });
      // Hvis onSuccess funktion er sendt som prop, kald den (f.eks. til at lukke popup eller vise takke-besked)
      if (onSuccess) onSuccess();
    }

    setLoading(false); // Stop loading uanset succes eller fejl
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        fixed inset-0 z-[1000] flex items-center justify-center
        px-[var(--space-l)] p-[var(--space-m)]
        bg-transparent
      "
    >
      <div
        className="
          rounded-xl text-center p-8 w-full max-w-md
          bg-[url('/images/blomster.svg')] bg-no-repeat bg-center bg-cover
        "
      >
        <h6 className="text-4xl pb-[var(--space-xl)] w-full pt-[var(--space-m)] uppercase">
          Tilmeld dig vores nyhedsbrev
        </h6>
        {error && <p className="text-red-600 mb-3">{error}</p>}
        <div className="max-w-full">
          <div className="pb-[var(--space-s)]">
            <input
              type="text"
              name="name"
              placeholder="Dit navn"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded-md px-[var(--space-m)]"
            />
          </div>
          <div className="pb-[var(--space-s)]">
            <input
              type="email"
              name="email"
              placeholder="Din email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded-md px-[var(--space-m)]"
            />
          </div>
        </div>
        {/* Submit-knap, som bliver disabled når loading er true */}
        <button type="submit" disabled={loading} className="min-knap">
          {loading ? "Sender..." : "Tilmeld"}
        </button>
      </div>
    </form>
  );
}
