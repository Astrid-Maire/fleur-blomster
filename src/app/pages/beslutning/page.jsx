import Link from "next/link";
import Back1 from "@/app/components/Back1";

export default function Betaling() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/blomster1.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div className="absolute left-0 top-20">
        <Back1 />
      </div>
      <h3 className="text-center w-full text-lg sm:text-xl font-semibold mb-4">
        BESTIL BLOMSTERBUKET
      </h3>
      <div className="px-4 sm:px-6 max-w-2xl mx-auto">
        <div className="relative">
          <p className="text-justify leading-relaxed pb-6 text-sm sm:text-base ">
            Hos Fleur Blomster kan du betale for dine blomster online eller i
            butikken. Når betalingen er gennemført, registrerer vi din
            bestilling, gemmer dine blomster og gør dem klar til afhentning
            eller levering på det aftalte tidspunkt. Vi begynder først at
            klargøre din ordre, når vi har modtaget betaling. Ved køb accepterer
            du samtidig vores handelsbetingelser, som sikrer en tryg og klar
            handel. Har du spørgsmål, er du altid velkommen til at kontakte os.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 pb-20">
          <Link href="/pages/bestil?flow=uden-betaling" passHref>
            <button className="min-knap w-full sm:w-auto">
              BESTIL BLOMSTERNE
            </button>
          </Link>

          <Link href="/pages/bestil?flow=med-betaling" passHref>
            <button className="min-knap w-full sm:w-auto">
              BESTIL BLOMSTERNE OG BETAL
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
