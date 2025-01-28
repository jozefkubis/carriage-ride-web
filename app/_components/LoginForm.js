import Link from "next/link"

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Prihlásenie
        </h2>

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
            required
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
            required
          />
        </div>

        {/* Zapamätať si ma */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              className="mr-2 rounded border-gray-300 focus:ring-primary-500"
            />
            Zapamätať si ma
          </label>
          <a href="#" className="text-sm text-primary-600 hover:underline">
            Zabudli ste heslo?
          </a>
        </div>

        {/* Tlačidlo */}
        <button
          type="submit"
          className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Prihlásiť sa
        </button>

        {/* Link na registráciu */}
        <p className="text-sm text-center text-gray-600">
          Nemáte účet?{" "}
          <Link
            href="/account/registration"
            className="text-primary-600 hover:underline"
          >
            Zaregistrujte sa
          </Link>
        </p>
      </form>
    </div>
  )
}
