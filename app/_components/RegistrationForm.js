"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormInput from "./FormInput"
import { handleSubmitRegForm } from "../_lib/functions/handleSubmitRegForm"
import RegFormButton from "./RegFormButton"
import GoogleLoginButton from "./GoogleLoginButton.js"

export default function RegistrationForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [error, setError] = useState("")
  const [image, setImage] = useState("")
  const router = useRouter() // 👈 Presunieme useRouter sem

  const handleSubmit = handleSubmitRegForm({
    setFullName,
    setEmail,
    setPhone,
    setPassword,
    setRePassword,
    password,
    rePassword,
    router, // 👈 Pošleme router ako parameter
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Registrácia
        </h2>

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

        <FormInput
          label="Pridaj obrázok"
          id="image"
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          required
        />

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <RegFormButton />
        <GoogleLoginButton />

      </form>
    </div>
  )
}
