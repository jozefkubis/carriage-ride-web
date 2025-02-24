"use client"

import { useMemo, useState } from "react"
import "react-toastify/dist/ReactToastify.css"
import { handleSubmitUpdBookingForm } from "../_lib/functions/handleSubmitUpdBookingForm"
import BookingUpdateButton from "./BookingUpdateButton"
import FormInput from "./FormInput"

export default function UpdateBookingForm({ booking, crides, onClose }) {
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
    <form
      onSubmit={handleSubmitUpdBookingForm}
      className="w-full border border-primary-100 rounded-md p-8 shadow-2xl bg-primary-800"
    >

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input type="hidden" name="guestId" value={booking.guestId} readOnly />
        <input type="hidden" name="bookingId" value={booking.id} readOnly />

        <FormInput
          label="Meno"
          id="fullName"
          type="text"
          name="fullName"
          defaultValue={fullName}
          placeholder={fullName}
          disabled
          readOnly
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          defaultValue={email}
          placeholder={email}
          disabled
          readOnly
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
              className="mt-1 px-4 py-2 border rounded-md w-full bg-creamy-100 hover:cursor-pointer"
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
              className="mt-1 px-4 py-2 border rounded-md w-full bg-creamy-100 hover:cursor-pointer"
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
              label="Cena"
              id="price"
              type="text"
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
            className="mt-1 px-4 py-2 border rounded-md resize-none hover:cursor-pointer bg-creamy-100"
          ></textarea>
        </div>
      </div>

      <BookingUpdateButton onClose={onClose} />
    </form>
  )
}
