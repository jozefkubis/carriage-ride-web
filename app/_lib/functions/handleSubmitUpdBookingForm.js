import { toast } from "react-toastify"
import { updateBooking } from "../actions"

export async function handleSubmitUpdBookingForm(e) {
  e.preventDefault()

  const response = await updateBooking(new FormData(e.target))

  if (response?.error) {
    return toast.error(response.error, {
      position: "bottom-right",
      hideProgressBar: true,
    })
  }

  toast.success("Rezervácia bola úspešne aktualizovaná!", {
    position: "bottom-right",
    hideProgressBar: true,
  })
}
