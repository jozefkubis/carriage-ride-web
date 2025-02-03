"use client"

import { signInAction } from "@/app/_lib/actions"
import { useTransition } from "react"
import SpinnerMini from "./SpinnerMini"

function GoogleLoginButton() {
  const [isPending, startTransition] = useTransition()

  function handleSubmit() {
    startTransition(() => signInAction("google"))
  }

  return isPending ? (
    <div className="w-full h-full flex items-center justify-center">
      <SpinnerMini />
    </div>
  ) : (
    <button
      onClick={handleSubmit}
      className="w-full bg-white text-gray-700 font-medium py-2 rounded-md hover:bg-primary-50 transition shadow-md border border-gray-200 flex items-center justify-center gap-3"
    >
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>Pokračovať s Google</span>
    </button>
  )
}

export default GoogleLoginButton
