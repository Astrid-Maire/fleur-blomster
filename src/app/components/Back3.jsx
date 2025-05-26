"use client";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackArrow() {
  return (
    <Link href="/pages/bestil" className="flex items-center gap-2 mt-6  ">
      <FaArrowLeftLong size={20} />
      <span>Tilbage</span>
    </Link>
  );
}
