import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

export default function BookingUpdateButton({ onClose }) {
  const { pending } = useFormStatus()

  function handleClick() {
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  return (
    <div className="flex justify-center w-full mt-8">
      <button
        onClick={handleClick}
        type="submit"
        disabled={pending}
        className="disable:bg-creamy-300 bg-secondary-400 text-primary-800 font-semibold py-3 rounded-md hover:bg-secondary-700 transition my-4 w-1/3"
      >
        {pending ? <SpinnerMini /> : "Aktualizovať"}
      </button>
    </div>
  )
}

// export default BookingUpdateButton
