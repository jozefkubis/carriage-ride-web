import React from "react"
import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

export default function SubmitReferenceButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="disable:bg-creamy-300 w-full bg-secondary-400 text-primary-800 font-semibold py-3 rounded-md hover:bg-secondary-700 transition my-4"
    >
      {pending ? <SpinnerMini /> : "Odoslať recenziu"}
    </button>
  )
}
