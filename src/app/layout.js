"use client";

import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import { KurvProvider } from "./components/KurvContext";
import KurvIkon from "./components/KurvIkon";
import KurvMedBetal from "./components/KurvMedBetal";

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className="antialiased relative">
        <KurvProvider>
          <Header />
          {children}
          <KurvIkon />
          <KurvMedBetal />
          <Footer />
        </KurvProvider>
      </body>
    </html>
  );
}
