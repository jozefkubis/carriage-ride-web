import ReservationForm from "../_components/ReservationForm"
import ReservationMessage from "../_components/ReservationMessage"
import { auth } from "../_lib/auth"
import { getCrides, getGuest } from "../_lib/data-service"
export const metadata = {
  title: "Rezervácia",
}

export default async function page() {
  const session = await auth()
  let guest = null

  if (session && session.user) {
    guest = await getGuest(session.user.email)
  }

  const crides = await getCrides()


  return session?.user ? <ReservationForm guest={guest} crides={crides} /> : <ReservationMessage />
}
