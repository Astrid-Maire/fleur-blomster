"use client";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackArrow() {
  return (
    <Link
      href="/pages/shop"
      className="flex items-center gap-2 mt-6 mb-12 text-blue-600 hover:text-blue-800 transition-colors duration-150"
    >
      <FaArrowLeftLong size={24} />
    </Link>
  );
}
