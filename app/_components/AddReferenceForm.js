"use client"

import { useState } from "react"
import { handleSubmitReferences } from "../_lib/functions/handleSubmitReferences"
import SubmitReferenceButton from "./SubmitReferenceButton"
import FormInput from "./FormInput"

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
    <div className="bg-primary-800 p-8 rounded-lg w-full flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-primary-50 mb-4">
        Pridaj referenciu
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-primary-800 w-full"
      >
        {/* Meno */}
        <FormInput
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
          className="mt-1 px-4 py-2 border rounded-md w-full bg-creamy-100 hover:cursor-pointer"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num} ⭐
            </option>
          ))}
        </select>

        {/* Recenzia */}
        <textarea
          placeholder="Napíš svoju recenziu... (max. 100 slov)"
          value={text}
          name="text"
          onChange={(e) => {
            const inputText = e.target.value
            const words = inputText.trim().split(/\s+/)

            if (words.length <= 100) {
              setText(inputText)
            }
          }}
          className="mt-1 px-4 py-2 border rounded-md resize-none hover:cursor-pointer bg-creamy-100"
          required
        />
        <p className="text-sm text-primary-50 mt-1">
          {text.trim().split(/\s+/).length}/100 slov
        </p>

        {/* Tlačidlo Odoslať */}
        <SubmitReferenceButton />
      </form>
    </div>
  )
}
