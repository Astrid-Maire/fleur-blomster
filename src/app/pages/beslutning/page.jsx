import Link from "next/link";
import Back1 from "@/app/components/Back1";

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
      <Back1 />
      <h3 className="text-center">Betalingsside</h3>
      <p className="text-justify px-[var(--space-3xs)] max-w-2xl mx-auto py-[var(--space-s)] leading-relaxed">
        Hos Fleur Blomster kan du betale for dine blomster online eller i
        butikken. Når betalingen er gennemført, registrerer vi din bestilling,
        gemmer dine blomster og gør dem klar til afhentning eller levering på
        det aftalte tidspunkt. Vi begynder først at klargøre din ordre, når vi
        har modtaget betaling. Ved køb accepterer du samtidig vores
        handelsbetingelser, som sikrer en tryg og klar handel. Har du spørgsmål,
        er du altid velkommen til at kontakte os.
      </p>

      <Link
        href="/pages/bestil"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-center block"
      >
        Bestil blomsterne
      </Link>

      <Link
        href="/pages/betaling"
        className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 text-center block"
      >
        Bestil blomsterne og betal
      </Link>
    </div>
  );
}
