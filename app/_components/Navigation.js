"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Úvodná stránka", href: "/" },
  { name: "Naše jazdy", href: "/product" },
  { name: "Rezervovať jazdu", href: "/booking" },
  { name: "Kontaktujte nás", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between text-lg font-semibold">
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`hover:text-primary-600 transition-colors px-4 py-2 ${pathname === link.href ? "text-primary-600 text-xl underline" : ""
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </div>
        <div>
          <li className="flex gap-2">
            <Link
              href="/login"
              className={`hover:text-primary-600 transition-colors ${pathname === "/login" ? "text-primary-600 text-xl underline" : ""}`}
            >
              Prihlásiť sa
            </Link>
            {" / "}
            <Link
              href="/registration"
              className={`hover:text-primary-600 transition-colors ${pathname === "/registration" ? "text-primary-600 text-xl underline" : ""}`}
            >
              Registrovať
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
