// src/app/pages/bestil/BestilForm.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Back2 from "@/app/components/Back2";

export default function BestilForm() {
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const max = new Date();
    max.setDate(today.getDate() + 14);
    const toInputFormat = (date) => date.toISOString().split("T")[0];
    setMinDate(toInputFormat(today));
    setMaxDate(toInputFormat(max));
  }, []);

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-900">
      <Back2 />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Bestilling</h1>
        <form action="/tak" method="POST" className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="fornavn">Fornavn</label>
            <input
              type="text"
              name="fornavn"
              id="fornavn"
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="efternavn">Efternavn</label>
            <input
              type="text"
              name="efternavn"
              id="efternavn"
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email">Emailadresse</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="telefon">Telefonnummer</label>
            <input
              type="tel"
              name="telefon"
              id="telefon"
              pattern="[0-9]*"
              inputMode="numeric"
              maxLength="15"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <small className="text-gray-500 mt-1">
              Kun tal – ingen mellemrum
            </small>
          </div>

          <div className="flex flex-col">
            <label htmlFor="dato">Dato for afhentning</label>
            <input
              type="date"
              name="dato"
              id="dato"
              required
              min={minDate}
              max={maxDate}
              className="p-2 border border-gray-300 rounded"
            />
            <small className="text-gray-500 mt-1">
              Vælg en dato inden for de næste 14 dage
            </small>
          </div>

          <div className="flex flex-col">
            <label htmlFor="korttekst">Tekst på kortet (valgfrit)</label>
            <textarea
              name="korttekst"
              id="korttekst"
              rows="4"
              className="p-2 border border-gray-300 rounded"
            />
          </div>

          <Link
            href="/pages/betaling"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded text-lg text-center block"
          >
            Send bestilling
          </Link>
        </form>
      </div>
    </div>
  );
}
