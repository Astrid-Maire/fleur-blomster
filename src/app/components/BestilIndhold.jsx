"use client";

import { useState } from "react";
import Back2 from "@/app/components/Back2";

export default function BestilIndhold() {
  const [formData, setFormData] = useState({ fornavn: "" });
  const [besked, setBesked] = useState("");

  return (
    <div style={{ padding: "1rem" }}>
      <Back2 />
      <p>DEBUG: Formularen vises her</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBesked("Bestilling sendt!");
        }}
      >
        <input
          name="fornavn"
          placeholder="Fornavn"
          value={formData.fornavn}
          onChange={(e) => setFormData({ fornavn: e.target.value })}
          required
        />
        <button type="submit">Send bestilling</button>
      </form>

      {besked && <p>{besked}</p>}
    </div>
  );
}
