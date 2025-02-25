"use client";

import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { getCoordinates } from "../_lib/geocode";

const containerStyle = {
    width: "100%",
    height: "400px",
};

const defaultCenter = { lat: 48.1462402, lng: 17.1072625 }; // Predvolené súradnice (Bratislava)

export default function Map({ address }) {
    const [center, setCenter] = useState(defaultCenter);
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Načítanie API kľúča

    useEffect(() => {
        async function fetchCoordinates() {
            const coords = await getCoordinates(address);
            if (coords) setCenter(coords);
        }

        fetchCoordinates();
    }, [address]);

    if (!apiKey) {
        return <p>⚠️ Chyba: API kľúč nie je definovaný.</p>;
    }

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}
