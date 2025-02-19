import Link from "next/link"
import { auth } from "../_lib/auth"
import SignOutButton from "./SignOutButton"
import Image from "next/image"

const navLinks = [
  { name: "Úvodná stránka", href: "/" },
  { name: "Naše jazdy", href: "/product" },
  { name: "Rezervovať jazdu", href: "/reservation" },
  { name: "Kontaktujte nás", href: "/contact" },
]

export default async function Navigation() {
  const avatarSrc =
    "https://jlfekazftgytoziyfzfn.supabase.co/storage/v1/object/public/avatars//avatar.png"

  const session = await auth()
  if (session?.user?.name) {
    session.user.name = session.user.name.split(" ")[0]
  }

  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between max-w-screen-xl mx-auto text-lg font-semibold">
        {/* Navigačné odkazy */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name} className="active:scale-105">
              <Link
                href={link.href}
                className="hover:text-primary-600 transition-colors px-4 py-2"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </div>

        {/* Sekcia používateľa */}
        <li>
          {session?.user?.name ? (
            <div className="flex items-center gap-5">
              <Link
                href="/account"
                className="flex items-center gap-3 min-w-[100px]"
              >
                <div className="relative h-11 w-11">
                  <Image
                    src={session.user.image || avatarSrc}
                    alt={session.user.name || "Avatar"}
                    className="rounded-full border border-primary-600 h-9 w-9 object-cover"
                    referrerPolicy="no-referrer"
                    fill
                  />
                </div>
                <span className="whitespace-nowrap active:scale-105">
                  {session.user.name}
                </span>
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <div className="flex gap-4">
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
            </div>
          )}
        </li>
      </ul>
    </nav>
  )
}
