export default function ReservationForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10">
      <form className="flex flex-col gap-6 w-full max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-800">
          Rezervačný formulár
        </h2>
        <p className="text-gray-600">
          Vyplňte nasledujúce údaje a potvrďte svoju rezerváciu.
        </p>

        {/* Meno */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="font-medium text-gray-700">
            Meno
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="Vaše meno"
            required
          />
        </div>

        {/* Dátum */}
        <div className="flex flex-col">
          <label htmlFor="date" className="font-medium text-gray-700">
            Dátum
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
            required
          />
        </div>

        {/* Čas */}
        <div className="flex flex-col">
          <label htmlFor="time" className="font-medium text-gray-700">
            Čas
          </label>
          <input
            type="time"
            name="time"
            id="time"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
            required
          />
        </div>

        {/* Počet osôb */}
        <div className="flex flex-col">
          <label htmlFor="numGuests" className="font-medium text-gray-700">
            Počet osôb
          </label>
          <select
            name="numGuests"
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

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="example@email.com"
            required
          />
        </div>

        {/* Telefón */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium text-gray-700">
            Telefón
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
            placeholder="+421 123 456 789"
            required
          />
        </div>

        {/* Tlačidlo Odoslať */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary-500 text-white font-bold rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Odoslať rezerváciu
        </button>
      </form>
    </div>
  )
}
