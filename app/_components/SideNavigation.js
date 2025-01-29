"use client"

import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid"
import SignOutButton from "./SignOutButton"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  {
    name: "Domov",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-300" />,
  },
  {
    name: "Moje rezervácie",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-300" />,
  },
  {
    name: "Môj profil",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-300" />,
  },
]

function SideNavigation() {
  const pathname = usePathname()

  return (
    <nav className="border-r border-primary-900 py-20">
      <ul className="flex flex-col gap-2 h-full">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-100 transition-colors flex items-center gap-4 font-semibold ${pathname === link.href ? "bg-primary-100" : ""
                }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  )
}

export default SideNavigation
