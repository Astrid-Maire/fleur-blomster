"use client";

import { useKurv } from "./KurvContext";

export default function KurvMedBetal() {
  const { kurv, kurvÅben, setKurvÅben } = useKurv();

  if (!kurvÅben) return null;

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
    </div>
  );
}
