import Link from "next/link";

export default function ContactItem({ icon, title, description, detail, href }) {
    return (
        <div className="flex items-start gap-4">
            {/* Ikona */}
            <div className="text-primary-500 text-3xl">{icon}</div>
            {/* Textová časť */}
            <div>
                <p className="font-bold text-xl text-gray-800">{title}</p>
                <p className="text-sm text-gray-600">{description}</p>
                <Link
                    href={href}
                    className="text-primary-600 underline font-medium hover:text-primary-700 transition"
                >
                    {detail}
                </Link>
            </div>
        </div>
    )
}