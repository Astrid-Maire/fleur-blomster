"use client";

import { useKurv } from "./KurvContext";
import KurvTotalPris from "./KurvTotalPris";
import { useRouter } from "next/navigation";

export default function KurvMedBetal() {
  const { kurv, kurvÅben, setKurvÅben, øgeAntal, mindskeAntal, sletVare } =
    useKurv();
  const router = useRouter();

  if (!kurvÅben) return null;

  // Grupér produkter efter navn
  const grupperet = kurv.reduce((acc, item) => {
    if (!acc[item.navn]) acc[item.navn] = [];
    acc[item.navn].push(item);
    return acc;
  }, {});

  const handleBetal = () => {
    localStorage.setItem("kurvData", JSON.stringify(kurv));
    router.push("/pages/beslutning");
  };

  return (
    <div className="fixed top-16 right-4 bg-white shadow-xl border rounded p-4 w-80 max-h-[70vh] overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Din kurv</h2>
        <button
          onClick={() => setKurvÅben(false)}
          className="text-red-500 font-bold text-sm"
          aria-label="Luk kurv"
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
              <div className="font-semibold uppercase">{navn}</div>
              <ul className="pl-3 text-sm space-y-1">
                {varer.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span>
                      {item.stoerrelse} – {item.antal} stk {item.pris} kr
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => mindskeAntal(item.id, item.stoerrelse)}
                        className="knap"
                        aria-label={`Mindsk antal af ${item.navn} størrelse ${item.stoerrelse}`}
                      >
                        -
                      </button>
                      <button
                        onClick={() => øgeAntal(item.id, item.stoerrelse)}
                        className="knap"
                        aria-label={`Øg antal af ${item.navn} størrelse ${item.stoerrelse}`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => sletVare(item.id, item.stoerrelse)}
                        className="px-1 text-red-500 rounded"
                        style={{ fontFamily: '"Libre Baskerville", serif' }}
                        aria-label={`Slet ${item.navn} størrelse ${item.stoerrelse}`}
                      >
                        Slet
                      </button>
                    </div>
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
          <button onClick={handleBetal} className="min-knap mt-4 w-full">
            GÅ TIL BETALING
          </button>
        </>
      )}
    </div>
  );
}
