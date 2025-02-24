import { auth } from "../_lib/auth"

export const metadata = {
  title: "Môj účet",
}

export default async function page() {
  const session = await auth()
  const name = session?.user.name.split(" ")[0] || "Používateľ"

  return (
    <div className="bg-creamy-100">
      <div className="flex flex-col pt-20 pl-20 gap-5 h-screen w-full">
        <h1 className="text-4xl">Vitaj, {name}</h1>
      </div>
    </div>
  )
}
