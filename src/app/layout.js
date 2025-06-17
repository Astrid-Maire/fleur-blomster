"use client";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { KurvProvider } from "@/app/components/KurvContext"; // Context til indkøbskurv
import KurvIkon from "@/app/components/KurvIkon"; // Lille kurv-ikon (flydende)
import KurvMedBetal from "@/app/components/KurvMedBetal"; // Kurv-popup med betaling
import Head from "next/head";
import { usePathname } from "next/navigation"; // Bruges til at finde den aktuelle sti

// RootLayout omslutter hele app'en og styrer layoutet på alle sider
export default function RootLayout({ children }) {
  const pathname = usePathname(); // Finder den aktuelle sti (f.eks. "/pages/bestil")

  // Viser kurv-ikonet på alle sider undtagen "pages/bestil"
  const visKurvIkon = pathname !== "pages/bestil";

  return (
    <html lang="da">
      <Head>
        <title>Fleur blomster</title>
      </Head>
      <body className="antialiased relative">
        {/* KurvProvider gør det muligt at tilgå kurvdata globalt */}
        <KurvProvider>
          <Header />
          {children} {/* Indhold fra de enkelte sider */}
          {visKurvIkon && <KurvIkon />} {/* Kurv-ikon vises dynamisk */}
          <KurvMedBetal /> {/* Fast kurvkomponent */}
          <Footer />
        </KurvProvider>
      </body>
    </html>
  );
}
