"use client"

import Link from "next/link"
import FormInput from "./FormInput"
import { createGuest } from "../_lib/actions"
import { useState } from "react"


export default function RegistrationForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form action={createGuest} className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Registrácia
        </h2>

        {/* Meno */}
        <div className="flex flex-col">
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
        </div>

        {/* Email */}
        <div className="flex flex-col">
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

        {/* Telefón */}
        <FormInput
          label="Telefón"
          id="phone"
          type="tel"
          placeholder="+421 123 456 789"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          required
        />

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
            required
          />
        </div>

        {/* Potvrdenie hesla */}
        <div className="flex flex-col">
          <FormInput
            label="Potvrdenie hesla"
            id="re-password"
            type="password"
            placeholder="Potvrdenie hesla"
            // name="re-password"
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
            required
          />
        </div>

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
          <Link
            href="/login"
            className="text-primary-600 hover:underline"
          >
            Prihláste sa
          </Link>
        </p>
      </form>
    </div>
  )
}
