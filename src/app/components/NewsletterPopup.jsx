"use client";
import { useEffect, useState } from "react";

const NewsletterPopup = ({ onClose, onSubscribe }) => {
  // State til at styre om popuppen er synlig eller ej
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Tjekker om brugeren allerede har set popuppen ved at læse fra localStorage
    const hasSeenPopup = localStorage.getItem("newsletterPopupSeen");
    if (!hasSeenPopup) {
      // Hvis ikke set før, vis popuppen
      setIsVisible(true);
    }
  }, []); // Kører kun én gang når komponenten mountes

  const handleClose = () => {
    // Gem i localStorage at brugeren har set popuppen, så den ikke vises igen
    localStorage.setItem("newsletterPopupSeen", "true");
    // Skjul popuppen
    setIsVisible(false);
    // Kald den funktion som blev sendt med fra parent-komponenten når popup lukkes
    onClose();
  };

  const handleSubscribe = () => {
    // Samme som handleClose, men bruges når brugeren tilmelder sig
    localStorage.setItem("newsletterPopupSeen", "true");
    setIsVisible(false);
    // Kald den funktion som blev sendt med fra parent-komponenten når man tilmelder sig
    onSubscribe();
  };

  // Hvis popuppen ikke skal vises, returner null og render ikke noget
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl mx-4 p-6 rounded-xl backdrop-blur-md bg-[url('/images/blomster.svg')] bg-cover bg-center bg-no-repeat shadow-lg text-center">
        <h6 className="text-2xl sm:text-3xl md:text-4xl mb-4 uppercase">
          Tilmeld dig vores nyhedsbrev
        </h6>
        <div className="text-sm sm:text-base px-[var(--space-m)] pt-[var(--space-xs)]">
          Hos Fleur Blomster brænder vi for at dele vores kærlighed til blomster
          med dig. Når du tilmelder dig vores nyhedsbrev, får du adgang til
          sæsonens smukkeste buketter, inspirerende idéer og nyttige tips til
          blomsterpleje. Vi holder dig opdateret med de nyeste trends, kreative
          blomsterarrangementer og bag kulisserne i butikken. Som
          nyhedsbrevsmodtager er du også blandt de første til at få nyheder om
          kommende events og eksklusive tilbud.
        </div>
        <div className="text-sm sm:text-base pt-[var(--space-s)] pb-[var(--space-s)] px-[var(--space-m)]">
          Tilmeld dig i dag og lad os bringe naturens skønhed direkte ind i din
          hverdag – fyldt med farver, inspiration og glæde.
        </div>
        <div className="flex  flex-row justify-center gap-4 mt-4">
          <button
            onClick={handleClose}
            className="bg-gray-300 text-[var(--tekstfarve)] py-1 md:py-2 rounded-lg px-2 hover:bg-gray-400"
          >
            MÅSKE SENERE
          </button>
          <button onClick={handleSubscribe} className="min-knap px-2">
            JA TAK
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
