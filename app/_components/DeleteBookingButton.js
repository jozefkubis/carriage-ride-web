import { deleteBooking } from "../_lib/actions"

export default function DeleteBookingButton({ bookingId }) {
  const handleDelete = async () => {
    if (!confirm("Chcete vymazať jazdu?")) return
    await deleteBooking(bookingId)
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-1/2"
    >
      Vymazať jazdu
    </button>
  )
}
