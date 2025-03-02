import Spinner from "@/app/_components/Spinner"

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-creamy-100">
      <Spinner />
    </div>
  )
}
