import { useCallback, useState, useEffect } from "react"
import { useDropzone } from "react-dropzone"

export default function ImageUploader({ onImageSelect, image }) {
  const [preview, setPreview] = useState(
    image instanceof File ? URL.createObjectURL(image) : image || null
  )

  // Ak sa `image` zmení, nastavíme nový `preview`
  useEffect(() => {
    if (image instanceof File) {
      setPreview(URL.createObjectURL(image))
    } else {
      setPreview(image || null) // Ak je URL, použijeme ju priamo
    }
  }, [image])

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        setPreview(URL.createObjectURL(file)) // 🖼 Zobrazíme náhľad
        onImageSelect(file) // 🔥 Pošleme obrázok rodičovi
      }
    },
    [onImageSelect]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
    },
    multiple: false,
  })

  return (
    <div>
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className="border-dashed border-2 p-4 text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Pustite súbor sem...</p>
        ) : (
          <p className="text-primary-50">
            Pretiahnite obrázok sem alebo kliknite na výber
          </p>
        )}
      </div>

      {/* 🖼 Náhľad obrázka */}
      {preview && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">Vybraný obrázok:</p>
          <img
            src={preview}
            alt="Náhľad"
            className="w-24 h-24 object-cover mx-auto rounded-full"
          />
        </div>
      )}
    </div>
  )
}
