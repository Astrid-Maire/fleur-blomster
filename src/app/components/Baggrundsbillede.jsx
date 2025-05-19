import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function InspirationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full min-h-[800px]" ref={ref}>
      <Image
        src="/images/forsidehovedbilledet.png"
        alt="Forsidebillede"
        fill
        className="object-cover opacity-15 -z-10"
        priority
      />
      <div className="relative z-10 p-[var(--space-m)]">
        <h3 className="pl-[var(--space-l)] pb-[var(--space-m)] pt-[var(--space-l)]   ">
          INSPIRATION TIL DIG
        </h3>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-6">
            <p className="pl-[var(--space-l)] text-justify">
              Hos Fleur Blomster ønsker vi at dele mere end bare blomster. Vi
              inviterer dig ind i en verden fyldt med farver, former og
              stemninger, hvor blomster får lov at tale deres eget sprog. Her
              kan du finde idéer til sæsonens smukkeste buketter, små detaljer
              der skaber stor glæde og inspiration til at bringe naturens ro og
              skønhed ind i din hverdag. Vi håber at kunne vække din kreativitet
              og give dig lyst til at udforske, hvordan blomster kan løfte både
              rum og sind.
            </p>

            <p className="pl-[var(--space-l)] text-justify">
              Uanset om du er på udkig efter en personlig gave, noget særligt
              til bordet eller bare ønsker at glæde dig selv, kan du finde nye
              idéer og stemningsfulde udtryk hos os. Vi tror på, at blomster har
              evnen til at forbinde os med hinanden og med øjeblikket. Derfor
              binder vi hver buket med omhu, kærlighed og øje for det, der gør
              en forskel. Lad dig inspirere og find det, der blomstrer for dig.
            </p>
          </div>

          <div className="flex-1 relative min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute left-1/2 top-[20px] transform -translate-x-1/2 w-64 h-96 rotate-[5deg] z-10"
            >
              <Image
                src="/images/l.png"
                alt="Billede L"
                fill
                className="object-cover shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-[10%] top-[140px] w-56 h-80 rotate-[-10deg] z-20"
            >
              <Image
                src="/images/m.png"
                alt="Billede M"
                fill
                className="object-cover shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute right-[5%] top-[180px] w-48 h-72 rotate-[12deg] z-0"
            >
              <Image
                src="/images/s.png"
                alt="Billede S"
                fill
                className="object-cover shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
