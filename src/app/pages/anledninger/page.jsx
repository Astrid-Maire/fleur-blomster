"use client";

import Image from "next/image";
import Valgmulighed from "@/app/components/Valgmulighed";
import Anledninghovedbilleder from "@/app/components/Anledninghovedbilleder";

export default function Home() {
  const handleValgmulighed = (selected) => {
    console.log("Valgte anledninger:", selected);
  };

  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
        <Image
          src="/images/anledningerhovedbilledet.png"
          alt="Hovedbilledet til anledninger til fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full ">
          <h2>WEBSHOP TIL FLEUR BLOMSTER</h2>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-4xl ">
          BLOMSTER TIL EN <br />
          <span className="block text-right">HVER ANLEDNING</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
          <div className="w-full">
            <p className="paragraph1">
              Velkommen til vores webshop, hvor du nemt kan bestille smukke
              buketter og blomsterdekorationer online. Livet er fyldt med
              særlige øjeblikke, som fortjener at blive husket. Hos Fleur
              hjælper vi dig med at sætte ord på det, der kan være svært at
              sige, eller gøre det smukke endnu smukkere. Om det er en
              fødselsdag, en kærlig hilsen, en tak eller en afsked, så binder vi
              blomster med omtanke og hjertet med. For blomster kan noget helt
              særligt – de bringer glæde, nærvær og varme, og de skaber minder,
              der varer ved.
            </p>
            <p className="paragraph1">
              Vores nøje udvalgt sortiment af blomster, hvor hver stilk er valgt
              med omtanke. Vi binder buketter med alt fra klassiske roser i
              røde, hvide, lyserøde og orange nuancer til elegante lisianthus,
              farverige alstroemeria og sæsonens blomster som ranunkler, dahlia,
              scabiosa, achillea og kamille. Disse kombineres med fyldige
              krysantemum, santini og særlige detaljer som blå eryngium og
              limegrøn viburnum, der skaber dybde og karakter. Friskt løv som
              eukalyptus og ruscus giver struktur og et organisk præg.
            </p>
          </div>

          <div className="w-full">
            <p className="paragraph1">
              Hos Fleur hjælper vi dig med at vælge farver der passer til
              anledningen, eller vi sammensætter en buket i smukke harmoniske
              toner for dig. Uanset om du foretrækker blide pasteller, dybe
              dramatiske farver eller en smuk blanding, sammensætter vi buketter
              i harmoniske farvetoner, der passer til både anledning og
              personlig stil.
            </p>
            <div className="p-4">
              <Valgmulighed onChange={handleValgmulighed} />
            </div>
          </div>
        </div>
      </div>
      <Anledninghovedbilleder />
    </>
  );
}
