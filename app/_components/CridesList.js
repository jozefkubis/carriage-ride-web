import Image from "next/image"
import { getCrides } from "../_lib/data-service"

async function CridesList() {
  const crides = await getCrides()

  const titles = [
    "Jazdy pre páry na romantické chvíle",
    "Rodinné jazdy pre všetkých členov rodiny",
    "Špeciálne udalosti a oslavy v kočiari",
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full px-6 sm:px-20 lg:px-36 mb-16">
      {titles.map((title, index) => (
        <Card key={index} title={title} image={crides[index]?.image} />
      ))}
    </div>
  )
}

export default CridesList

function Card({ title, image }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 bg-primary-800 rounded-lg pb-6 shadow-xl hover:scale-110 transition-transform duration-300">
      <div className="w-full aspect-[4/3] relative rounded-t-lg shadow-md overflow-hidden">
        {image && (
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        )}
      </div>
      <p className="text-xl font-bold text-primary-50 italic px-4">{title}</p>
    </div>
  )
}
