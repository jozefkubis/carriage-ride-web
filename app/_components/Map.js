"use client" // Musí byť client-side komponent

import { useEffect, useState } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { getCoordinates } from "../_lib/geocode"

const containerStyle = {
  width: "100%",
  height: "400px",
}

const defaultCenter = { lat: 48.1462402, lng: 17.1072625 } // Predvolená poloha (Bratislava)

export default function Map({ address }) {
  const [center, setCenter] = useState(defaultCenter)

  // Načíta API len raz
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  useEffect(() => {
    async function fetchCoordinates() {
      const coords = await getCoordinates(address)
      if (coords) setCenter(coords)
    }

    fetchCoordinates()
  }, [address])

  if (loadError) {
    return <p>⚠️ Chyba pri načítaní Google Maps API.</p>
  }

  if (!isLoaded) {
    return <p>⌛ Načítavam mapu...</p>
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      <Marker position={center} />
    </GoogleMap>
  )
}
