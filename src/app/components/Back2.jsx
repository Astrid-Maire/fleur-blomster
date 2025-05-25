"use client";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackArrow() {
  return (
    <Link href="/pages/beslutning" className="flex items-center gap-2 ">
      <FaArrowLeftLong size={20} />
      <span>Tilbage</span>
    </Link>
  );
}
