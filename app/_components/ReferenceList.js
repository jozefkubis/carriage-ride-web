"use client"

import { useState } from "react"
import AddReferenceForm from "../_components/AddReferenceForm"
import Modal from "../_components/Modal"
import { format, parseISO } from "date-fns"

function ReferenceList({ references }) {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleSubmit = () => {
    setIsOpenModal((prev) => !prev)
  }

  return (
    <div className="flex flex-col items-center bg-creamy-100 min-h-screen pb-10 px-5">
      {/* HEADER */}
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold text-primary-800">
          Čo hovoria naši zákazníci?
        </h1>
        <p className="text-lg text-primary-600 mt-2">
          Naše služby hodnotili už desiatky spokojných zákazníkov.
        </p>
      </header>

      {/* GRID S REFERENCIAMI */}
      <div className="flex flex-col gap-6 w-1/3 max-w-screen-lg">
        {references.map((ref, index) => (
          <div
            key={index}
            className="border border-b-primary-500 p-6 text-left"
          >
            {/* HVIEZDIČKOVÉ HODNOTENIE */}
            <p className="text-xl text-gray-800 mt-2 font-bold">{ref.name},</p>
            <p className="text-yellow-500 text-xl">
              {"⭐".repeat(ref.rating)}{" "}
              {format(parseISO(ref.created_at), "dd.MM.yyyy")}
            </p>
            <p className="text-gray-700 italic mt-2 overflow-auto">
              {ref.text}
            </p>
          </div>
        ))}
      </div>

      {/* TLAČIDLO NA PRIDANIE RECENZIE (VOLITEĽNÉ) */}
      <button
        onClick={handleSubmit}
        className="mt-10 bg-primary-800 text-white px-6 py-3 rounded-md hover:bg-primary-600 transition"
      >
        Pridať referenciu
      </button>

      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <AddReferenceForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  )
}

export default ReferenceList
