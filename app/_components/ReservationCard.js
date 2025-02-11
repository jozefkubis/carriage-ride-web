"use client"

import { format, parseISO } from "date-fns"

export default function ReservationCard({ booking }) {
  const {
    created_at,
    fullName,
    email,
    date,
    time,
    phone,
    numGuests,
    notes,
    cride: { regularPrice, discount, name },
  } = booking

  const totalPrice = regularPrice - discount

  const formattedDate = date
    ? format(parseISO(date), "dd.MM.yyyy")
    : "Neposkytnuté"

  const formattedTime = time.slice(0, 5)

  const formattedCreatedAt = created_at
    ? format(parseISO(created_at), "dd.MM.yyyy")
    : "Neposkytnuté"

  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white w-full mx-auto max-w-xl">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          📝 <span className="ml-2">{name}</span>
        </h3>
        <p>
          <span className="font-bold">Vytvorené:</span> {formattedCreatedAt}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <p>
          <span className="font-bold">Meno:</span> {fullName}
        </p>
        <p>
          <span className="font-bold">Email:</span> {email}
        </p>
        <p>
          <span className="font-bold">Dátum:</span> {formattedDate}
        </p>
        <p>
          <span className="font-bold">Čas:</span> {formattedTime}
        </p>
        <p>
          <span className="font-bold">Telefón:</span> {phone}
        </p>
        <p>
          <span className="font-bold">Počet hostí:</span> {numGuests}
        </p>
      </div>

      <div className="mt-6">
        <span className="font-bold text-gray-700">🗒 Poznámka</span>
        {notes ? (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-800">{notes}</p>
          </div>
        ) : (
          <div className="mt-4 p-4 bg-gray-100 rounded-md">
            <p className="text-gray-400 italic">Nemáte žiadnu poznámku...</p>
          </div>
        )}
      </div>


      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <span className="text-lg font-medium text-gray-900">💰 Cena:</span>
        <span className="text-2xl font-semibold text-green-600">
          <span className="text-lg line-through mr-2">
            {discount ? regularPrice + "€" : ""}
          </span>
          {totalPrice}€
        </span>
      </div>
    </div>
  )
}
