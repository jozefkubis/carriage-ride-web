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

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleSignOut}
        className="py-4 px-8 bg-secondary-400 hover:bg-secondary-700 transition-all flex items-center gap-3 font-semibold w-full rounded-lg active:scale-95 shadow-md hover:shadow-lg focus:outline-none"
      >
        {isPending ? (
          <SpinnerMini />
        ) : (
          <>
            <PowerIcon className="h-6 w-6 text-primary-800 transition-transform duration-200 hover:rotate-90" />
            <span className="text-primary-700">Odhlásiť sa</span>
          </>
        )}
      </button>
    </div>
  )
}

export default SignOutButton
