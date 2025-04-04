import React from "react"
import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

export default function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="disable:bg-creamy-300 bg-secondary-400 text-primary-800 font-semibold py-3 rounded-md hover:bg-secondary-700 transition my-4 w-full"
    >
      {pending ? <SpinnerMini /> : "Prihlásiť sa"}
    </button>
  )
}
