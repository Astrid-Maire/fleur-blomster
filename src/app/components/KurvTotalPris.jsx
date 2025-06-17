"use client";
// Komponent til at vise den samlede pris for varer i kurven
export default function KurvTotalPris({ kurv }) {
  // Beregner totalprisen ved at lægge prisen * antal sammen for hvert item i kurven
  const total = kurv.reduce((sum, item) => sum + item.pris * item.antal, 0);

  return <div className="text-right mt-2 font-bold">Total: {total} kr</div>;
}
