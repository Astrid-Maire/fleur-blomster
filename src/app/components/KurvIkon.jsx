"use client";

import { useKurv } from "./KurvContext";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default function KurvIkon() {
  const { kurv, kurvÅben, setKurvÅben } = useKurv();
  const totalAntal = kurv.reduce((sum, item) => sum + item.antal, 0);

  if (totalAntal === 0) return null;

  return (
    <button
      onClick={() => setKurvÅben(!kurvÅben)}
      aria-label="Åbn kurv"
      className="fixed top-5 right-5 z-[9999] w-12 h-12 rounded-full flex items-center justify-center text-white"
      style={{ backgroundColor: "var(--knapfarve)" }}
    >
      <ShoppingBagIcon className="w-6 h-6" />
      <span className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center pointer-events-none">
        {totalAntal}
      </span>
    </button>
  );
}
