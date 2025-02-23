"use client"

import SpinnerMini from "./SpinnerMini"
import { deleteGuest, signOutAction } from "../_lib/actions"
import { useTransition } from "react"
import { toast } from "react-toastify"

function DeleteProfileButton({ guestId }) {
  const [isPending, startTransition] = useTransition()

  async function handleDelete() {
    if (!confirm("Chcete vymazať profil?")) return

    const response = await deleteGuest(guestId)
    if (response.success) {
      toast.success("Profil bol vymazaný!", {
        position: "bottom-right",
        hideProgressBar: true,
        autoClose: 3000,
      })
      await signOutAction()
    } else {
      toast.error("Nastala chyba pri mazaní profilu.", {
        position: "bottom-right",
        hideProgressBar: true,
        autoClose: 3000,
      })
    }
  }

  return (
    <div className="mt-8 w-2/3 flex justify-end pr-10">
      <button
        onClick={() => startTransition(handleDelete)}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
      >
        {isPending ? <SpinnerMini /> : "Vymazať profil"}
      </button>
    </div>
  )
}

export default DeleteProfileButton
