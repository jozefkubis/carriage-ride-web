import { toast } from "react-toastify"
import { createReference } from "../actions"

export async function handleSubmitReferences(e, { onClose }) {
  e.preventDefault()

  const response = await createReference(new FormData(e.target))

  if (response?.error) {
    return toast.error(response.error, {
      position: "bottom-right",
      hideProgressBar: true,
    })
  }

  toast.success("Referencia bola úspešne pridaná!", {
    position: "bottom-right",
    hideProgressBar: true,
  })

  setTimeout(() => {
    onClose()
  }, 2000)
}
