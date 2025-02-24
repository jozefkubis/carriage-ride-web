import ProfileUpdateForm from "@/app/_components/ProfileUpdateForm"
import { auth } from "@/app/_lib/auth"
import { getGuest } from "@/app/_lib/data-service"

export const metadata = {
    title: "Môj účet",
}

export default async function page() {

    const session = await auth()
    const guest = await getGuest(session?.user.email)

    return (
        <div>
            <ProfileUpdateForm guest={guest} />
        </div>
    )
}
