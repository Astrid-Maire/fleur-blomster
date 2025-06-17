"use client";
import { useKurv } from "./KurvContext"; // Importerer hook til kurv-state

export default function KurvMedBetal() {
  const { kurv, kurvÅben, setKurvÅben } = useKurv(); // Henter kurv-data og funktioner fra context

  // Hvis kurven ikke er åben, vises ingenting
  if (!kurvÅben) return null;

  return (
    <div className="fixed top-16 right-4 shadow-xl border rounded p-4 w-80 max-h-[70vh] overflow-y-auto z-50">
      <div className="flex justify-between items-center mb-2">
        <h3 className="">Din kurv</h3>
        <button onClick={() => setKurvÅben(false)} className="">
          ✕
        </button>
      </div>
    </div>
  );
}
