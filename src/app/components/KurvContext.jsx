"use client";
import { createContext, useContext, useState } from "react";

const KurvContext = createContext();

export function KurvProvider({ children }) {
  const [kurv, setKurv] = useState([]);
  const [visKurv, setVisKurv] = useState(false);

  const toggleKurv = () => setVisKurv(!visKurv);

  const tilføjTilKurv = (nytProdukt) => {
    setKurv((tidligere) => {
      const eksisterendeIndex = tidligere.findIndex(
        (item) =>
          item.id === nytProdukt.id && item.stoerrelse === nytProdukt.stoerrelse
      );

      if (eksisterendeIndex !== -1) {
        const nyKurv = [...tidligere];
        nyKurv[eksisterendeIndex] = {
          ...nyKurv[eksisterendeIndex],
          antal: nyKurv[eksisterendeIndex].antal + 1,
        };
        return nyKurv;
      } else {
        return [...tidligere, { ...nytProdukt, antal: 1 }];
      }
    });

    setVisKurv(true); // Åbner automatisk kurven, når der tilføjes et produkt
  };

  const opdaterAntal = ({ id, stoerrelse }, nyAntal) => {
    setKurv((tidligere) =>
      tidligere.map((item) =>
        item.id === id && item.stoerrelse === stoerrelse
          ? { ...item, antal: nyAntal }
          : item
      )
    );
  };

  const fjernFraKurv = ({ id, stoerrelse }) => {
    setKurv((tidligere) =>
      tidligere.filter(
        (item) => !(item.id === id && item.stoerrelse === stoerrelse)
      )
    );
  };

  return (
    <KurvContext.Provider
      value={{
        kurv,
        tilføjTilKurv,
        opdaterAntal,
        fjernFraKurv,
        visKurv,
        toggleKurv,
      }}
    >
      {children}
    </KurvContext.Provider>
  );
}

export function useKurv() {
  return useContext(KurvContext);
}
