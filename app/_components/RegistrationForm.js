"use client"

import { useRouter } from "next/navigation"
import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
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

  // 🖼 Funkcia na spracovanie obrázka cez Dropzone
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setImage(acceptedFiles[0]) // ✅ Uložíme len prvý súbor
    }
  }, [])

  // 🖼 Nastavenie Dropzone (fix MIME typov)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
    },
    multiple: false,
  })

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

        <ImageUploader onImageSelect={setImage} />

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
