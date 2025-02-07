import { supabase } from "./supabase"

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest])

  if (error) {
    console.error(error)
    throw new Error("Guest could not be created")
  }

  return data
}

export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single()

  // No error here! We handle the possibility of no guest in the sign in callback
  return data
}

export async function getBookingsRegistered(guestId) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cride(*)") // ✅ Opravený názov vzťahu
    .eq("guestId", guestId)
    .order("date", { ascending: true }) // ✅ Usporiadané podľa dátumu

  console.log(data)

  if (error) {
    console.error("Chyba pri načítaní rezervácií:", error)
    return [] // ✅ Vrátime prázdne pole, aby sme predišli chybám na fronte
  }

  return data || [] // ✅ Ak `data` je null, vráti sa prázdne pole
}

export async function getBookingsNotRegistered(email) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cride(*)")
    .eq("email", email)
    .order("created_at", { ascending: true })

  console.log(data)

  if (error) {
    console.error(error)
    throw new Error("Rezervácie nie je možné načítať")
  }

  return data
}
