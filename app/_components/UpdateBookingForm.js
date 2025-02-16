"use client"

import { useState } from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import FormInput from "./FormInput"
import { updateBooking } from "../_lib/actions"
import BookingUpdateButton from "./BookingUpdateButton"

export default function UpdateBookingForm({ booking, crides }) {
  const [fullName, setFullName] = useState(booking?.fullName || "")
  const [email, setEmail] = useState(booking?.email || "")
  const [date, setDate] = useState(booking?.date || "")
  const [time, setTime] = useState(booking?.time || "")
  const [numGuests, setNumGuests] = useState(booking?.numGuests || 1)
  const [phone, setPhone] = useState(booking?.phone || "")
  const [notes, setNotes] = useState(booking?.notes || "")
  const [rideId, setRideId] = useState(booking?.rideId || 1)

  const regularPrice = crides[rideId - 1].regularPrice
  const discount = crides[rideId - 1].discount
  const totalPrice = regularPrice - discount

  return (
    <div className="flex justify-center items-center py-10">
      <form
        action={updateBooking}
        className="w-full max-w-2xl bg-white shadow-md rounded-md p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Rezervačný formulár
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Vyplňte nasledujúce údaje a aktualizujte svoju rezerváciu.
        </p>

        <input type="hidden" name="guestId" value={booking.guestId} readOnly />
        <input type="hidden" name="bookingId" value={booking.id} readOnly />

        <FormInput
          label="Meno"
          id="fullName"
          type="text"
          name="fullName"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        //   disabled
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        //   disabled
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

        <BookingUpdateButton />
        <ToastContainer />
      </form>
    </div>
  )
}
