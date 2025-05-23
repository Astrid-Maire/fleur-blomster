import Image from "next/image";
import Fleurgalleri from "@/app/components/Fleurgalleri";
import Begraves from "@/app/components/Begarves";

export default function FleurGalleriPage() {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
        <Image
          src="/images/gallerihovedbilledet.png"
          alt="Hovedbilledet til galleri for fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h2>GALLERI AF FLEUR BLOMSTER</h2>
        </div>
      </div>
      <div>
        <h2 className="text-4xl mt-var(--space-2xs)">
          OPLEV VORES <br />
          <div className="block text-right">SMUKKE BLOMSTER</div>
        </h2>
        <div className="flex flex-col-reverse md:flex-row container-2 justify-between gap-10">
          <div className="flex-1">
            <p className="pb-5 md:pb-[var(--space-s)] ">
              Velkommen til Fleurs galleri, hvor du kan opleve et udvalg af de
              buketter, dekorationer og blomster-arrangementer, vi har skabt
              gennem tiden. Hver enkelt opsætning er lavet med øje for detaljer,
              farver og former, og altid med omtanke for den anledning, den skal
              bruges til. Vi lægger stor vægt på at skabe personlige udtryk,
              hvad enten det er til hverdag, fest eller en særlig begivenhed.
            </p>
            <p>
              Galleriet er både en hyldest til vores håndværk og en
              inspirationskilde for dig, der søger blomster med sjæl. Måske
              finder du idéer til en gave, en bryllupsdekoration, en smuk afsked
              eller bare en buket til at lyse hverdagen op. Hos Fleur handler
              det om at skabe blomster, der rører noget i os og vi håber, du kan
              mærke det i billederne.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/images/galleri.png"
              alt="billeder af fleur blomsters bukter"
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <Fleurgalleri />
      <Begraves />
    </>
  );
}
