import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createGuest } from "../actions"

export function handleSubmitRegForm({
  setFullName,
  setEmail,
  setPhone,
  setPassword,
  setRePassword,
  password,
  rePassword,
  image, // ⬅️ Pridáme image ako parameter
  router,
}) {
  return async (e) => {
    e.preventDefault()

    if (password !== rePassword) {
      toast.warn("Heslá sa nezhodujú!", {
        position: "bottom-right",
        hideProgressBar: true,
      })
      setPassword("")
      setRePassword("")
      return
    }

    // 🔥 Vytvoríme FormData a manuálne pridáme súbor
    const formData = new FormData(e.target)
    if (image) {
      formData.append("image", image) // ✅ Pridáme obrázok správne
    }

    try {
      const result = await createGuest(formData)

      if (!result.success) {
        setFullName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setRePassword("")
        toast.error(result.error, {
          position: "bottom-right",
          hideProgressBar: true,
        })
        return
      }

      toast.success("Registrácia bola úspešná!", {
        position: "bottom-right",
        hideProgressBar: true,
      })

      toast.info("Overovací email bude čoskoro dostupný.", {
        position: "bottom-right",
        hideProgressBar: true,
      })

      setFullName("")
      setEmail("")
      setPhone("")
      setPassword("")
      setRePassword("")

      setTimeout(() => {
        router.push("/login")
      }, 3000)
    } catch (error) {
      toast.error("Niečo sa pokazilo!", {
        position: "bottom-right",
        hideProgressBar: true,
      })
    }
  }
}
