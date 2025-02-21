"use client"

import { PowerIcon } from "@heroicons/react/24/solid"
import { signOutAction } from "@/app/_lib/actions"
import { useTransition } from "react"
import SpinnerMini from "./SpinnerMini"

function SignOutButton() {
  const [isPending, startTransition] = useTransition()

  function handleSignOut() {
    if (!confirm("Chcete sa odhlásiť?")) return
    startTransition(() => signOutAction())
  }

  return isPending ? (
    <SpinnerMini />
  ) : (
    <button
      onClick={handleSignOut}
      className="py-2 px-6 bg-accent-300 hover:bg-accent-400 transition-all flex items-center gap-3 font-semibold w-full rounded-full scale-95 hover:scale-100 active:scale-95 shadow-md hover:shadow-lg focus:outline-none"
    >
      <PowerIcon className="h-6 w-6 text-primary-700 transition-transform duration-200 hover:rotate-90" />
      <span className="text-primary-700">Odhlásiť sa</span>
    </button>
  )
}

export default SignOutButton
