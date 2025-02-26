import Link from "next/link"

export default function ProductResButton() {
  return (
    <div className="flex justify-center my-10">
      <Link href="/reservation">
        <button className="bg-primary-800 text-primary-50 text-lg font-semibold px-6 py-3 rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500">
          Rezervovať
        </button>
      </Link>
    </div>
  )
}
