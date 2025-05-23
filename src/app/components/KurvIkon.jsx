"use client";

import { useKurv } from "./KurvContext";

export default function KurvIkon() {
  const { kurv, kurvÅben, setKurvÅben } = useKurv();
  const totalAntal = kurv.reduce((sum, item) => sum + item.antal, 0);

  if (totalAntal === 0) return null;

  return (
    <button
      onClick={() => setKurvÅben(!kurvÅben)}
      aria-label="Åbn kurv"
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        zIndex: 9999,
        backgroundColor: "var(--knapfarve)",
        borderRadius: "50%",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        cursor: "pointer",
        border: "none",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
      >
        <path d="M6 6h15l-1.5 9h-13L4 4H2" />
        <circle cx="9" cy="21" r="1" />
        <circle cx="18" cy="21" r="1" />
      </svg>
      <span
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          width: 18,
          height: 18,
          fontSize: 12,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {totalAntal}
      </span>
    </button>
  );
}
