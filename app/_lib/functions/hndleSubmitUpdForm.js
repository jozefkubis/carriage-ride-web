import { toast } from "react-toastify"
import { signOutAction, updateGuest } from "../actions"

export async function handleSubmitUpdForm(
  e,
  { password, repassword, setRepassword, image }
) {
  e.preventDefault()

  if (password !== repassword) {
    toast.warn("Heslá sa nezhodujú!", {
      position: "bottom-right",
      hideProgressBar: true,
    })
    setRepassword("")
    return
  }

  // 🔥 Vytvoríme FormData a manuálne pridáme obrázok
  const formData = new FormData(e.target)
  if (image && image instanceof File) {
    formData.append("image", image) // ✅ Pridáme obrázok správne
  }

  const response = await updateGuest(formData)

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
