"use client"

import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { handleSubmitUpdForm } from "../_lib/functions/hndleSubmitUpdForm"
import FormInput from "./FormInput"
import UpdFormButton from "./UpdFormButton"
import DeleteProfileButton from "./DeleteProfileButton"

export default function ProfileUpdateForm({ guest }) {
  const [fullName, setFullName] = useState(guest?.fullName || "")
  const [email, setEmail] = useState(guest?.email || "")
  const [phone, setPhone] = useState(guest?.phone || "")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")


  async function handleSubmit(e) {
    await handleSubmitUpdForm(e, { password, repassword, setRepassword })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-t-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Aktualizuj svoj profil
        </h2>

        <FormInput
          label="Meno"
          id="fullName"
          type="text"
          name="fullName"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          label="Telefón"
          id="phone"
          type="tel"
          name="phone"
          pattern="[+][0-9]{1,3}[0-9]{9,14}"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <FormInput
          label="Heslo (ponechajte prázdne, ak nechcete meniť)"
          id="password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Vaše heslo"
        />
        <FormInput
          label="Potvrdenie hesla"
          id="repassword"
          type="password"
          name="repassword"
          onChange={(e) => setRepassword(e.target.value)}
          value={repassword}
          placeholder="Potvrdenie hesla"
        />

        <ToastContainer />
        <UpdFormButton />
      </form>
      <DeleteProfileButton guestId={guest.id} />
    </div>
  )
}
