import Link from "next/link"
import FormInput from "./FormInput"
import { auth } from "../_lib/auth"

export default async function ProfileUpdateForm() {
  const session = await auth()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Aktualizuj svoj profil
        </h2>

        {/* Meno */}
        <div className="flex flex-col">
          <FormInput
            label="Meno"
            id="fullName"
            type="text"
            placeholder={session.user.name}
            name="fullName"
            disabled
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <FormInput
            label="Email"
            id="email"
            type="email"
            placeholder={session.user.email}
            name="email"
            required
          />
        </div>

        {/* phone */}
        <div className="flex flex-col">
          <FormInput
            label="Telefón"
            id="phone"
            type="tel"
            placeholder={session.user.phone}
            name="phone"
            pattern="[+][0-9]{1,3}[0-9]{9,14}"
            required
          />
        </div>

        {/* Heslo */}
        {/* <div className="flex flex-col">
                    <FormInput
                        label="Heslo"
                        id="password"
                        type="password"
                        placeholder="Vaše heslo"
                        name="password"
                        required
                    />
                </div> */}

        {/* Potvrdenie hesla */}
        {/* <div className="flex flex-col">
                    <FormInput
                        label="Potvrdenie hesla"
                        id="confirmPassword"
                        type="password"
                        placeholder="Potvrdenie hesla"
                        name="confirmPassword"
                        required
                    />
                </div> */}

        {/* Tlačidlo */}
        <button
          type="submit"
          className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Aktualizovať
        </button>

        {/* Link na prihlásenie */}
        {/* <p className="text-sm text-center text-gray-600">
                    Už máte účet?{" "}
                    <Link
                        href="/account/login"
                        className="text-primary-600 hover:underline"
                    >
                        Prihláste sa
                    </Link>
                </p> */}
      </form>
    </div>
  )
}
