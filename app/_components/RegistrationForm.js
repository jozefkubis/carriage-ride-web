"use client"

import Link from "next/link"
import FormInput from "./FormInput"
import { createGuest } from "../_lib/actions"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/navigation"

export default function RegistrationForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password !== rePassword) {
      toast.warn("Heslá sa nezhodujú!", { position: "bottom-right" })
      setPassword("")
      setRePassword("")
      return
    }

    try {
      const result = await createGuest(new FormData(e.target))

      if (!result.success) {
        setFullName("")
        setEmail("")
        setPhone("")
        setPassword("")
        setRePassword("")
        // 👇 Zobrazíme chybovú správu, ak existuje užívateľ
        toast.error(result.error, { position: "bottom-right" })
        return
      }

      toast.success("Registrácia bola úspešná!", { position: "bottom-right" })

      setFullName("")
      setEmail("")
      setPhone("")
      setPassword("")
      setRePassword("")

      setTimeout(() => {
        router.push("/login")
      }, 2000)
    } catch (error) {
      toast.error("Niečo sa pokazilo!", { position: "bottom-right" })
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Registrácia
        </h2>

        {/* Meno */}
        <FormInput
          label="Meno"
          id="fullName"
          type="text"
          placeholder="Vaše meno"
          name="fullName"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
        />

        {/* Email */}
        <FormInput
          label="Email"
          id="email"
          type="email"
          placeholder="example@email.com"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        {/* Telefón */}
        <FormInput
          label="Telefón"
          id="phone"
          type="tel"
          placeholder="+421 123 456 789"
          pattern="[+][0-9]{1,3}[0-9]{9,14}"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />

        {/* Heslo */}
        <FormInput
          label="Heslo"
          id="password"
          type="password"
          placeholder="Vaše heslo"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        {/* Potvrdenie hesla */}
        <FormInput
          label="Potvrdenie hesla"
          id="re-password"
          type="password"
          placeholder="Potvrdenie hesla"
          name="re-password"
          onChange={(e) => setRePassword(e.target.value)}
          value={rePassword}
          required
        />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Chybová správa */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Tlačidlo */}
        <button
          type="submit"
          className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Registrovať sa
        </button>

        {/* Link na prihlásenie */}
        <p className="text-sm text-center text-gray-600">
          Už máte účet?{" "}
          <Link href="/login" className="text-primary-600 hover:underline">
            Prihláste sa
          </Link>
        </p>
      </form>
    </div>
  )
}
