"use server"

import { revalidatePath } from "next/cache"
import { signIn, signOut } from "./auth"
import { supabase } from "./supabase"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"

export async function createGuest(formData) {
  const fullName = formData.get("fullName")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const password = formData.get("password")

  if (!fullName || !email || !phone || !password) {
    return { success: false, error: "Všetky polia sú povinné." }
  }

  // Overíme, či už existuje rovnaký email, meno alebo telefónne číslo
  const { data: existingUsers, error: fetchError } = await supabase
    .from("guests")
    .select("id")
    .or(`email.eq.${email},phone.eq.${phone},fullName.eq.${fullName}`)

  if (fetchError) {
    console.error("Supabase Error:", fetchError)
    return { success: false, error: "Chyba pri kontrole existujúceho používateľa." }
  }

  if (existingUsers.length > 0) {
    return { success: false, error: "Používateľ s týmto menom, e-mailom alebo telefónnym číslom už existuje!" }
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


export async function signInAction() {
  await signIn("google", { redirectTo: "/account" })
  redirect("/account")
}

export async function signOutAction() {
  await signOut("google", { redirectTo: "/" })
}

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
    throw new Error("Guest not found")
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    throw new Error("Invalid password")
  }

  // Vrátime status pre klienta
  return { success: true, email, password }
}
