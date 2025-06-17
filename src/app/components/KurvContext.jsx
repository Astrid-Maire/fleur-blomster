"use client";
import { createContext, useContext, useState } from "react";

// Opretter en kontekst til kurven
const KurvContext = createContext();

// Custom hook for nem adgang til kurv-context andre steder i appen
export const useKurv = () => useContext(KurvContext);

// KurvProvider gør kurv-data tilgængelig for alle child-komponenter
export const KurvProvider = ({ children }) => {
  const [kurv, setKurv] = useState([]); // kurv = array med varer
  const [kurvÅben, setKurvÅben] = useState(false); // styrer om kurv-panel vises

  // Tilføj en vare til kurven
  const tilføjTilKurv = (nyVare) => {
    setKurv((prevKurv) => {
      // Tjek om varen allerede findes (samme id og størrelse)
      const findesAllerede = prevKurv.find(
        (vare) => vare.id === nyVare.id && vare.stoerrelse === nyVare.stoerrelse
      );

      if (findesAllerede) {
        // Hvis ja, øg antallet
        return prevKurv.map((vare) =>
          vare.id === nyVare.id && vare.stoerrelse === nyVare.stoerrelse
            ? { ...vare, antal: vare.antal + nyVare.antal }
            : vare
        );
      } else {
        // Ellers tilføj som ny vare
        return [...prevKurv, nyVare];
      }
    });

    // Åbn kurven når en vare tilføjes
    setKurvÅben(true);
  };

  // Øg antal af en specifik vare i kurven
  const øgeAntal = (id, stoerrelse) => {
    setKurv((prevKurv) =>
      prevKurv.map((vare) =>
        vare.id === id && vare.stoerrelse === stoerrelse
          ? { ...vare, antal: vare.antal + 1 }
          : vare
      )
    );
  };

  // Mindsk antal og fjern varen hvis antal går under 1
  const mindskeAntal = (id, stoerrelse) => {
    setKurv(
      (prevKurv) =>
        prevKurv
          .map((vare) =>
            vare.id === id && vare.stoerrelse === stoerrelse
              ? { ...vare, antal: vare.antal - 1 }
              : vare
          )
          .filter((vare) => vare.antal > 0) // Fjern varer med 0 antal
    );
  };

  // Slet en vare fra kurven (uanset antal)
  const sletVare = (id, stoerrelse) => {
    setKurv((prevKurv) =>
      prevKurv.filter(
        (vare) => !(vare.id === id && vare.stoerrelse === stoerrelse)
      )
    );
  };

  // Tøm hele kurven og luk kurv-panelet
  const nulstilKurv = () => {
    setKurv([]);
    setKurvÅben(false);
  };

  // Gør alle funktioner og data tilgængelige via context
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
