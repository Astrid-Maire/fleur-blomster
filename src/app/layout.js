"use client";

import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import { KurvProvider } from "./components/KurvContext";
import KurvIkon from "./components/KurvIkon";
import KurvMedBetal from "./components/KurvMedBetal";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Skjul KurvIkon hvis vi er på /bestil siden
  const visKurvIkon = pathname !== "/bestil";

  return (
    <html lang="da">
      <Head>{/* fonts */}</Head>
      <body className="antialiased relative">
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
