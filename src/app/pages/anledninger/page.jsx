import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/images/anledningerhovedbilledet.png"
          alt="Hovedbilledet til anledninger til fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h2 className="w-full font-bold ">WEBSHOP TIL FLEUR BLOMSTER</h2>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-4xl  mt-var(--space-2xs) ">
          {" "}
          Blomster til en hver <br />
          <div className="block text-right">Anledning</div>
        </h2>
        <div class="container">
          <p class="paragraph">
            Velkommen til vores webshop, hvor du nemt kan bestille smukke
            buketter og blomsterdekorationer online. Livet er fyldt med særlige
            øjeblikke, som fortjener at blive husket. Hos Fleur hjælper vi dig
            med at sætte ord på det, der kan være svært at sige, eller gøre det
            smukke endnu smukkere. Om det er en fødselsdag, en kærlig hilsen, en
            tak eller en afsked, så binder vi blomster med omtanke og hjertet
            med. For blomster kan noget helt særligt – de bringer glæde, nærvær
            og varme, og de skaber minder, der varer ved.
          </p>
          <p class="paragraph">
            Hos Fleur hjælper vi dig med at vælge farver der passer til
            anledningen, eller vi sammensætter en buket i smukke harmoniske
            toner for dig.
          </p>
        </div>
      </div>
    </>
  );
}
