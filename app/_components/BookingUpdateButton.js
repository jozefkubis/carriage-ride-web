import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

function BookingUpdateButton() {
  const { pending } = useFormStatus()

  return (
    <div className="flex justify-center w-full mt-8">
      <button
        type="submit"
        disabled={pending}
        className="disable:bg-primary-300 w-1/3 bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition"
      >
        {pending ? <SpinnerMini /> : "Aktualizovať"}
      </button>
    </div>
  )
}

export default BookingUpdateButton
