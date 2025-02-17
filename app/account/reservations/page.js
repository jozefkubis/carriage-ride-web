import ReservationCard from "@/app/_components/ReservationCard"
import UpdateBookingForm from "@/app/_components/UpdateBookingForm"
import { auth } from "@/app/_lib/auth"
import { getBookingsRegistered, getCrides } from "@/app/_lib/data-service"
import Link from "next/link"

export const metadata = {
  title: "Moje rezervácie",
}

export default async function Page() {
  const session = await auth()
  const bookings = await getBookingsRegistered(session.user.guestId)
  const crides = await getCrides()

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col pl-20 pt-20 gap-5 h-screen w-full">
        <h1 className="text-2xl">Moje rezervácie</h1>

        {!bookings.length ? (
          <p>
            Zatiaľ nemáte žiadne rezervácie. Rezervovať jazdu{" "}
            <Link className="underline text-accent-500" href="/reservation">
              tu &rarr;
            </Link>
          </p>
        ) : (
          <div>
            <ul className="flex flex-wrap gap-5">
              {bookings.map((booking) => (
                <ReservationCard
                  booking={booking}
                  crides={crides}
                  key={booking.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
