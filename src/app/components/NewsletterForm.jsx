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
      setError("Noget gik galt. Prøv igen senere.");
    } else {
      setFormData({ name: "", email: "" });
      if (onSuccess) onSuccess(); // luk formular eller vis tak-besked
    }

    if (error) {
      console.error("Supabase insert error:", error); // tilføj denne linje
      setError("Noget gik galt. Prøv igen senere.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold mb-4">Nyhedsbrev for Fleur Blomster</h3>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Dit navn"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded-md"
      />
      <input
        type="email"
        name="email"
        placeholder="Din email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded-md"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        {loading ? "Sender..." : "Tilmeld"}
      </button>
    </form>
  );
}
