"use client";
import { useEffect, useState } from "react";

const NewsletterPopup = ({ onClose, onSubscribe }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("newsletterPopupSeen");
    if (!hasSeenPopup) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("newsletterPopupSeen", "true");
    setIsVisible(false);
    onClose();
  };

  const handleSubscribe = () => {
    localStorage.setItem("newsletterPopupSeen", "true");
    setIsVisible(false);
    onSubscribe();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-[var(--space-3xl)]">
      <div className="bg-[var(--lysegrøn)] p-[var(--space-s)] text-center  w-full ">
        <h3 className=" font-bold ">Tilmeld dig vores nyhedsbrev</h3>
        <p className="pr-[var(--space-xs)] pl-[var(--space-xs)]">
          Hos Fleur Blomster brænder vi for at dele vores kærlighed til blomster
          med dig. Når du tilmelder dig vores nyhedsbrev, får du adgang til
          sæsonens smukkeste buketter, inspirerende idéer og nyttige tips til
          blomsterpleje. Vi holder dig opdateret med de nyeste trends, kreative
          blomsterarrangementer og bag kulisserne i butikken. Som
          nyhedsbrevsmodtager er du også blandt de første til at få nyheder om
          kommende events og eksklusive tilbud.
        </p>
        <p className="p-[var(--space-xs)]">
          Tilmeld dig i dag og lad os bringe naturens skønhed direkte ind i din
          hverdag – fyldt med farver, inspiration og glæde.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSubscribe}
            className="bg-[var(--knapfarve)]  px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Ja tak!
          </button>
          <button
            onClick={handleClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Måske senere
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
