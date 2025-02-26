import { Suspense } from "react"
import Contacts from "../_components/Contacts"
import Spinner from "../_components/Spinner"

export const metadata = {
  title: "Kontakt",
}

export default function Page() {
  return (
    <div className="flex flex-col items-center bg-creamy-100 min-h-screen">
      {/* HEADER */}
      <header className="flex flex-col gap-5 my-10 px-5 sm:px-16 w-full max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Kontaktujte nás
        </h1>
        <p className="text-lg text-gray-600">
          Sme tu pre vás, neváhajte nás osloviť.
        </p>
      </header>

      <Suspense fallback={<Spinner />}>
        <Contacts />
      </Suspense>
    </div>
  )
}
