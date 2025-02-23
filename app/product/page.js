import Image from "next/image"
import Link from "next/link"
import { getCrides } from "../_lib/data-service"

export const metadata = {
  title: "Naše jazdy",
}

export default async function Page() {
  const crides = await getCrides()

  const titles = [
    "Jazdy pre páry na romantické chvíle",
    "Rodinné jazdy pre všetkých členov rodiny",
    "Špeciálne udalosti a oslavy v kočiari",
  ]

  return (
    <div className="flex flex-col items-center bg-secondary-100 min-h-screen">
      {/* HEADER */}
      <header className="text-center mx-auto gap-5 my-20 px-5 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Naše romantické jazdy pre každého
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mt-4">
          Ponúkame rôzne typy jázd, ktoré sú ideálne pre páry, rodiny a
          špeciálne udalosti. Každá jazda je jedinečným zážitkom, ktorý si
          zamilujete.
        </p>
      </header>

      {/* GRID SEKCIA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-6 sm:px-20 lg:px-36 mb-16">
        {titles.map((title, index) => (
          <Card key={index} title={title} image={crides[index]?.image} />
        ))}
      </div>

      {/* TLAČIDLO */}
      <div className="flex justify-center my-10">
        <Link href="/reservation">
          <button className="bg-primary-200 text-primary-900 text-lg font-semibold px-6 py-3 rounded-md hover:bg-primary-300 transition focus:outline-none focus:ring-2 focus:ring-primary-500">
            Rezervovať
          </button>
        </Link>
      </div>
    </div>
  )
}

/* KOMPONENT KARTA */
function Card({ title, image }) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <div className="w-full aspect-[4/3] relative rounded-lg shadow-md overflow-hidden">
        {image && (
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        )}
      </div>
      <p className="text-xl font-bold text-gray-800">{title}</p>
    </div>
  )
}
