"use client";
import Link from "next/link";

// Importerer en venstrepil-ikon fra react-icons
import { FaArrowLeftLong } from "react-icons/fa6";

// Definerer og eksporterer komponenten BackArrow
export default function BackArrow() {
  return (
    <Link
      href="/pages/shop"
      className="group flex items-center mt-6 ml-6 space-x-2"
    >
      {/* Ikonet (venstrepil) med animation når man holder musen over */}
      <FaArrowLeftLong
        size={20}
        className="transition-transform duration-200 ease-in group-hover:-translate-x-1"
      />
      <span>Tilbage</span>
    </Link>
  );
}
