import LoginForm from "@/app/_components/LoginForm"
import { auth } from "../_lib/auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Prihlásenie",
}

export default async function Page() {
  const session = await auth()

  if (session?.user) {
    redirect("/account") // ✅ Prihláseného hosťa hneď presmerujeme
  }

  return (
    <div>
      <LoginForm />
    </div>
  )
}
