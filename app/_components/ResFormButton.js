import { useFormStatus } from "react-dom"
import SpinnerMini from "./SpinnerMini"

function ResFormButton() {

    const { pending } = useFormStatus()

    return (
        <div className="flex justify-center w-full mt-8">
            <button
                type="submit"
                disabled={pending}
                className="disable:bg-creamy-300 w-1/3 bg-secondary-400 text-primary-800 font-semibold py-3 rounded-md hover:bg-secondary-700 transition my-4"
            >
                {pending ? <SpinnerMini /> : "Odoslať rezerváciu"}
            </button>
        </div>
    )
}

export default ResFormButton
