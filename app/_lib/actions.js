"use server"

import { revalidatePath } from "next/cache"
import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"

// MARK: Create Guest......................................
export async function createGuest(formData) {
  const { fullName, email, phone, password } = Object.fromEntries(formData)

  if (!fullName || !email || !phone || !password) {
    return { success: false, error: "Všetky polia sú povinné." }
  }

  // Overíme, či už existuje rovnaký email, meno alebo telefónne číslo
  const { data: existingGuest, error: fetchError } = await supabase
    .from("guests")
    .select("id")
    .or(`email.eq.${email},phone.eq.${phone},fullName.eq.${fullName}`)

  if (fetchError) {
    console.error("Supabase Error:", fetchError)
    return {
      success: false,
      error: "Chyba pri kontrole existujúceho používateľa.",
    }
  }

  if (existingGuest.length > 0) {
    return {
      success: false,
      error:
        "Používateľ s týmto menom, e-mailom alebo telefónnym číslom už existuje!",
    }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const newGuest = {
    fullName,
    email,
    phone,
    password: hashedPassword,
  }

  const { error } = await supabase.from("guests").insert([newGuest])

  if (error) {
    console.error("Supabase Insert Error:", error)
    return { success: false, error: "Používateľa sa nepodarilo vytvoriť." }
  }

  revalidatePath("/login")
  return { success: true }
}

// MARK: Sing In Action.......................................
export async function signInAction() {
  await signIn("google", { redirectTo: "/account" })
  redirect("/account")
}

//  MARK: Sign Out Action............................................
export async function signOutAction() {
  await signOut("google", { redirectTo: "/" })
}

// MARK: Sign In Guest Action.............................
export async function signInGuestAction(formData) {
  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    throw new Error("Všetky polia sú povinné.")
  }

  const { data: user, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single()

  if (error || !user) {
    throw new Error("Užívateľ s týmto e-mailom neexistuje.")
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    throw new Error("Nesprávne heslo.")
  }

  // Vrátime status pre klienta
  return { success: true, email, password }
}

// MARK: Update Guest Action........................
export async function updateGuest(formData) {
  const session = await auth()
  if (!session?.user?.guestId) return { logout: true } // Ak nie je session, odhlásiť

  const { phone, email, fullName, password } = Object.fromEntries(formData)

  const updateData = { phone, email, fullName }
  if (password) updateData.password = await bcrypt.hash(password, 10)

  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId)

  if (error) return { error: "Profil sa nepodarilo aktualizovať." }

  if (email !== session.user.email || password) {
    await supabase.auth.signOut()
    return { logout: true }
  }

  revalidatePath("/account")
  return { logout: false }
}

// MARK: Create Booking
export async function createBooking(formData) {

  const { fullName, email, date, time, phone, numGuests, notes } = Object.fromEntries(formData)

  const bookingData = { fullName, email, date, time, phone, numGuests, notes }


  const { error } = await supabase.from("bookings").insert([bookingData])

  if (error) return { error: "Rezerváciu sa nepodarilo vytvoriť." }

  return { success: true }
}
