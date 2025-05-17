"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function InspirationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full min-h-[800px]" ref={ref}>
      <Image
        src="/images/omoshovedbilledet.png"
        alt="baggrundsbilledet af gallerisiden"
        fill
        className="object-cover opacity-10 -z-10"
        priority
      />
      <div className="relative z-10 px-[var(--space-xl)] mx-auto">
        <h3 className="pb-6 pt-[var(--space-xl)]">INSPIRATION TIL DIG</h3>

        <div className="flex flex-col md:flex-row gap-15">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-justify pb-[var(--space-l)]">
              Fleur Blomster åbnede dørene på Mors Dag i 2004, og allerede før
              butikken var færdigrenoveret, blev de første buketter solgt fra
              pladsen foran. Butikken ligger på det hyggelige Trørød Torv, og
              her finder man smukke buketter, værtindegaver og masser af
              inspiration. Hver torsdag og lørdag henter vi friske blomster på
              grønttorvet, så butikken altid er fyldt med nye farver til
              weekenden. Fleur holder åbent alle ugens dage, fordi vi ved, at
              blomster bringer glæde og ro.
            </p>

            <p className="text-justify">
              Ejeren, Trinh Van Ha, er født i Vietnam, og hendes sans for
              æstetik og østens præg afspejles i de smukke buketter og
              dekorationer. Sammen med sit dedikerede personale byder hun
              velkommen hos Fleur – hvor blomster skaber stemning og skønhed.
            </p>
          </div>

          <div
            className="relative md:flex-[0_0_49%] w-full flex items-end justify-center"
            style={{ minHeight: "500px" }}
          >
            {/* Stor billede */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full h-full  overflow-hidden shadow-xl"
            >
              <Image
                src="/images/ejer1.png"
                alt="Stort billede af ejer1"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-0 left-0 w-2/4 aspect-square overflow-hidden z-20 translate-x-[-15%] translate-y-[25%]   "
              style={{ maxWidth: "280px" }}
            >
              <Image
                src="/images/ejer.png"
                alt="Lille billede af ejer"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
