"use client"

import { useState } from "react"
import { handleSubmitReferences } from "../_lib/functions/handleSubmitReferences"
import SubmitReferenceButton from "./SubmitReferenceButton"

export default function AddReferenceForm({ onClose }) {
  const [name, setName] = useState("")
  const [rating, setRating] = useState(5)
  const [text, setText] = useState("")

  function handleSubmit(e) {
    handleSubmitReferences(e, { onClose })
    setName("")
    setRating(5)
    setText("")
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Pridaj referenciu
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Meno */}
        <input
          type="text"
          placeholder="Tvoje meno"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
          name="name"
          required
        />

        {/* Hodnotenie */}
        <select
          value={rating}
          name="rating"
          onChange={(e) => setRating(Number(e.target.value))}
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </select>

        {/* Recenzia */}
        <textarea
          placeholder="Napíš svoju recenziu..."
          value={text}
          name="text"
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
          required
        />

        {/* Tlačidlo Odoslať */}
        <SubmitReferenceButton />
      </form>
    </div>
  )
}
