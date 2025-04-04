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
    await signOutAction()
    if (response.success) {
      toast.success("Profil bol vymazaný!", {
        position: "bottom-right",
        hideProgressBar: true,
        autoClose: 3000,
      })
    } else {
      toast.error("Nastala chyba pri mazaní profilu.", {
        position: "bottom-right",
        hideProgressBar: true,
        autoClose: 3000,
      })
    }
  }

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => startTransition(handleDelete)}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform  hover:shadow-lg w-full"
      >
        {isPending ? <SpinnerMini /> : "Vymazať profil"}
      </button>
    </div>
  )
}

export default DeleteProfileButton
