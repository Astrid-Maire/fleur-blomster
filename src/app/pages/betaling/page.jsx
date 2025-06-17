"use client";
import Back3 from "@/app/components/Back3";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Bekraeftelse() {
  // State til at holde kortoplysningerne
  const [kortData, setKortData] = useState({
    navn: "",
    kortnummer: "",
    udløbsdato: "",
    cvc: "",
  });

  const router = useRouter();

  // Opdater kortoplysninger når input ændres
  const handleChange = (e) => {
    const { name, value } = e.target;
    setKortData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Simuleret indsendelse af betalingsdata
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Betalingsinfo sendt (ikke rigtigt – demo)");
    router.push("/pages/bekraeftelse"); // Gå videre til bekræftelsesside
  };

  return (
    <div>
      <div className="relative z-10 sm:absolute sm:left-5 sm:top-20 sm:mb-0">
        <Back3 />
      </div>
      <div className="py-[var(--space-xl)] px-4 sm:py-[var(--space-xs)] sm:px-[var(--space-33xl)] relative sm:min-h-screen bg-[var(--baggrundsfarve)] flex md:items-center sm:justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-[var(--lysegrøn)] shadow-md rounded-xl px-6 py-6 sm:py-[var(--space-l)] w-full max-w-lg relative z-0"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">
            BETAL MED KORT
          </h4>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="navn">
              Navn på kortet
            </label>
            <input
              type="text"
              id="navn"
              name="navn"
              value={kortData.navn}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-2 bg-[var(--baggrundsfarve)] border border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="kortnummer">
              Kortnummer
            </label>
            <input
              type="text"
              id="kortnummer"
              name="kortnummer"
              value={kortData.kortnummer}
              onChange={handleChange}
              maxLength="19"
              pattern="\d*"
              inputMode="numeric"
              placeholder="1234 5678 9012 3456"
              required
              className="w-full rounded-lg p-2 bg-[var(--baggrundsfarve)] border border-gray-300"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1" htmlFor="udløbsdato">
                Udløbsdato
              </label>
              <input
                type="text"
                id="udløbsdato"
                name="udløbsdato"
                value={kortData.udløbsdato}
                onChange={handleChange}
                placeholder="MM/ÅÅ"
                pattern="\d{2}/\d{2}"
                required
                className="w-full rounded-lg p-2 bg-[var(--baggrundsfarve)] border border-gray-300"
              />
            </div>
            <div className="w-20">
              <label className="block text-gray-700 mb-1" htmlFor="cvc">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                value={kortData.cvc}
                onChange={handleChange}
                maxLength="4"
                pattern="\d*"
                inputMode="numeric"
                required
                className="w-full rounded-lg p-2 bg-[var(--baggrundsfarve)] border border-gray-300"
              />
            </div>
          </div>
          <button type="submit" className="min-knap w-full">
            BETAL
          </button>
        </form>
      </div>
    </div>
  );
}
