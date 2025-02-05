import { useFormStatus } from "react-dom"

function UpdFormButton() {

    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className="w-full bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition"
        >
            {pending ? "Aktualizujem..." : "Aktualizovať"}
        </button>
    )
}

export default UpdFormButton
