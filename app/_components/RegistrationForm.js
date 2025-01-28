import Link from "next/link"

export default function RegistrationForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Registrácia
        </h2>

        {/* Meno */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="font-medium text-gray-700">
            Meno
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Vaše meno"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Heslo */}
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium text-gray-700">
            Heslo
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Vaše heslo"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Potvrdenie hesla */}
        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="font-medium text-gray-700"
          >
            Potvrdenie hesla
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Znova zadajte heslo"
            className="mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary-500 focus:outline-none"
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
            href="/account/login"
            className="text-primary-600 hover:underline"
          >
            Prihláste sa
          </Link>
        </p>
      </form>
    </div>
  )
}
