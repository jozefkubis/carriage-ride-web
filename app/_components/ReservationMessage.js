import Link from "next/link"

function ReservationMessage() {
    return (
        <div className="flex items-center justify-center h-screen bg-primary-50 px-12">
            <div className="max-w-4xl text-center bg-white p-16 shadow-lg rounded-2xl border border-gray-400">
                <h2 className="text-5xl font-extrabold text-gray-800 mb-8">🐴 Rezervácia jazdy</h2>
                <p className="text-3xl text-gray-700 mb-10 leading-relaxed">
                    Ak si chcete rezervovať jazdu, musíte sa najskôr{" "}
                    <Link href="/registration" className="text-blue-600 hover:underline font-extrabold">
                        zaregistrovať
                    </Link>{" "}
                    alebo{" "}
                    <Link href="/login" className="text-blue-600 hover:underline font-extrabold">
                        prihlásiť
                    </Link>.
                </p>
                <p className="text-2xl text-gray-600 leading-relaxed">
                    Po prihlásení si môžete jednoducho prezerať, upravovať alebo zrušiť svoje rezervácie.
                    Váš účet môžete kedykoľvek odstrániť.
                </p>
            </div>
        </div>
    )
}

export default ReservationMessage
