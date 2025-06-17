"use client";
import { useKurv } from "./KurvContext"; // Importer kurv-context for adgang til global kurvtilstand
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function KurvIkon() {
  const { kurv, kurvÅben, setKurvÅben } = useKurv(); // Hent kurvdata og visningskontrol fra context
  const totalAntal = kurv.reduce((sum, item) => sum + item.antal, 0); // Udregn total antal varer i kurven

  // Hvis kurven er tom, vises knappen ikke
  if (totalAntal === 0) return null;

  return (
    <button
      onClick={() => setKurvÅben(!kurvÅben)} // Skifter mellem åben/lukket tilstand af kurven
      aria-label="Åbn kurv" // Tilgængelighed: screen readers
      className="fixed top-5 right-5 z-[9999] w-12 h-12 rounded-full flex items-center justify-center "
      style={{ backgroundColor: "var(--knapfarve)" }} // Baggrundsfarve defineret i CSS-variabel
    >
      <ShoppingBagIcon className="w-6 h-6" />
      {/* vise antal varer */}
      <span className="absolute top-1 right-1 bg-red-600  rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center pointer-events-none">
        {totalAntal}
      </span>
    </button>
  );
}
