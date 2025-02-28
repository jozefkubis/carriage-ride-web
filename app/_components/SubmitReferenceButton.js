import React from "react"
import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

export default function SubmitReferenceButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="bg-primary-800 text-white py-2 rounded-md hover:bg-primary-600 transition"
    >
      {pending ? <SpinnerMini /> : "Odoslať recenziu"}
    </button>
  )
}
