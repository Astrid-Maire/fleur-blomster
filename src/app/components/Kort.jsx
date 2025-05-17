"use client";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Kort() {
  const mapRef = useRef(null);

  const lat = 55.84 - 0.00109;
  const lng = 12.5435875 + 0.0017;

  const labelLat = lat + 0.00018;
  const labelLng = lng;

  useEffect(() => {
    if (!mapRef.current || mapRef.current._leaflet_id) return;

    const map = L.map(mapRef.current, {
      center: [lat, lng],
      zoom: 20,
      scrollWheelZoom: false,
      zoomControl: false, // Deaktiver standard zoom-knapper
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
    }).addTo(map);

    // Tilføj zoom-knapper nederst til højre
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    const redDotIcon = L.divIcon({
      className: "",
      html: `<div style="
        width: 12px;
        height: 12px;
        background: red;
        border-radius: 50%;
      "></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    L.marker([lat, lng], { icon: redDotIcon }).addTo(map);

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

    L.marker([labelLat, labelLng], {
      icon: labelIcon,
      interactive: false,
    }).addTo(map);
  }, []);

  return (
    <section className="w-full px-[var(--space-xl)] pb-[var(--space-xl)]">
      <div className="grid grid-cols-1 md:grid-cols-2  items-start">
        <div className="w-full h-[480px] rounded-xl shadow-md border relative">
          <div ref={mapRef} className="w-full h-full rounded-xl" />
        </div>

        <div className="pt-[var(--space-xs)] pl-[var(--space-l)] ">
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
