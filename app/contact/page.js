import Link from "next/link"
import { BsEnvelope } from "react-icons/bs"
import { LuPhone } from "react-icons/lu"
import { FiMapPin } from "react-icons/fi"

export const metadata = {
  title: "Kontakt",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-primary-50 min-h-screen">
      {/* HEADER */}
      <header className="flex flex-col gap-5 my-10 px-5 sm:px-16 w-full max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Kontaktujte nás
        </h1>
        <p className="text-lg text-gray-600">
          Sme tu pre vás, neváhajte nás osloviť.
        </p>
      </header>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-5 sm:px-16 pb-20 pt-6 max-w-screen-xl">
        {/* KONTAKTNÉ ÚDAJE */}
        <div className="flex flex-col gap-10">
          {/* Email */}
          <ContactItem
            icon={<BsEnvelope />}
            title="Email"
            description="Napíšte nám na"
            detail="info@romantickejazdy.sk"
            href="mailto:info@romantickejazdy.sk"
          />

          {/* Telefón */}
          <ContactItem
            icon={<LuPhone />}
            title="Telefón"
            description="Zavolajte nám na"
            detail="+421 907 123 456"
            href="tel:+421907123456"
          />

          {/* Kancelária */}
          <ContactItem
            icon={<FiMapPin />}
            title="Kancelária"
            description="Hlavná ulica 10, Bratislava 811 01, SK"
            detail="Trasa &rarr;"
            href="#"
          />
        </div>

        {/* OBRÁZOK / MAPA */}
        <div className="bg-primary-200 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-primary-900 text-xl font-semibold">
            Tu môže byť mapa alebo obrázok
          </p>
        </div>
      </div>
    </div>
  )
}

/* KOMPONENT KONTAKTNÝCH ÚDAJOV */
function ContactItem({ icon, title, description, detail, href }) {
  return (
    <div className="flex items-start gap-4">
      {/* Ikona */}
      <div className="text-primary-500 text-3xl">{icon}</div>
      {/* Textová časť */}
      <div>
        <p className="font-bold text-xl text-gray-800">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
        <Link
          href={href}
          className="text-primary-600 underline font-medium hover:text-primary-700 transition"
        >
          {detail}
        </Link>
      </div>
    </div>
  )
}
