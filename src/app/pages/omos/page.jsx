import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/images/omoshovedbilledet.png"
          alt="hovedbilledet på Om fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Fleur Blomster
          </h1>
          <h4 className="text-lg sm:text-xl font-medium">
            Trørdvej 67, 2950 Vedbæk, Danmark
          </h4>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[var(--tekstfarve)]">
          VELKOMMEN TIL <br /> FLEUR BLOMSTER
        </h2>
        <div class="container">
          <p class="paragraph">
            Hos os handler det om mere end blomster. Vi skaber personlige
            buketter og blomstrende oplevelser, der bringer glæde, nærvær og
            skønhed ind i hverdagen. Hver blomst er nøje udvalgt, hver buket
            bundet med kærlighed og tanke på dem, der skal modtage den. Uanset
            om du leder efter en gave, noget smukt til dig selv eller blot
            inspiration, glæder vi os til at dele vores passion med dig.
          </p>
          <p class="paragraph">
            Vi er passionerede omkring at bringe naturens skønhed tættere på
            dig. Hos os finder du ikke bare blomster, men inspiration til at
            skabe magiske øjeblikke i dit liv. Uanset om du ønsker at forkæle
            dig selv eller give en betænksom gave, er vi her for at hjælpe dig
            med at vælge de perfekte blomster. Besøg os i Trørød, hvor vi glæder
            os til at dele vores passion for blomster med dig.
          </p>
        </div>
      </div>
    </>
  );
}
