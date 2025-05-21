"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "FORSIDE" },
  { href: "/pages/galleri", label: "GALLERI" },
  { href: "/pages/shop", label: "SHOP " },
  { href: "/pages/anledninger", label: "ANLEDNINGER" },
  { href: "/pages/omos", label: "OM OS" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-0 sm:py-2 transition-all  shadow">
      <div className="flex justify-end px-4 sm:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "flex flex-col gap-y-6" : "hidden"
        } items-center text-lg font-medium sm:flex sm:flex-row sm:gap-x-8 sm:gap-y-0 sm:justify-around`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
