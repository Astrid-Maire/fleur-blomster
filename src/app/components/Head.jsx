// app/components/Head.jsx
import { Libre_Baskerville, Playfair_Display } from "next/font/google";

// Importér fonts kun dem du skal bruge her
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HeadComponent() {
  return (
    <div className="space-y-4 p-6">
      <h1 className={`${libre.className} text-4xl`}>
        Titel med Libre Baskerville
      </h1>
      <h2 className={`${playfair.className} text-2xl`}>
        Undertitel med Playfair Display
      </h2>
      <p className="text-base">Brødtekst med Poppins – arvet fra layout</p>
    </div>
  );
}
