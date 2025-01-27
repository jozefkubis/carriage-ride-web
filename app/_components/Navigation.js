import Link from "next/link"

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/">Uvodan stranka</Link>
        </li>
        <li>
          <Link href="/product">Nase jazdy</Link>
        </li>
        <li>
          <Link href="/booking">Zajednat jazdu</Link>
        </li>
        <li>
          <Link href="/contact">Kontaktujte nas</Link>
        </li>
        <li className="flex gap-2">
          <Link href="/account">Prihlasit sa</Link>
          {" / "}
          <Link href="/account/registration">Registrovat</Link>
        </li>
      </ul>
    </nav>
  )
}
