import Image from "next/image"
import Link from "next/link"

export default function Page() {
  const titlepic =
    "https://jlfekazftgytoziyfzfn.supabase.co/storage/v1/object/public/productPics//titlepic.png"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-xl h-auto md:h-[80vh] px-6 sm:px-12 md:px-16 lg:px-32 py-10 gap-10">
        {/* TEXTOVÁ ČASŤ */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Carriage Ride
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Vitajte na našej stránke, kde ponúkame romantické jazdy mestom v
            kočiari s koňmi. Užite si nezabudnuteľné chvíle s vašimi blízkymi.
          </p>
          <Link href="/product">
            <button className="mt-4 w-fit px-6 py-3 bg-primary-200 text-primary-900 font-semibold rounded-md hover:bg-primary-300 transition focus:outline-none focus:ring-2 focus:ring-primary-500">
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
