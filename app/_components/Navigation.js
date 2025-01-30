import { headers } from "next/headers";
import Link from "next/link";
import { auth } from "../_lib/auth";

const navLinks = [
  { name: "Úvodná stránka", href: "/" },
  { name: "Naše jazdy", href: "/product" },
  { name: "Rezervovať jazdu", href: "/booking" },
  { name: "Kontaktujte nás", href: "/contact" },
];

export default async function Navigation() {
  // Získanie aktuálnej URL cesty zo serverových headers
  const pathname = headers().get("x-invoke-path") || "/";

  const session = await auth()


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
            {session?.user?.image ? (
              <Link href="/account">
                <div className="flex gap-2">
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="rounded-full border border-primary-600 h-8"
                    referrerPolicy="no-referrer"
                  /><span>{session.user.name}</span>
                </div>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`hover:text-primary-600 transition-colors ${pathname === "/login" ? "text-primary-600 text-xl underline" : ""
                    }`}
                >
                  Prihlásiť sa
                </Link>
                <span>/</span>
                <Link
                  href="/registration"
                  className={`hover:text-primary-600 transition-colors ${pathname === "/registration" ? "text-primary-600 text-xl underline" : ""
                    }`}
                >
                  Registrovať
                </Link>
              </>
            )}
          </li>
        </div>

      </ul>
    </nav>
  );
}
