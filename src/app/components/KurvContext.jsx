"use client";

import { createContext, useContext, useState } from "react";

const KurvContext = createContext();

export const useKurv = () => useContext(KurvContext);

export const KurvProvider = ({ children }) => {
  const [kurv, setKurv] = useState([]);
  const [kurvÅben, setKurvÅben] = useState(false);

  const tilføjTilKurv = (nyVare) => {
    setKurv((prevKurv) => {
      const findesAllerede = prevKurv.find(
        (vare) => vare.id === nyVare.id && vare.stoerrelse === nyVare.stoerrelse
      );

      if (findesAllerede) {
        return prevKurv.map((vare) =>
          vare.id === nyVare.id && vare.stoerrelse === nyVare.stoerrelse
            ? { ...vare, antal: vare.antal + nyVare.antal }
            : vare
        );
      } else {
        return [...prevKurv, nyVare];
      }
    });

    setKurvÅben(true);
  };

  const øgeAntal = (id, stoerrelse) => {
    setKurv((prevKurv) =>
      prevKurv.map((vare) =>
        vare.id === id && vare.stoerrelse === stoerrelse
          ? { ...vare, antal: vare.antal + 1 }
          : vare
      )
    );
  };

  const mindskeAntal = (id, stoerrelse) => {
    setKurv((prevKurv) =>
      prevKurv
        .map((vare) =>
          vare.id === id && vare.stoerrelse === stoerrelse
            ? { ...vare, antal: vare.antal - 1 }
            : vare
        )
        .filter((vare) => vare.antal > 0)
    );
  };

  const sletVare = (id, stoerrelse) => {
    setKurv((prevKurv) =>
      prevKurv.filter(
        (vare) => !(vare.id === id && vare.stoerrelse === stoerrelse)
      )
    );
  };

  const nulstilKurv = () => {
    setKurv([]);
    setKurvÅben(false);
  };

  return (
    <KurvContext.Provider
      value={{
        kurv,
        kurvÅben,
        setKurvÅben,
        tilføjTilKurv,
        øgeAntal,
        mindskeAntal,
        sletVare,
        nulstilKurv,
      }}
    >
      {children}
    </KurvContext.Provider>
  );
};
