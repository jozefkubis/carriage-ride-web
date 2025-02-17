import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

function BookingUpdateButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition"
    >
      {pending ? <SpinnerMini /> : "Aktualizovať"}
    </button>
  )
}

export default BookingUpdateButton
