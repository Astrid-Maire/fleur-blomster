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
    <div className="fixed h-[75%] inset-0 z-[1000] flex  justify-center px-[var(--space-l)] p-[var(--space-m)] bg-[url('/images/blomster.svg')] bg-no-repeat bg-center   bg-opacity-80">
      <div className=" max-w-2xl rounded-xl  text-center  ">
        <h6 className="text-4xl ">Tilmeld dig vores nyhedsbrev</h6>
        <div className=" h7 px-[var(--space-m)] pt-[var(--space-xs)]">
          Hos Fleur Blomster brænder vi for at dele vores kærlighed til blomster
          med dig. Når du tilmelder dig vores nyhedsbrev, får du adgang til
          sæsonens smukkeste buketter, inspirerende idéer og nyttige tips til
          blomsterpleje. Vi holder dig opdateret med de nyeste trends, kreative
          blomsterarrangementer og bag kulisserne i butikken. Som
          nyhedsbrevsmodtager er du også blandt de første til at få nyheder om
          kommende events og eksklusive tilbud.
        </div>
        <div className="h7 pt-[var(--space-s)] pb-[var(--space-s)] px-[var(--space-m)] ">
          Tilmeld dig i dag og lad os bringe naturens skønhed direkte ind i din
          hverdag – fyldt med farver, inspiration og glæde.
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handleClose}
            className="bg-gray-300 text-[var(--tekstfarve)] px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Måske senere
          </button>
          <button onClick={handleSubscribe} className="min-knap">
            Ja tak
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
