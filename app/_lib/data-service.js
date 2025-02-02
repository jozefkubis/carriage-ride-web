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