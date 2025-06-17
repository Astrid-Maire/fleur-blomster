"use client";
import { useKurv } from "./KurvContext";
import KurvTotalPris from "./KurvTotalPris";
import { useRouter } from "next/navigation";

export default function KurvMedBetal() {
  // Hent kurv state og funktioner fra kontekst
  const { kurv, kurvÅben, setKurvÅben, øgeAntal, mindskeAntal, sletVare } =
    useKurv();
  const router = useRouter();

  // Hvis kurven ikke er åben, render intet
  if (!kurvÅben) return null;

  // Gruppér varer i kurven efter navn (så samme produkter samles)
  const grupperet = kurv.reduce((acc, item) => {
    if (!acc[item.navn]) acc[item.navn] = [];
    acc[item.navn].push(item);
    return acc;
  }, {});

  // Funktion til at gemme kurv i localStorage og navigere til betalingsside
  const handleBetal = () => {
    localStorage.setItem("kurvData", JSON.stringify(kurv));
    router.push("/pages/beslutning");
  };

  const stoerrelseMap = {
    s: "Lille ",
    m: "Mellem",
    l: "Stor",
  };

  return (
    <div className="fixed top-16 right-4 btn-selected1 shadow-xl custom-border p-4 w-100 max-h-[90vh] overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-2">
        <h5 className="">DIN KURV</h5>
        <button
          onClick={() => setKurvÅben(false)}
          className=""
          aria-label="Luk kurv"
        >
          ✕
        </button>
      </div>
      {/* Hvis kurven er tom, vis besked */}
      {kurv.length === 0 ? (
        <p>Kurven er tom.</p>
      ) : (
        <ul className="space-y-4">
          {/* For hver gruppe (samme produktnavn), vis navn og lister varer */}
          {Object.entries(grupperet).map(([navn, varer]) => (
            <li key={navn}>
              <div className="font-semibold uppercase">{navn}</div>
              <ul className="pl-3 text-sm space-y-1">
                {/* For hver vare i gruppen vis detaljer og knapper */}
                {varer.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <span>
                      {/* Vis størrelse  */}
                      {stoerrelseMap[item.stoerrelse?.trim().toLowerCase()] ||
                        item.stoerrelse}{" "}
                      – antal {item.antal} - Pris {item.pris} kr
                    </span>
                    <div className="flex gap-2">
                      {/* Knappen til at mindske antal */}
                      <button
                        onClick={() => mindskeAntal(item.id, item.stoerrelse)}
                        className="min-knap2"
                        aria-label={`Mindsk antal af ${item.navn} størrelse ${item.stoerrelse}`}
                      >
                        -
                      </button>
                      {/* Knappen til at øge antal */}
                      <button
                        onClick={() => øgeAntal(item.id, item.stoerrelse)}
                        className="min-knap2"
                        aria-label={`Øg antal af ${item.navn} størrelse ${item.stoerrelse}`}
                      >
                        +
                      </button>
                      {/* Knappen til at slette varen helt */}
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

      {/* Hvis der er varer i kurven, vis total pris og betalingsknap */}
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
