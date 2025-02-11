"use client"

import { useTransition } from "react"
import { toast } from "react-toastify"
import { deleteGuest, signOutAction } from "../_lib/actions"
import SpinnerMini from "./SpinnerMini"


function DeleteProfileButton({ guestId }) {
    const [isPending, startTransition] = useTransition()

    async function handleDelete() {
        if (!confirm("Chcete vymazať profil?")) return

        const response = await deleteGuest(guestId)
        if (response.success) {
            toast.success("Profil bol vymazaný!", {
                position: "bottom-right",
                hideProgressBar: true,
                autoClose: 3000
            })
            await signOutAction()
        }
    }


    return (
        <div className="w-full max-w-md bg-white rounded-b-lg shadow-md px-8 pb-8 space-y-6" >
            <button
                onClick={() => startTransition(handleDelete)}
                className="w-full max-w-md bg-secondary-800 text-white font-semibold py-2 rounded-md hover:bg-secondary-900 transition"
            >
                {isPending ? <SpinnerMini /> : "Vymazať profil"}
            </button>
        </div>
    )
}

export default DeleteProfileButton
