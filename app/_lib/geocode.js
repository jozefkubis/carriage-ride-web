export async function getCoordinates(address) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK") {
            return data.results[0].geometry.location; // { lat, lng }
        } else {
            console.error("Geocoding error:", data.status);
            return null;
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error);
        return null;
    }
}
