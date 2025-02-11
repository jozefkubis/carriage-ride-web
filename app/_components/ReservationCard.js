"use client"

export default function ReservationCard({ booking }) {
  const {
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

  return (
    <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white w-full mx-auto max-w-xl">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">📝 <span className="ml-2">{name}</span></h3>

      <div className="grid grid-cols-2 gap-4 text-gray-700">
        <p>
          <span className="font-bold">Meno:</span> {fullName}
        </p>
        <p>
          <span className="font-bold">Email:</span> {email}
        </p>
        <p>
          <span className="font-bold">Dátum:</span> {date}
        </p>
        <p>
          <span className="font-bold">Čas:</span> {time}
        </p>
        <p>
          <span className="font-bold">Telefón:</span> {phone}
        </p>
        <p>
          <span className="font-bold">Počet hostí:</span> {numGuests}
        </p>
      </div>

      {notes && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-gray-700">
            <span className="font-bold">🗒 Poznámky:</span> {notes}
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <span className="text-lg font-medium text-gray-900">💰 Cena:</span>
        <span className="text-2xl font-semibold text-green-600">
          <span className="text-lg line-through mr-2">{discount ? regularPrice + "€" : ""}</span>{totalPrice}€
        </span>
      </div>
    </div>
  )
}
