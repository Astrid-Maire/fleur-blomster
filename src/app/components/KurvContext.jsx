"use client";

import { createContext, useContext, useState } from "react";

const KurvContext = createContext();

export function KurvProvider({ children }) {
  const [kurv, setKurv] = useState([]);
  const [kurvÅben, setKurvÅben] = useState(false);
  const [ikonSynligt, setIkonSynligt] = useState(false);

  const tilføjTilKurv = (nytProdukt) => {
    setKurv((prev) => {
      const eksisterende = prev.find(
        (item) =>
          item.id === nytProdukt.id && item.stoerrelse === nytProdukt.stoerrelse
      );

      if (eksisterende) {
        return prev.map((item) =>
          item.id === nytProdukt.id && item.stoerrelse === nytProdukt.stoerrelse
            ? { ...item, antal: item.antal + 1 }
            : item
        );
      }

      return [...prev, nytProdukt];
    });

    setIkonSynligt(true);
  };

  return (
    <KurvContext.Provider
      value={{
        kurv,
        setKurv,
        kurvÅben,
        setKurvÅben,
        tilføjTilKurv,
        ikonSynligt,
        setIkonSynligt,
      }}
    >
      {children}
    </KurvContext.Provider>
  );
}

export function useKurv() {
  const context = useContext(KurvContext);
  if (!context) {
    throw new Error("useKurv skal bruges indenfor KurvProvider");
  }
  return context;
}
