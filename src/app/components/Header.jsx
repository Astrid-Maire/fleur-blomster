import Link from "next/link";

const links = [
  { href: "/", label: "Forside" },
  { href: "/pages/galleri", label: "Galleri" },
  { href: "/pages/shop", label: "Shop" },
  { href: "/pages/anledninger", label: "Anledninger" },
  { href: "/pages/omos", label: "Om os" },
];

export default function Header() {
  return (
    <header className=" py-2">
      <nav className="flex justify-around text-lg font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
