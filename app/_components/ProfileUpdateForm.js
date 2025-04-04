"use client"

import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { handleSubmitUpdForm } from "../_lib/functions/hndleSubmitUpdForm"
import FormInput from "./FormInput"
import ImageUploader from "./ImageUploader"
import UpdFormButton from "./UpdFormButton"

export default function ProfileUpdateForm({ guest }) {
  const [fullName, setFullName] = useState(guest?.fullName || "")
  const [email, setEmail] = useState(guest?.email || "")
  const [phone, setPhone] = useState(guest?.phone || "")
  const [password, setPassword] = useState("")
  const [repassword, setRepassword] = useState("")
  const [image, setImage] = useState(guest?.image || null)

  async function handleSubmit(e) {
    await handleSubmitUpdForm(e, { password, repassword, setRepassword, image })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-creamy-100">
      <form
        onSubmit={handleSubmit}
        className="w-auto bg-primary-800 rounded-t-lg shadow-2xl px-8 py-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-primary-50 text-center">
          Aktualizuj svoj profil
        </h2>

        <div className="flex justify-between items-center flex-wrap">

          <div className="flex flex-col gap-6">
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
              placeholder="+421 123 456 789"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />

            <div className="flex justify-between gap-6 flex-wrap">
              <div className="flex-2">
                <FormInput
                  label="Heslo"
                  id="password"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Vaše heslo"
                />
              </div>
              <div className="flex-2">
                <FormInput
                  label="Potvrdenie hesla"
                  id="repassword"
                  type="password"
                  name="repassword"
                  onChange={(e) => setRepassword(e.target.value)}
                  value={repassword}
                  placeholder="Potvrdenie hesla"
                />
              </div>
            </div>
          </div>

          <div className="w-1/3 flex items-center justify-center">
            <ImageUploader onImageSelect={setImage} image={guest?.image} />
          </div>
        </div>

        <ToastContainer />
        <UpdFormButton />
      </form>
      {/* <DeleteProfileButton guestId={guest?.id} /> */}
    </div>
  )
}
