import Link from "next/link"
import FormInput from "./FormInput"

export default function RegistrationForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Registrácia
        </h2>

        {/* Meno */}
        <div className="flex flex-col">
          <FormInput
            label="Meno"
            id="fullName"
            type="text"
            placeholder="Vaše meno"
            name="fullName"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder="example@email.com"
            name="email"
            required
          />
        </div>

        {/* Heslo */}
        <div className="flex flex-col">
          <FormInput
            label="Heslo"
            id="password"
            type="password"
            placeholder="Vaše heslo"
            name="password"
            required
          />
        </div>

        {/* Potvrdenie hesla */}
        <div className="flex flex-col">
          <FormInput
            label="Potvrdenie hesla"
            id="confirmPassword"
            type="password"
            placeholder="Potvrdenie hesla"
            name="confirmPassword"
            required
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
