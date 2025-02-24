"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormInput from "./FormInput"
import { handleSubmitRegForm } from "../_lib/functions/handleSubmitRegForm"
import RegFormButton from "./RegFormButton"
import GoogleLoginButton from "./GoogleLoginButton.js"
import ImageUploader from "./ImageUploader"

export default function RegistrationForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [error, setError] = useState("")
  const [image, setImage] = useState(null) // ✅ Ukladáme ako File objekt
  const router = useRouter()

  const handleSubmit = handleSubmitRegForm({
    setFullName,
    setEmail,
    setPhone,
    setPassword,
    setRePassword,
    password,
    rePassword,
    image, // ✅ Odovzdáme obrázok
    router,
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-50">
      <div className="flex bg-white rounded-lg shadow-2xl p-8 space-x-8 max-w-4xl w-full">
        {/* 📜 Formulár */}
        <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Registrácia
          </h2>

          {/* 🔹 Grid layout pre lepšie rozloženie */}
          <div className="grid grid-cols-2 gap-4">
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
          </div>

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

          <div className="grid grid-cols-2 gap-4">
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
          </div>

          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <RegFormButton />
          <GoogleLoginButton />
        </form>

        <div className="w-1/3 flex items-center justify-center">
          <ImageUploader onImageSelect={setImage} />
        </div>
      </div>
    </div>
  )
}
