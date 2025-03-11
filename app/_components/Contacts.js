import { BsEnvelope } from "react-icons/bs"
import { FiMapPin } from "react-icons/fi"
import { LuPhone } from "react-icons/lu"
import MapWrapper from "../_components/MapWrapper"
import ContactItem from "./ConstactItem"
import { getSettings } from "../_lib/data-service"

export default async function Contacts() {

  const { address, email, phone, } = await getSettings()

  return (
    <div className="flex justify-between gap-10 w-full px-32 sm:px-28 pb-20 pt-6 max-w-screen-xl">
      {/* KONTAKTNÉ ÚDAJE */}
      <div className="flex flex-1 flex-col gap-10 justify-center">
        <ContactItem
          icon={<BsEnvelope />}
          title="Email"
          description="Napíšte nám na"
          detail={`${email}`}
          href={`mailto:${email}`}
        />
        <ContactItem
          icon={<LuPhone />}
          title="Telefón"
          description="Zavolajte nám na"
          detail={`+421 ${phone}`}
          href={`tel:+421${phone}`}
        />
        <ContactItem
          icon={<FiMapPin />}
          title="Kancelária"
          description={address}
          detail="Trasa  &rarr;"
          href={`https://www.google.com/maps/dir/?api=1&origin=my_location&destination=${encodeURIComponent(address)}`}
        />
      </div>

      {/* Google Mapa */}
      <div className="flex-1 rounded-lg flex items-center justify-center w-full h-[400px] shadow-2xl">
        <MapWrapper address={address} />
      </div>
    </div>
  )
}


