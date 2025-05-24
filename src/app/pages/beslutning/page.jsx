import Link from "next/link";
import Back1 from "@/app/components/Back1";

export default function Betaling() {
  return (
    <div
      className=""
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
      <div>
        <h3 className="text-center w-full">BESTIL BLOMSTERBUKET </h3>
        <div className="relative max-w-2xl mx-auto px-[var(--space-3xs)] py-[var(--space-s)]">
          <div className="absolute -left-70 top-0">
            <Back1 />
          </div>
          <p className="text-justify leading-relaxed pb-[var(--space-m)]">
            Hos Fleur Blomster kan du betale for dine blomster online eller i
            butikken. Når betalingen er gennemført, registrerer vi din
            bestilling, gemmer dine blomster og gør dem klar til afhentning
            eller levering på det aftalte tidspunkt. Vi begynder først at
            klargøre din ordre, når vi har modtaget betaling. Ved køb accepterer
            du samtidig vores handelsbetingelser, som sikrer en tryg og klar
            handel. Har du spørgsmål, er du altid velkommen til at kontakte os.
          </p>
        </div>

        <div className="flex justify-center space-x-4 pb-[var(--space-22xl)]">
          {/* Gå til bestilling → bekræftelse uden betaling */}
          <Link href="/pages/bestil?flow=uden-betaling">
            <button className="min-knap">BESTIL BLOMSTERNE</button>
          </Link>

          {/* Gå til bestilling → betaling → bekræftelse */}
          <Link href="/pages/bestil?flow=med-betaling">
            <button className="min-knap">BESTIL BLOMSTERNE OG BETAL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
