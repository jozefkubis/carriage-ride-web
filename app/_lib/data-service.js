import { supabase } from "./supabase"

// export async function createGuest(newGuest) {
//     const { data, error } = await supabase.from("guests").insert([newGuest])

//     if (error) {
//         console.error(error)
//         throw new Error("Guest could not be created")
//     }

//     return data
// }