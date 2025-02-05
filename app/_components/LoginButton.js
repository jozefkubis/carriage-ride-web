import React from "react"
import { useFormStatus } from "react-dom"

export default function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition"
    >
      {pending ? "Prihlasujem..." : "Prihlásiť sa"}
    </button>
  )
}
