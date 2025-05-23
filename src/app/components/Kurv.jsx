"use client";

import { useKurv } from "./KurvContext";

export default function Kurv() {
  const { kurv, kurvÅben, setKurvÅben } = useKurv();

  if (!kurvÅben) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 80,
        right: 20,
        width: 320,
        maxHeight: "70vh",
        overflowY: "auto",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        padding: 16,
        zIndex: 9999,
      }}
    >
      <button onClick={() => setKurvÅben(false)} style={{ marginBottom: 10 }}>
        Luk
      </button>

      {kurv.length === 0 && <p>Kurven er tom</p>}

      <ul>
        {kurv.map((item, idx) => (
          <li key={idx}>
            {item.navn} ({item.stoerrelse}) - {item.pris} kr x {item.antal}
          </li>
        ))}
      </ul>
    </div>
  );
}
