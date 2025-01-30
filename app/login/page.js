import LoginForm from "@/app/_components/LoginForm"
import GoogleLoginButton from "../_components/GoogleLoginButton.js"

export const metadata = {
  title: "Prihlásenie",
}

export default function page() {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
