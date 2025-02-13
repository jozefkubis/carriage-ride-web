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
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-b-lg shadow-md px-8 pb-8 space-y-6">
      <button
        onClick={() => startTransition(handleDelete)}
        className="w-full max-w-md bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md  transition"
      >
        {isPending ? <SpinnerMini /> : "Vymazať profil"}
      </button>
    </div>
  )
}

export default DeleteProfileButton
