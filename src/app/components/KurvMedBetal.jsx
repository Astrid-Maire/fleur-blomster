"use client";

import Kurv from "./Kurv";
import BetalKnap from "./BetalKnap";
import { useKurv } from "./KurvContext";

export default function KurvMedBetal() {
  const { visKurv, kurv } = useKurv();

  const handleBetal = () => {
    alert("Betaling igangsat!");
  };

  if (!visKurv) return null;

  return (
    <div className="fixed top-14 right-4 w-80 z-50 p-4 bg-white rounded-lg shadow-lg max-h-[80vh] overflow-auto">
      <Kurv />
      {kurv.length > 0 && <BetalKnap onBetal={handleBetal} />}
    </div>
  );
}
