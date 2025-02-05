import { toast } from "react-toastify"
import { signOutAction, updateGuest } from "../actions"

export async function handleSubmitUpdForm(e) {

    e.preventDefault()

    const response = await updateGuest(new FormData(e.target))

    if (response.logout) {
        confirm("Váš email alebo heslo boli zmenené. Prihláste sa znova.")
        return await signOutAction()
    }

    if (response.error)
        return toast.error(response.error, {
            position: "bottom-right",
            hideProgressBar: true,
        })

    toast.success("Profil bol úspešne aktualizovaný!", {
        position: "bottom-right",
        hideProgressBar: true,
    })
}