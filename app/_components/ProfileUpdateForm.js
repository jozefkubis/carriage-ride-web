"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import FormInput from "./FormInput"
import { signOutAction, updateGuest } from "../_lib/actions"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function ProfileUpdateForm({ guest }) {
  const [fullName, setFullName] = useState(guest.fullName)
  const [email, setEmail] = useState(guest.email)
  const [phone, setPhone] = useState(guest.phone)
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")
  const [error, setError] = useState("")
  // const [success, setSuccess] = useState("")
  // const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    // setSuccess("")

    const response = await updateGuest(new FormData(e.target))

    if (response.logout) {
      confirm("Váš email alebo heslo boli zmenené. Prihláste sa znova.")
      return await signOutAction()
    }

    if (response.error)
      return toast.error(response.error, {
        position: "bottom-right",
        hideProgressBar: true,
      })

    toast.success("Profil bol úspešne aktualizovaný!", {
      position: "bottom-right",
      hideProgressBar: true,
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Aktualizuj svoj profil
        </h2>

        {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm text-center">{success}</p>
        )} */}

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
          id="re-password"
          type="password"
          name="repassword"
          onChange={(e) => setRepassword(e.target.value)}
          value={repassword}
          placeholder="Potvrdenie hesla"
        />

        <ToastContainer />

        <button
          type="submit"
          className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition"
        >
          Aktualizovať
        </button>
      </form>
    </div>
  )
}
