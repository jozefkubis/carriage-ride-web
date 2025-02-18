import romanticproduct from "@/public/romanticproduct.png"
import familyproduct from "@/public/familyproduct.png"
import specialproduct from "@/public/specialproduct.png"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Naše jazdy",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-gray-50">
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
        {/* KARTA 1 */}
        <Card
          title="Jazdy pre páry na romantické chvíle"
          image={romanticproduct}
        />

        {/* KARTA 2 */}
        <Card
          title="Rodinné jazdy pre všetkých členov rodiny"
          image={familyproduct}
        />
        {/* KARTA 3 */}
        <Card
          title="Špeciálne udalosti a oslavy v kočiari"
          image={specialproduct}
        />
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
function Card({ title, bgClass, image }) {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      {/* Obrázok */}
      <div className="w-full aspect-[4/3] relative rounded-lg shadow-md overflow-hidden">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      {/* Nadpis karty */}
      <p className="text-xl font-bold text-gray-800">{title}</p>
    </div>
  )
}
