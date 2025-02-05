import { toast } from "react-toastify"
import { signOutAction, updateGuest } from "../actions"

export async function handleSubmitUpdForm(e, { password, repassword, setRepassword }) {

    e.preventDefault()

    const response = await updateGuest(new FormData(e.target))

    if (password !== repassword) {
        toast.warn("Heslá sa nezhodujú!", {
            position: "bottom-right",
            hideProgressBar: true,
        })
        setRepassword("")
        return
    }

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