import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackArrow({ href }) {
  return (
    <Link href="/pages/shop/">
      <FaArrowLeftLong
        size={30}
        className="mt-6 mb-12 transition-text duration-150 ease-in "
      />
    </Link>
  );
}
