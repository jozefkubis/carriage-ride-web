import { signIn } from "next-auth/react"
import { signInGuestAction } from "../actions"
import { toast } from "react-toastify"

export default async function handleSubmitLogForm(formData) {
  try {
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
      throw new Error("Neplatné prihlasovacie údaje")
    }
  } catch (err) {
    toast.warn(
      "Upss, chyba pri prihlásení! Skontroluj svoje prihlasovacie údaje.",
      { position: "bottom-right", hideProgressBar: true }
    )
    return { success: false, error: err.message }
  }
}
