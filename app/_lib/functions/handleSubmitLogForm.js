import { signIn } from "next-auth/react"
import { signInGuestAction } from "../actions"
import { toast } from "react-toastify"

export default async function handleSubmitLogForm(e) {
  try {
    e.preventDefault()

    const formData = new FormData(e.target)
    const result = await signInGuestAction(formData)

    if (result?.success) {
      await signIn("credentials", {
        email: result.email,
        password: result.password,
        redirect: true,
        callbackUrl: "/account",
      })
      return { success: true }
    } else {
      toast.error("Niekde v prihlasovaní sa stala chyba!", {
        position: "bottom-right",
        hideProgressBar: true,
      })
    }
  } catch (err) {
    toast.error(err.message, {
      position: "bottom-right",
      hideProgressBar: true,
    })
    return { success: false, error: err.message }
  }
}
