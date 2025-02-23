import { useFormStatus } from "react-dom"

function UpdFormButton() {

    const { pending } = useFormStatus()

    return (
        <div className="flex justify-center w-full my-8">
            <button
                type="submit"
                className="w-1/3 bg-primary-500 text-white font-semibold py-2 rounded-md hover:bg-primary-600 transition"
            >
                {pending ? "Aktualizujem..." : "Aktualizovať"}
            </button>
        </div>
    )
}

export default UpdFormButton
