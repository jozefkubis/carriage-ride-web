import LoginForm from "@/app/_components/LoginForm"
import { auth } from "../_lib/auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Prihlásenie",
}

export default async function page() {

  const session = await auth()

  return (
    <>
      {!session?.user ? <div>
        <LoginForm />
      </div> : redirect("/account")}
    </>
  )
}
