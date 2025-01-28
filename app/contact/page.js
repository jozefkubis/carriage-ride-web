import Link from "next/link"
import { BsEnvelope } from "react-icons/bs"
import { LuPhone } from "react-icons/lu"
import { FiMapPin } from "react-icons/fi"

export default function page() {
  return (
    <div className="flex flex-col">
      <header className="flex flex-col gap-5 my-10 px-16 w-1/2">
        <h1 className="text-5xl font-bold">Kontaktujte nás</h1>
        <p className="text-lg">Sme tu pre vás, neváhajte nás osloviť.</p>
      </header>

      <div className="grid grid-cols-2 w-full px-16 pb-20 pt-6">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <div>
              <BsEnvelope />
            </div>
            <p className="font-bold text-xl">Email</p>
            <p>Napíšte nám na</p>
            <p className="underline">info@romantickejazdy.sk</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <LuPhone />
            </div>
            <p className="font-bold text-xl">Telefón</p>
            <p>Zavolajte nám na</p>
            <p className="underline">+421 907 123 456</p>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <FiMapPin />
            </div>
            <p className="font-bold text-xl">Kancelária</p>
            <p>Hlavná ulica 10, Bratislava 811 01, SK</p>
            <p>Adresa</p>
            <br />

            <Link href={""} className="gap-5">
              Trasa &rarr;
            </Link>
          </div>
        </div>
        <div className="bg-primary-200"></div>
      </div>
    </div>
  )
}
