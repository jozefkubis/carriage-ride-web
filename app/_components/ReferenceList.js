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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
                {references.map((ref, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-5 text-center"
                    >
                        {/* HVIEZDIČKOVÉ HODNOTENIE */}
                        <p className="text-yellow-500 text-xl">{"⭐".repeat(ref.rating)}</p>
                        <p className="text-gray-700 italic mt-2">{ref.text}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            - {ref.name}, {format(parseISO(ref.created_at), "dd.MM.yyyy")}
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
