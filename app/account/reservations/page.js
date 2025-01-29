import Link from "next/link"

const metadata = {
    title: "Moje rezervácie",
}

function page() {
    return (
        <div>
            <div className="flex flex-col m-20 gap-5">
                <h1 className="text-2xl">Moje rezervácie</h1>
                <p>Zatiaľ nemáte žiadne rezervácie. Rezervovať jazdu{' '}<Link className="underline text-accent-500" href="/booking">tu &rarr;</Link></p>
            </div>
        </div>
    )
}

export default page
