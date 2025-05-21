"use client";
import { useKurv } from "./KurvContext";
import { useRouter } from "next/navigation"; // Importer Next.js router

export default function Kurv() {
  const { kurv, opdaterAntal, fjernFraKurv, visKurv } = useKurv();
  const router = useRouter(); // Init router

  if (!visKurv) return null;

  // Gruppér kurv efter produkt id
  const grupperetKurv = kurv.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = {
        ...item,
        stoerrelser: [],
      };
    }
    acc[item.id].stoerrelser.push({
      stoerrelse: item.stoerrelse,
      antal: item.antal,
    });
    return acc;
  }, {});

  const handleBetal = () => {
    router.push("/pages/beslutning");
  };

  return (
    <div className="fixed top-14 right-4 bg-white border shadow-lg p-4 rounded-lg w-80 z-50 max-h-[80vh] overflow-auto">
      <h4 className="font-bold text-lg mb-2">Kurv</h4>

      {kurv.length === 0 ? (
        <p>Kurven er tom.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {Object.values(grupperetKurv).map((produkt) => (
              <li key={produkt.id} className="border-b pb-3">
                <div className="flex gap-3 items-center mb-2">
                  <img
                    src={produkt.billede}
                    alt={produkt.navn}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <p className="font-semibold text-sm">{produkt.navn}</p>
                </div>
                <div className="ml-16 space-y-1">
                  {produkt.stoerrelser.map(({ stoerrelse, antal }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 justify-between"
                    >
                      <p className="text-xs text-gray-600">
                        Str.: {stoerrelse}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            if (antal > 1) {
                              opdaterAntal(
                                { id: produkt.id, stoerrelse },
                                antal - 1
                              );
                            } else {
                              fjernFraKurv({ id: produkt.id, stoerrelse });
                            }
                          }}
                          className="px-2 py-1 bg-red-500 text-white rounded"
                        >
                          -
                        </button>
                        <span>{antal}</span>
                        <button
                          onClick={() =>
                            opdaterAntal(
                              { id: produkt.id, stoerrelse },
                              antal + 1
                            )
                          }
                          className="px-2 py-1 bg-green-500 text-white rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <button
            onClick={handleBetal}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Betal
          </button>
        </>
      )}
    </div>
  );
}
