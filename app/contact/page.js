import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import { LuPhone } from "react-icons/lu";
import { FiMapPin } from "react-icons/fi";
import MapWrapper from "../_components/MapWrapper";

export const metadata = {
  title: "Kontakt",
};

export default function Page() {
  const officeAddress = "Tajovskeho 8540, Zilina 010 01, Slovakia";

  return (
    <div className="flex flex-col items-center bg-creamy-100 min-h-screen">
      {/* HEADER */}
      <header className="flex flex-col gap-5 my-10 px-5 sm:px-16 w-full max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Kontaktujte nás
        </h1>
        <p className="text-lg text-gray-600">Sme tu pre vás, neváhajte nás osloviť.</p>
      </header>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-5 sm:px-16 pb-20 pt-6 max-w-screen-xl">
        {/* KONTAKTNÉ ÚDAJE */}
        <div className="flex flex-col gap-10">
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
            detail="Trasa &rarr;"
            href="#"
          />
        </div>

        {/* Google Mapa */}
        <div className="bg-primary-200 rounded-lg shadow-md flex items-center justify-center w-full h-[400px]">
          <MapWrapper address={officeAddress} />
        </div>
      </div>
    </div>
  );
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
