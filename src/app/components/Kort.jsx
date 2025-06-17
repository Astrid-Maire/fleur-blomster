"use client";
import { useEffect, useRef } from "react";

export default function Kort() {
  const mapRef = useRef(null); // Reference til DOM-elementet hvor kortet skal placeres
  const mapInstanceRef = useRef(null); // Gemmer Leaflet-kortinstansen, så vi undgår at initialisere flere gange

  // Koordinater til kortet
  const lat = 55.84 - 0.00109;
  const lng = 12.5435875 + 0.0017;

  // Placering af label lidt forskudt over markøren
  const labelLat = lat + 0.00018;
  const labelLng = lng;

  useEffect(() => {
    let L; // Her gemmes Leaflet-modulet

    async function loadMap() {
      // Stop hvis kortet allerede er initialiseret
      if (!mapRef.current || mapInstanceRef.current) return;

      // Dynamisk import af Leaflet JS og CSS (kun i browseren)
      const leaflet = await import("leaflet");
      L = leaflet.default;

      await import("leaflet/dist/leaflet.css");

      // Initialiser Leaflet kortet på det DOM-element vi har refereret
      const map = L.map(mapRef.current, {
        center: [lat, lng],
        zoom: 20,
        scrollWheelZoom: false,
        zoomControl: false,
      });

      // Gem kort-instansen så vi kan undgå dobbelte initialiseringer
      mapInstanceRef.current = map;

      // Tilføj OpenStreetMap som baggrundslag
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
      }).addTo(map);

      // Tilføj zoom-knapper i nederste højre hjørne
      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Opret en grøn prik som markør
      const redDotIcon = L.divIcon({
        className: "",
        html: `<div style="
          width: 12px;
          height: 12px;
          background: var(--mørkegrøn);
          border-radius: 50%;
        "></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      // Tilføj prik-markøren på kortet
      L.marker([lat, lng], { icon: redDotIcon }).addTo(map);

      // Opret label med navn og adresse i et "tooltip-lignende" design
      const labelIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            background: var(--baggrundsfarve);
            border: 1px solid var(--mørkegrøn);
            padding: var(--space-xs); 
            border-radius: 6px;
            font-size: 1rem; 
            font-weight: 500;
            user-select: none;
            font-family: 'Playfair Display', serif;
            width: max-content;
            max-width: 240px; 
          ">
            Fleur Blomster<br />
            Trørødvej 67, 2950 Vedbæk
          </div>
        `,
        iconSize: [180, 50],
        iconAnchor: [90, 50],
      });

      // Tilføj label som ikke kan klikkes
      L.marker([labelLat, labelLng], {
        icon: labelIcon,
        interactive: false,
      }).addTo(map);
    }

    loadMap(); // Kør funktionen når komponenten mountes

    // Fjern kortet når komponenten afmonteres for at undgå memory leaks eller fejl
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // JSX layout: venstre side med kort, højre side med tekst
  return (
    <section className="w-full px-[var(--space-xl)] pb-[var(--space-xl)]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-0">
        <div className="w-full h-[480px] relative">
          <div ref={mapRef} className="w-full h-full" />
        </div>
        <div className="pt-[var(--space-xs)] md:pl-[var(--space-l)] pl-0">
          <h5 className="text-lg font-semibold">KONTAKT OS </h5>
          <p className="mb-6 text-justify pt-[var(--space-2xs)] ">
            Fleur Blomster har til huse på Trørødvej 67, 2950 Vedbæk, Danmark.
            Her finder du en hyggelig blomsterbutik med fokus på kvalitet og
            personlig service.
          </p>
          <p className="mb-4 text-justify pt-[var(--space-xs)]">
            Vi glæder os til at byde dig velkommen i butikken og dele vores
            passion for smukke blomster, god service og æstetik med dig.
          </p>
        </div>
      </div>
    </section>
  );
}
