"use client"

import FormInput from "./FormInput";

export default function ReservationForm() {

  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <form onSubmit={() => handleFormSubmit} className="w-full max-w-2xl bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Rezervačný formulár
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Vyplňte nasledujúce údaje a potvrďte svoju rezerváciu.
        </p>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Meno */}
          <FormInput
            label="Meno"
            id="fullName"
            type="text"
            placeholder="Vaše meno"
            name="fullName"
            required
          />

          {/* Email */}
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="example@email.com"
            name="email"
            required
          />

          {/* Dátum */}
          <FormInput label="Dátum" id="date" type="date" name="date" required />

          {/* Čas */}
          <FormInput label="Čas" id="time" type="time" name="time" required />

          {/* Telefón */}
          <FormInput
            label="Telefón"
            id="phone"
            type="tel"
            placeholder="+421 123 456 789"
            name="phone"
            required
          />

          {/* Počet osôb */}
          <div className="flex flex-col">
            <label htmlFor="numGuests" className="font-medium text-gray-700">
              Počet osôb
            </label>
            <select
              id="numGuests"
              className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          {/* Poznámky - textarea (full width) */}
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="notes" className="font-medium text-gray-700">
              Poznámky
            </label>
            <textarea
              id="notes"
              rows="3"
              placeholder="Sem môžete napísať akékoľvek špeciálne požiadavky..."
              className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none resize-none"
            ></textarea>
          </div>
        </div>

        {/* TLAČIDLO */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-primary-500 text-white font-bold rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Odoslať rezerváciu
          </button>
        </div>
      </form>
    </div>
  );
}



