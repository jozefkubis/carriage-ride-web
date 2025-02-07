import ReservationForm from "../_components/ReservationForm"
import { auth } from "../_lib/auth"
import { getGuest } from "../_lib/data-service"
export const metadata = {
  title: "Rezervácia",
}

export default async function page() {
  const session = await auth()
  let guest = null

  if (session && session.user) {
    guest = await getGuest(session.user.email)
  }

  return (
    <div>
      <ReservationForm guest={guest} session={session} />
    </div>
  )
}
