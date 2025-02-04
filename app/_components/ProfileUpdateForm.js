"use client"

import { useState } from "react"
import FormInput from "./FormInput"
import { updateGuest } from "../_lib/actions"

function ProfileUpdateForm({ guest }) {
  const [fullName, setFullName] = useState(guest.fullName)
  const [email, setEmail] = useState(guest.email)
  const [phone, setPhone] = useState(guest.phone)
  const [password, setPassword] = useState(guest.password)
  const [repassword, setRepassword] = useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        action={updateGuest}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Aktualizuj svoj profil
        </h2>

        {/* Meno */}
        <div className="flex flex-col">
          <FormInput
            label="Meno"
            id="fullName"
            type="text"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <FormInput
            label="Email"
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder={email}
          />
        </div>

        {/* phone */}
        <div className="flex flex-col">
          <FormInput
            label="Telefón"
            id="phone"
            type="tel"
            name="phone"
            pattern="[+][0-9]{1,3}[0-9]{9,14}"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder={phone}
          />
        </div>

        {/* Heslo */}
        <div className="flex flex-col">
          <FormInput
            label="Heslo"
            id="password"
            type="password"
            placeholder="Vaše heslo"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        {/* Potvrdenie hesla */}
        <div className="flex flex-col">
          <FormInput
            label="Potvrdenie hesla"
            id="re-password"
            type="password"
            placeholder="Potvrdenie hesla"
            name="repassword"
            onChange={(e) => setRepassword(e.target.value)}
            value={repassword}
          />
        </div>

        {/* Tlačidlo */}
        <button
          type="submit"
          className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Aktualizovať
        </button>

        {/* Link na prihlásenie */}
        {/* <p className="text-sm text-center text-gray-600">
                    Už máte účet?{" "}
                    <Link
                        href="/account/login"
                        className="text-primary-600 hover:underline"
                    >
                        Prihláste sa
                    </Link>
                </p> */}
      </form>
    </div>
  )
}

export default ProfileUpdateForm
