import { toast } from "react-toastify"
import { createBooking } from "../actions"
import { redirect } from "next/navigation"

export async function handleSubmitResForm(e) {
    try {
        e.preventDefault()

        const formData = new FormData(e.target)
        const response = await createBooking(formData)

        if (response?.success) {
            toast.success("Rezervácia bola úspešne odoslaná!", {
                position: "bottom-right",
                hideProgressBar: true,
                autoClose: 3000,
            })

            setTimeout(() => {
                redirect("/account/reservations")
            }, 3000)
        } else {
            toast.error("Niekde v registrovaní nastala chyba", {
                position: "bottom-right",
                hideProgressBar: true,
            })
        }
    } catch (err) {
        toast.error(err.message, {
            position: "bottom-right",
            hideProgressBar: true,
        })
    }
}
