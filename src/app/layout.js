import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import { KurvProvider } from "./components/KurvContext";
import KurvIkon from "./components/KurvIkon";
import KurvMedBetal from "./components/KurvMedBetal";

export const metadata = {
  title: "Min Blomsterbutik",
  description: "Smukke blomster til alle lejligheder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
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
