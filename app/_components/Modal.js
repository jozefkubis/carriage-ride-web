import { ToastContainer } from "react-toastify"
import { IoCloseOutline } from "react-icons/io5"

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 bg-primary-50 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white shadow-lg rounded-lg w-2/5 transition-all">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 transition-all hover:bg-primary-50 rounded-full"
        >
          <IoCloseOutline className="w-6 h-6 text-primary-200" />
        </button>

        <div>{children}</div>
      </div>

      <ToastContainer />
    </div>
  )
}
