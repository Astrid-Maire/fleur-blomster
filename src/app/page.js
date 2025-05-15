"use client";
import { useState } from "react";
import Image from "next/image";
import NewsletterPopup from "./components/NewsletterPopup";
import NewsletterForm from "./components/NewsletterForm";
import Baggrundsbillede from "./components/Baggrundsbillede";
import Scroll from "./components/Scroll";
import Footer from "./components/Footer";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/images/forsidehovedbilledet.png"
          alt="forsidens hovedbilledet for fleur blomster"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
          <h1 className="font-bold text-4xl mb-4">Fleur Blomster</h1>
          <h4 className="text-lg sm:text-xl font-medium">
            Trørdvej 67, 2950 Vedbæk, Danmark
          </h4>
        </div>
      </div>

      <div>
        {!popupClosed && !showForm && (
          <NewsletterPopup
            onClose={() => setPopupClosed(true)}
            onSubscribe={() => setShowForm(true)}
          />
        )}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center ">
            <NewsletterForm onSuccess={() => setShowForm(false)} />
          </div>
        )}

        <h2 className="text-4xl  mt-var(--space-2xs) ">
          VELKOMMEN TIL <br />
          <div className="block text-right">FLEUR BLOMSTER</div>
        </h2>
        <div className="container">
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

        <Baggrundsbillede />
        <div className="container-1">
          <h3 className="text-4xl  mt-var(--space-2xs) ">
            FIND DIN NÆSTE <br />
            <div className="block text-right">BLOMSTERFAVORIT </div>
          </h3>
        </div>
        <div className="container">
          <p class="paragraph-1">
            Blomster er naturens eget smykke, og de har en særlig evne til at
            skabe glæde og lys i hverdagen. Hos os finder du et bredt udvalg af
            smukke buketter, der passer til både de små og store øjeblikke. Vi
            udvælger kun de fineste blomster og skaber buketter, der både er
            klassiske og moderne, altid med øje for detaljer og kvalitet.
          </p>
          <p class="paragraph-1">
            Uanset om du leder efter en romantisk gestus, en farverig buket til
            fest eller en enkel og elegant sammensætning, har vi noget, der
            passer til din smag. Gå på opdagelse i vores udvalg nedenfor og lad
            dig inspirere af vores smukke kreationer. Din næste blomsterfavorit
            er kun et klik væk.
          </p>
        </div>
        <Scroll />
        {/* skal være i footer */}
        {showForm && (
          <div className="  mt-4 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Tilmeld dig nyhedsbrevet</h3>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
