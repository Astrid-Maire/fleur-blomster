"use client";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackArrow() {
  return (
    <Link
      href="/pages/shop"
      className="flex items-center mt-6 ml-6 space-x-2 transition-colors duration-150 ease-in "
    >
      <FaArrowLeftLong size={20} />
      <span>Tilbage</span>
    </Link>
  );
}
