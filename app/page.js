import Image from "next/image"
import Link from "next/link"
import { getLandingPageData } from "./_lib/data-service"

export const revalidate = 86400

export default async function Page() {

const landingPage = await getLandingPageData()

const {header, text, image} = landingPage

  const titlepic = image
    

  return (
    <div className="min-h-screen flex items-center justify-center bg-creamy-100">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-xxl h-auto md:h-[80vh] px-6 sm:px-12 md:px-16 lg:px-44 pb-10 gap-10">
        {/* TEXTOVÁ ČASŤ */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-800 leading-tight">
            {header}
          </h1>
          <p className="text-base sm:text-lg text-primary-600">
            {text}
          </p>
          <Link href="/product">
            <button className="mt-4 w-fit px-6 py-3 bg-primary-800 text-primary-50 font-semibold rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500">
              Viac informácií
            </button>
          </Link>
        </div>

        {/* OBRÁZKOVÁ ČASŤ */}
        <div className="relative">
          <Image
            className="object-cover rounded-md shadow-md"
            src={titlepic}
            alt="Carriage Ride"
            fill
          />
        </div>
      </div>
    </div>
  )
}
