"use client";
import Back3 from "@/app/components/Back3";
import { useState } from "react";

export default function Bekraeftelse() {
  const [kortData, setKortData] = useState({
    navn: "",
    kortnummer: "",
    udløbsdato: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKortData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her skal du sende data til en betalingsgateway som Stripe
    alert("Betalingsinfo sendt (ikke rigtigt – demo)");
  };

  return (
    <div>
      <Back3 />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">
            Betal med kort
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
              className="w-full border border-gray-300 p-2 rounded"
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
              className="w-full border border-gray-300 p-2 rounded"
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
                className="w-full border border-gray-300 p-2 rounded"
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
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
          </div>

          <Link
            href="/pages/bekraeftelse"
            className="bg-green-600 hover:bg-green-700 text-white py-2 rounded text-lg text-center block"
          >
            Betal
          </Link>
        </form>
      </div>
    </div>
  );
}
