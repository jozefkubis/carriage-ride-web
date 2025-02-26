import { Suspense } from "react"
import CridesList from "../_components/CridesList"
import ProductResButton from "../_components/ProductResButton"
import Spinner from "../_components/Spinner"

export const metadata = {
  title: "Naše jazdy",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-creamy-100 min-h-screen pb-10">
      {/* HEADER */}
      <header className="text-center mx-auto gap-5 my-20 px-5 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary-800">
          Naše romantické jazdy pre každého
        </h1>
        <p className="text-lg sm:text-xl text-primary-600 mt-4">
          Ponúkame rôzne typy jázd, ktoré sú ideálne pre páry, rodiny a
          špeciálne udalosti. Každá jazda je jedinečným zážitkom, ktorý si
          zamilujete.
        </p>
      </header>

      {/* GRID SEKCIA */}
      <Suspense fallback={<Spinner />}>
        <CridesList />
        <ProductResButton />
      </Suspense>
    </div>
  )
}
