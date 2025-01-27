import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="w-full">
      <ul className="flex items-center justify-between">
        <div className="flex gap-20">
          <li>
            <Link href="/">Úvodná stránka</Link>
          </li>
          <li>
            <Link href="/product">Naše jazdy</Link>
          </li>
          <li>
            <Link href="/booking">Zajednať jazdu</Link>
          </li>
          <li>
            <Link href="/contact">Kontaktujte nás</Link>
          </li>
        </div>
        <div>
          <li className="flex gap-2">
            <Link href="/account">Prihlásiť sa</Link>
            {" / "}
            <Link href="/account/registration">Registrovať</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}
