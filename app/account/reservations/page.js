import ReservationCard from "@/app/_components/ReservationCard"
import { auth } from "@/app/_lib/auth"
import { getBookingsRegistered } from "@/app/_lib/data-service"
import Link from "next/link"

export const metadata = {
  title: "Moje rezervácie",
}

export default async function Page() {
  const session = await auth()
  const bookings = await getBookingsRegistered(session.user.guestId)

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col pl-20 pt-20 gap-5 h-screen w-full">
        <h1 className="text-2xl">Moje rezervácie</h1>

        {bookings.length === 0 ? (
          <p>
            Zatiaľ nemáte žiadne rezervácie. Rezervovať jazdu{" "}
            <Link className="underline text-accent-500" href="/booking">
              tu &rarr;
            </Link>
          </p>
        ) : (
          <ul>
            {bookings.map((booking) => (
              <ReservationCard booking={booking} key={booking.id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
