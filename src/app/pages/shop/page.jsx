import Produkter from "@/app/components/Produkter";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen">
        <Image
          src="/images/shophovedbilledet.png"
          alt="Hhovedbilledet på shoping side for fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full ">
          <h2>WEBSHOP TIL FLEUR BLOMSTER</h2>
        </div>
      </div>
      <h2 className="text-4xl  mt-var(--space-2xs) ">
        WEBSHOP TIL <br />
        <div className="block text-right">FLEUR BLOMSTER</div>
      </h2>
      <div className="container">
        <p class="paragraph">
          Velkommen til vores webshop, hvor du nemt kan bestille smukke buketter
          og blomsterdekorationer online. Vi har samlet et udvalg af vores mest
          populære og sæsonaktuelle kreationer, så du hurtigt kan finde den
          rette hilsen til enhver anledning. Hver buket bliver håndbundet med
          omhu og leveret frisk, som var den hentet direkte i butikken. Uanset
          om du vil glæde en, du holder af, sende en varm tanke eller forkæle
          dig selv, gør vi det let for dig at sprede blomstrende glæde.
        </p>
        <p class="paragraph">
          Hos Fleur hjælper vi dig med at vælge farver der passer til
          anledningen, eller vi sammensætter en buket i smukke harmoniske toner
          for dig.
        </p>
      </div>

      <div>
        <Produkter />
      </div>
    </>
  );
}
