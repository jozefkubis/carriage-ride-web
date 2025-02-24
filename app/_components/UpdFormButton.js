import { useFormStatus } from "react-dom"

function UpdFormButton() {

    const { pending } = useFormStatus()

    return (
        <div className="flex justify-center w-full my-8">
            <button
                type="submit"
                className="disable:bg-creamy-300 w-1/3 bg-secondary-400 text-primary-800 font-semibold py-3 rounded-md hover:bg-secondary-700 transition my-4"
            >
                {pending ? "Aktualizujem..." : "Aktualizovať"}
            </button>
        </div>
    )
}

export default UpdFormButton
