"use client"

import { useState, useMemo } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormInput from "./FormInput"
import { handleSubmitResForm } from "../_lib/functions/handleSubmitResForm"
import ResFormButton from "./ResFormButton"

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

  // Použitie useMemo na optimalizáciu výpočtu ceny
  const selectedRide = useMemo(
    () => crides.find((r) => r.id === rideId) || {},
    [rideId, crides]
  )
  const totalPrice = selectedRide.regularPrice
    ? selectedRide.regularPrice - (selectedRide.discount || 0)
    : 0

  async function handleSubmit(e) {
    await handleSubmitResForm(e)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-creamy-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-primary-800 shadow-2xl rounded-lg p-8  "
      >
        <h2 className="text-2xl font-bold text-primary-50 text-center">
          Rezervačný formulár
        </h2>
        <p className="text-primary-50 text-center mb-6">
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
            min={
              new Date(new Date().setDate(new Date().getDate() + 1))
                .toISOString()
                .split("T")[0]
            }
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
            <div className="flex flex-col w-full">
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
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="numGuests" className="font-medium text-primary-50">
                Počet osôb
              </label>
              <select
                id="numGuests"
                name="numGuests"
                onChange={(e) => setNumGuests(Number(e.target.value))}
                value={numGuests}
                required
                className="mt-1 px-4 py-2 border rounded-md w-full bg-creamy-100"
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
            <div className="flex flex-col w-full">
              <label htmlFor="rideId" className="font-medium text-primary-50">
                Jazda
              </label>
              <select
                id="rideId"
                name="rideId"
                onChange={(e) => setRideId(Number(e.target.value))}
                value={rideId}
                required
                className="mt-1 px-4 py-2 border rounded-md w-full bg-creamy-100"
              >
                {crides.map((ride) => (
                  <option key={ride.id} value={ride.id}>
                    {ride.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full">
              <FormInput
                type="text"
                label="Cena"
                value={`${totalPrice}€`}
                readOnly
              />
            </div>
          </div>

          {/* Poznámky */}
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="notes" className="font-medium text-primary-50">
              Poznámky
            </label>
            <textarea
              id="notes"
              rows="3"
              name="notes"
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
              className="mt-1 px-4 py-2 border rounded-md resize-none bg-creamy-100"
            ></textarea>
          </div>
        </div>

        <ResFormButton />
        <ToastContainer />
      </form>
    </div>
  )
}
