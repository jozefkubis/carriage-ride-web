import React from "react"
import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

export default function RegFormButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="disable:bg-primary-300 w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition"
    >
      {pending ? <SpinnerMini /> : " Registrovať sa"}
    </button>
  )
}
