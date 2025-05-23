import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-span sticky flex flex-col md:flex-row flex-wrap justify-between items-center gap-[var(--space-l)] pb-3  pt-2 border-t-2 border-t-[var(--mørkegrøn)] px-[var(--space-l)]">
      <div className=" flex flex-col justify-center items-center order-1 md:order-2 w-full md:w-auto">
        <a href="#">
          <Image
            src={"/images/logo.svg"}
            alt="Fleur Blomster logo"
            width={100}
            height={100}
          />
        </a>
        <span className="justify-between pb-[var(--space-m)]">
          Trørødvej 67, 2950 Vedbæk
        </span>
      </div>

      <div className="address-and-socials flex flex-col items-center md:items-start order-2 md:order-1 w-full md:w-auto">
        <span className="font-bold">Fleur Blomsters sociale medier</span>
        <span>Facebook: Fleurblomster Dk</span>
        <span> Instagram: fleur_blomster </span>
      </div>

      <div className="contacts flex flex-col md:items-end order-3 w-full md:w-auto text-center pb-6 md:pb-0">
        <span className="font-bold">Kontakt information</span>
        <span>Mail: fleurblomster@gmail.com</span>
        <span>Tlf nr: +45 51 21 63 46 </span>
        <span> Tlf nr: +45 60 45 55 06</span>
      </div>
    </footer>
  );
}
