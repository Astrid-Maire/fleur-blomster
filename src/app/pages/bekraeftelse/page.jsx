import Link from "next/link";

export default function Betaling() {
  return (
    <div
      className="px-[var(--space-3xl)] py-[var(--space-m)]"
      style={{
        backgroundImage: "url('/images/blomster1.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h3 className="text-center">Bekræftigelse</h3>
      <p className="text-justify px-[var(--space-3xs)] max-w-2xl mx-auto py-[var(--space-s)] leading-relaxed">
        Tak for din bestilling. Vi har modtaget din ordre og betalingen er
        gennemført. Du vil snart modtage en bekræftelse på e-mail med alle
        detaljer. Vi går nu i gang med at klargøre din bestilling, og vi sørger
        for, at alt bliver gjort med den samme omhu og kærlighed, som vi lægger
        i alle vores blomster. Har du spørgsmål eller særlige ønsker, er du
        altid velkommen til at kontakte os. Tak fordi du valgte Fleur – vi
        glæder os til at sende blomstrende glæde din vej.
      </p>

      <Link
        href="/"
        className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-center block"
      >
        Tilbage til forsiden
      </Link>
    </div>
  );
}
