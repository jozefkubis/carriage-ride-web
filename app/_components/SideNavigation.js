"use client"

import { CalendarDaysIcon, HomeIcon, UserIcon } from "@heroicons/react/24/solid"
import SignOutButton from "./SignOutButton"
import Link from "next/link"
import { usePathname } from "next/navigation"
import DeleteProfileButton from "./DeleteProfileButton"

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

function SideNavigation({ guest }) {
  const pathname = usePathname()

  return (
    <nav className="border-r border-primary-900 py-10 bg-primary-800 text-primary-50 shadow-md min-h-screen w-64">
      <ul className="flex flex-col gap-2 h-full">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 rounded-lg hover:bg-primary-100 hover:text-primary-800 transition-colors flex items-center gap-4 font-semibold 
                ${pathname === link.href
                  ? "bg-primary-100 text-primary-800"
                  : ""
                }`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto px-5 flex flex-col gap-4">
          <SignOutButton />
          <DeleteProfileButton guestId={guest?.id} />
        </li>
      </ul>
    </nav>
  )
}

export default SideNavigation
