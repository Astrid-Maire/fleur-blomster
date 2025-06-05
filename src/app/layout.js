"use client";

import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { KurvProvider } from "@/app/components/KurvContext";
import KurvIkon from "@/app/components/KurvIkon";
import KurvMedBetal from "@/app/components/KurvMedBetal";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const visKurvIkon = pathname !== "/bestil";

  return (
    <html lang="da">
      <Head>Fleur blomster </Head>
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
("");
