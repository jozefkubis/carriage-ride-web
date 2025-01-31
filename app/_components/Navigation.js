import { headers } from "next/headers"
import Link from "next/link"
import { auth } from "../_lib/auth"
import SignOutButton from "./SignOutButton"
const avatarSrc = "/avatar.png"

const navLinks = [
  { name: "Úvodná stránka", href: "/" },
  { name: "Naše jazdy", href: "/product" },
  { name: "Rezervovať jazdu", href: "/booking" },
  { name: "Kontaktujte nás", href: "/contact" },
]

export default async function Navigation() {
  const session = await auth()
  if (session?.user?.name) {
    session.user.name = session.user.name.split(" ")[0]
  }

  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between text-lg font-semibold">
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="active:scale-105">
              <Link
                href={link.href}
                className="hover:text-primary-600 transition-colors px-4 py-2 active:scale-105"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </div>
        <div>
          <li className="flex gap-2">
            {session?.user?.name ? (
              <div className="flex gap-4 items-center">
                <Link href="/account">
                  <div className="flex gap-2">
                    {session.user.image ? (
                      <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="rounded-full border border-primary-600 h-8"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <img
                        src={avatarSrc}
                        alt={avatarSrc}
                        className="rounded-full border border-primary-600 h-8"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <span>{session.user.name}</span>
                  </div>
                </Link>
                <SignOutButton />
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hover:text-primary-600 transition-colors active:scale-105"
                >
                  Prihlásiť sa
                </Link>
                <span>/</span>
                <Link
                  href="/registration"
                  className="hover:text-primary-600 transition-colors active:scale-105"
                >
                  Registrovať
                </Link>
              </>
            )}
          </li>
        </div>
      </ul>
    </nav>
  )
}
