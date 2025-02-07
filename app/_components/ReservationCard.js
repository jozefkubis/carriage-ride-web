"use client"

export default function ReservationCard({ booking }) {
  const {
    createdAt,
    fullName,
    email,
    date,
    time,
    phone,
    numGuests,
    notes,
    // cride: { regularPrice, discount, totalPrice, extraprice, id },
  } = booking

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <p>
        <strong>Meno:</strong> {fullName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Dátum:</strong> {date}
      </p>
      <p>
        <strong>Čas:</strong> {time}
      </p>
      <p>
        <strong>Telefón:</strong> {phone}
      </p>
      <p>
        <strong>Počet hostí:</strong> {numGuests}
      </p>
      {notes && (
        <p>
          <strong>Poznámky:</strong> {notes}
        </p>
      )}
      <p>
        <strong>Datum vytvorenia:</strong> {createdAt}
      </p>
    </div>
  )
}
