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
  router, // 👈 pridáme router ako parameter
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

    try {
      const result = await createGuest(new FormData(e.target))

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
