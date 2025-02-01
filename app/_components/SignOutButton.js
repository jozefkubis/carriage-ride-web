import { PowerIcon } from "@heroicons/react/24/solid"
import { signOutAction } from "@/app/_lib/actions"

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="py-2 px-6 bg-accent-300 hover:bg-accent-400 transition-all flex items-center gap-3 font-semibold w-full rounded-full scale-95 hover:scale-100 active:scale-95 shadow-md hover:shadow-lg focus:outline-none">
        <PowerIcon className="h-6 w-6 text-primary-700 transition-transform duration-200 hover:rotate-90" />
        <span className="text-primary-700">Odhlásiť sa</span>
      </button>
    </form>
  )
}

export default SignOutButton
