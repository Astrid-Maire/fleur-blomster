"use client";

import { useKurv } from "./KurvContext";
import KurvTotalPris from "./KurvTotalPris";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function KurvMedBetal() {
  const { kurv, kurvÅben, setKurvÅben } = useKurv();
  const router = useRouter();

  if (!kurvÅben) return null;

  // Grupér produkter efter navn
  const grupperet = kurv.reduce((acc, item) => {
    if (!acc[item.navn]) acc[item.navn] = [];
    acc[item.navn].push(item);
    return acc;
  }, {});

  const handleBetal = () => {
    // Gem kurven i localStorage
    localStorage.setItem("kurvData", JSON.stringify(kurv));
    // Naviger til beslutning
    router.push("/pages/beslutning");
  };

  return (
    <div className="fixed top-16 right-4 bg-white shadow-xl border rounded p-4 w-80 max-h-[70vh] overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Din kurv</h2>
        <button
          onClick={() => setKurvÅben(false)}
          className="text-red-500 font-bold text-sm"
        >
          ✕
        </button>
      </div>

      {kurv.length === 0 ? (
        <p>Kurven er tom.</p>
      ) : (
        <ul className="space-y-4">
          {Object.entries(grupperet).map(([navn, varer]) => (
            <li key={navn}>
              <div className="font-semibold mb-1">{navn}</div>
              <ul className="pl-3 text-sm space-y-1">
                {varer.map((item, idx) => (
                  <li key={idx}>
                    {item.stoerrelse} – {item.antal} stk á {item.pris} kr
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}

      {kurv.length > 0 && (
        <>
          <KurvTotalPris kurv={kurv} />
          <button
            onClick={handleBetal}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Gå til betaling
          </button>
        </>
      )}
    </div>
  );
}
