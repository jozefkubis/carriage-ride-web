"use client"

import Link from "next/link"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import handleSubmitLogForm from "../_lib/functions/handleSubmitLogForm"
import FormInput from "./FormInput"
import GoogleLoginButton from "./GoogleLoginButton.js"
import LoginButton from "./LoginButton"

export default function LoginForm() {

  async function handleSubmit(e) {
    await handleSubmitLogForm(e)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 gap-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Prihlásenie
        </h2>

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

        <LoginButton />
        <GoogleLoginButton />

        <p className="text-sm text-center text-gray-600">
          Nemáte účet?{" "}
          <Link
            href="/registration"
            className="text-primary-600 hover:underline"
          >
            Zaregistrujte sa
          </Link>
        </p>
        {/* <div className="w-full h-full"></div> */}
      </form>
    </div>
  )
}
