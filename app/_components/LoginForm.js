"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import FormInput from "./FormInput"
import GoogleLoginButton from "./GoogleLoginButton.js"
import { signInGuestAction } from "../_lib/actions"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function LoginForm() {
  const [error, setError] = useState(null)

  async function handleSubmit(formData) {
    try {
      // Zavoláme serverovú akciu
      const result = await signInGuestAction(formData)

      if (result?.success) {
        // Ak úspešne overené, spustíme `signIn()` na klientovi
        await signIn("credentials", {
          email: result.email,
          password: result.password,
          redirect: true,
          callbackUrl: "/account",
        })
      }
    } catch (err) {
      toast.warn("Upss, chyba pri prihlásení! Skontroluj svoje prihlasovacie údaje.", { position: "bottom-right", hideProgressBar: true, })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 gap-10">
      <form
        action={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Prihlásenie
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="flex flex-col">
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="example@email.com"
            name="email"
            required
          />
        </div>

        <div className="flex flex-col">
          <FormInput
            label="Heslo"
            id="password"
            type="password"
            placeholder="Vaše heslo"
            name="password"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2 rounded border-gray-300 focus:ring-primary-500"
            />
            Zapamätať si ma
          </label>
          <a href="#" className="text-sm text-primary-600 hover:underline">
            Zabudli ste heslo?
          </a>
        </div>

        <ToastContainer />

        <button
          type="submit"
          className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Prihlásiť sa
        </button>

        <p className="text-sm text-center text-gray-600">
          Nemáte účet?{" "}
          <Link
            href="/registration"
            className="text-primary-600 hover:underline"
          >
            Zaregistrujte sa
          </Link>
        </p>
      </form>

      <div className="">
        <GoogleLoginButton />
      </div>
    </div>
  )
}
