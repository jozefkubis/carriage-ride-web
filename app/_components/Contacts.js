import Link from "next/link"
import { BsEnvelope } from "react-icons/bs"
import { LuPhone } from "react-icons/lu"
import { FiMapPin } from "react-icons/fi"
import MapWrapper from "../_components/MapWrapper"

export default function Contacts() {
  const officeAddress = "Tajovskeho 8540, Zilina 010 01, Slovakia"

  return (
    <div className="flex justify-between gap-10 w-full px-32 sm:px-28 pb-20 pt-6 max-w-screen-xl">
      {/* KONTAKTNÉ ÚDAJE */}
      <div className="flex flex-1 flex-col gap-10 justify-center">
        <ContactItem
          icon={<BsEnvelope />}
          title="Email"
          description="Napíšte nám na"
          detail="info@romantickejazdy.sk"
          href="mailto:info@romantickejazdy.sk"
        />
        <ContactItem
          icon={<LuPhone />}
          title="Telefón"
          description="Zavolajte nám na"
          detail="+421 907 123 456"
          href="tel:+421907123456"
        />
        <ContactItem
          icon={<FiMapPin />}
          title="Kancelária"
          description={officeAddress}
          detail="Trasa  &rarr;"
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            officeAddress
          )}`}
        />
      </div>

      {/* Google Mapa */}
      <div className="flex-1 rounded-lg flex items-center justify-center w-full h-[400px] shadow-2xl">
        <MapWrapper address={officeAddress} />
      </div>
    </div>
  )
}

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
