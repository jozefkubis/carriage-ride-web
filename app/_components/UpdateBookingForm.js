"use client"

import { useState, useMemo } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BookingUpdateButton from "./BookingUpdateButton"
import FormInput from "./FormInput"
import { handleSubmitUpdBookingForm } from "../_lib/functions/handleSubmitUpdBookingForm"

export default function UpdateBookingForm({ booking, crides }) {
  const [fullName, setFullName] = useState(booking?.fullName || "")
  const [email, setEmail] = useState(booking?.email || "")
  const [date, setDate] = useState(booking?.date || "")
  const [time, setTime] = useState(booking?.time || "")
  const [numGuests, setNumGuests] = useState(booking?.numGuests || 1)
  const [phone, setPhone] = useState(booking?.phone || "")
  const [notes, setNotes] = useState(booking?.notes || "")
  const [rideId, setRideId] = useState(booking?.rideId || 1)

  // Použitie useMemo na optimalizáciu výpočtu ceny
  const selectedRide = useMemo(
    () => crides.find((r) => r.id === rideId) || {},
    [rideId, crides]
  )
  const totalPrice = selectedRide.regularPrice
    ? selectedRide.regularPrice - (selectedRide.discount || 0)
    : 0

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <form
        onSubmit={handleSubmitUpdBookingForm}
        className="w-full max-w-2xl bg-white shadow-md rounded-md p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Aktualizácia rezervácie
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Upravte údaje a potvrďte zmeny.
        </p>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="hidden"
            name="guestId"
            value={booking.guestId}
            readOnly
          />
          <input type="hidden" name="bookingId" value={booking.id} readOnly />

          <FormInput
            label="Meno"
            id="fullName"
            type="text"
            name="fullName"
            value={fullName}
            placeholder={fullName}
            disabled
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder={email}
            disabled
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
                {crides.map((ride) => (
                  <option key={ride.id} value={ride.id}>
                    {ride.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col w-full">
              <label className="font-medium text-gray-700">Cena</label>
              <input
                type="text"
                value={`${totalPrice}€`}
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

        <div className="mt-6">
          <BookingUpdateButton />
        </div>
        <ToastContainer />
      </form>
    </div>
  )
}
