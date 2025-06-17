"use client";

import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { KurvProvider } from "@/app/components/KurvContext";
import KurvIkon from "@/app/components/KurvIkon";
import KurvMedBetal from "@/app/components/KurvMedBetal";
import { usePathname } from "next/navigation";
import { Libre_Baskerville, Playfair_Display, Poppins } from "next/font/google";

// Importér fonts – ingen variable, bare brug .className senere
const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const visKurvIkon = pathname !== "pages/bestil";

  return (
    <html lang="da">
      <head>
        <title>Fleur blomster</title>
      </head>
      <body className={`${poppins.className} antialiased relative`}>
        <KurvProvider>
          <Header />
          {children}
          {visKurvIkon && <KurvIkon />}
          <KurvMedBetal />
          <Footer />
        </KurvProvider>
      </body>
    </html>
  );
}
