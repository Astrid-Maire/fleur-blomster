"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xraaztpjtcujqbtvczfb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyYWF6dHBqdGN1anFidHZjemZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NDM1NDEsImV4cCI6MjA2MjAxOTU0MX0.mGlP9vpADg4GTzzvNWy9jM8UQOfe-JKbH-o66kLKKoA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function NewsletterForm({ onSuccess }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email) {
      setError("Udfyld venligst både navn og email.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.from("newsletter_signups").insert([
      {
        name: formData.name,
        email: formData.email,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      setError("Noget gik galt. Prøv igen senere.");
    } else {
      setFormData({ name: "", email: "" });
      if (onSuccess) onSuccess();
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        fixed h-[75%] inset-0 z-[1000] flex  justify-center px-[var(--space-l)] p-[var(--space-m)] bg-[url('/images/blomster.svg')] bg-no-repeat bg-center   bg-opacity-80"
    >
      <div className="   rounded-xl  text-center  ">
        <h6 className="text-4xl pb-[var(--space-l)] w-full pt-[var(--space-l)]">
          Tilmeld dig vores nyhedsbrev
        </h6>

        {error && <p className="text-red-600 mb-3">{error}</p>}
        <div className="px-[var(--space-22xl)] max-w-3xl">
          <div className="pb-[var(--space-s)]">
            <input
              type="text"
              name="name"
              placeholder="Dit navn"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-3 border rounded-md  px-[var(--space-m)]"
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
        <button
          type="submit"
          disabled={loading}
          className="
            min-knap
          "
        >
          {loading ? "Sender..." : "Tilmeld"}
        </button>
      </div>
    </form>
  );
}
