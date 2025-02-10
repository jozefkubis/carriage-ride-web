"use client"

import { useState } from "react"
import { createBooking } from "../_lib/actions"
import FormInput from "./FormInput"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { redirect } from "next/navigation"

export default function ReservationForm({ guest, crides }) {
  const [fullName, setFullName] = useState(guest?.fullName || "")
  const [email, setEmail] = useState(guest?.email || "")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [numGuests, setNumGuests] = useState(1)
  const [phone, setPhone] = useState(guest?.phone || "")
  const [notes, setNotes] = useState("")
  const [guestId] = useState(guest?.id || "")
  const [rideId, setRideId] = useState(1)

  const regularPrice = crides[rideId - 1].regularPrice
  const discount = crides[rideId - 1].discount
  const totalPrice = regularPrice - discount


  async function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const response = await createBooking(formData)

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success("Rezervácia bola úspešne odoslaná!", {
        position: "bottom-right",
        hideProgressBar: true,
        autoClose: 3000,
      })
      redirect("/account/reservations")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow-md rounded-md p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Rezervačný formulár
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Vyplňte nasledujúce údaje a potvrďte svoju rezerváciu.
        </p>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="hidden" name="guestId" value={guestId} readOnly />

          <FormInput
            label="Meno"
            id="fullName"
            type="text"
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            required
          />

          <FormInput
            label="Email"
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <FormInput
            label="Dátum"
            id="date"
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            min={new Date(new Date().setDate(new Date().getDate() + 1))
              .toISOString()
              .split("T")[0]}
            required
          />

          <FormInput
            label="Čas"
            id="time"
            type="time"
            name="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
            min="08:00"
            max="21:00"
          />


          {/* Telefón a Počet osôb vedľa seba */}
          <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
            {/* Telefón */}
            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="font-medium text-gray-700">
                Telefón
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                className="mt-1 px-4 py-2 border rounded-md w-full"
              />
            </div>

            {/* Počet osôb */}
            <div className="flex flex-col w-full">
              <label htmlFor="numGuests" className="font-medium text-gray-700">
                Počet osôb
              </label>
              <select
                id="numGuests"
                name="numGuests"
                onChange={(e) => setNumGuests(Number(e.target.value))}
                value={numGuests}
                className="mt-1 px-4 py-2 border rounded-md w-full bg-white"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Jazda a Cena vedľa seba */}
          <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
            {/* Jazda */}
            <div className="flex flex-col w-full">
              <label htmlFor="rideId" className="font-medium text-gray-700">
                Jazda
              </label>
              <select
                id="rideId"
                name="rideId"
                onChange={(e) => setRideId(Number(e.target.value))}
                value={rideId}
                className="mt-1 px-4 py-2 border rounded-md w-full bg-white"
              >
                <option value={1}>Romantická jazda</option>
                <option value={2}>Rodinná jazda</option>
                <option value={3}>Špeciálna jazda</option>
              </select>
            </div>

            {/* Cena */}
            <div className="flex flex-col w-full">
              <label className="font-medium text-gray-700">Cena</label>
              <input
                type="text"
                value={totalPrice + "€"}
                readOnly
                className="mt-1 px-4 py-2 border rounded-md w-full bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Poznámky */}
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="notes" className="font-medium text-gray-700">
              Poznámky
            </label>
            <textarea
              id="notes"
              rows="3"
              name="notes"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              className="mt-1 px-4 py-2 border rounded-md resize-none"
            ></textarea>
          </div>
        </div>

        {/* TLAČIDLO */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-primary-500 text-white font-bold rounded-md hover:bg-primary-600 transition"
          >
            Odoslať rezerváciu
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  )
}
