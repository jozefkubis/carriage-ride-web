import ProfileUpdateForm from "@/app/_components/ProfileUpdateForm"

export const metadata = {
    title: "Môj účet",
}

export default function page() {
    return (
        <div>
            <ProfileUpdateForm />
        </div>
    )
}
