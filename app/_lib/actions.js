"use server"

import { revalidatePath } from "next/cache"
import { auth, signIn, signOut } from "./auth"
import { supabase } from "./supabase"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"

// MARK: Create Guest......................................
export async function createGuest(formData) {
  const fullName = formData.get("fullName")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const password = formData.get("password")
  const image = formData.get("image") // ✅ Načítame obrázok správne

  if (!fullName || !email || !phone || !password || !image) {
    return { success: false, error: "Všetky polia sú povinné." }
  }

  // Overenie existencie používateľa
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

  // ✅ Správne nahranie obrázka
  const imageName = `${Date.now()}-${image.name}`.replace(/\s/g, "-")
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(imageName, image, {
      cacheControl: "3600",
      upsert: false,
    })

  if (uploadError) {
    console.error("Chyba pri nahrávaní obrázka:", uploadError)
    return { success: false, error: "Nepodarilo sa nahrať obrázok." }
  }

  // 📌 Generovanie URL obrázka
  const imagePath = `https://jlfekazftgytoziyfzfn.supabase.co/storage/v1/object/public/avatars/${imageName}`
  const newGuest = {
    fullName,
    email,
    phone,
    password: hashedPassword,
    image: imagePath,
  }

  const { error } = await supabase.from("guests").insert([newGuest])

  if (error) {
    console.error("Supabase Insert Error:", error)
    return { success: false, error: "Používateľa sa nepodarilo vytvoriť." }
  }

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
  if (!session?.user?.guestId) return { logout: true }

  const { phone, email, fullName, password } = Object.fromEntries(formData)
  let image = formData.get("image") // ✅ Správne získame obrázok

  const updateData = { phone, email, fullName }

  // 📌 1️⃣ Ak je nové heslo zadané, zašifruj ho
  if (password) updateData.password = await bcrypt.hash(password, 10)

  // 📌 2️⃣ Spracovanie nového obrázka, ak bol nahraný
  if (image && image instanceof File) {
    const imageName = `${Date.now()}-${image.name}`.replace(/\s/g, "-")

    // 🛠 Nahraj obrázok do Supabase Storage s možnosťou prepisovania
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(imageName, image, { cacheControl: "3600", upsert: true }) // ✅ `upsert: true` umožní prepis obrázka

    if (uploadError) {
      console.error("Chyba pri nahrávaní obrázka:", uploadError)
      return { error: "Nepodarilo sa nahrať obrázok." }
    }

    // 📌 Vytvor URL nového obrázka
    const imagePath = `https://jlfekazftgytoziyfzfn.supabase.co/storage/v1/object/public/avatars/${imageName}`
    updateData.image = imagePath
  }

  // 📌 3️⃣ Aktualizuj dáta v databáze
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId)

  if (error) return { error: "Profil sa nepodarilo aktualizovať." }

  // 📌 4️⃣ Ak sa zmenil e-mail alebo heslo, odhlás používateľa
  if (email !== session.user.email || password) {
    await supabase.auth.signOut()
    return { logout: true }
  }

  revalidatePath("/account")
  return { logout: false }
}

// MARK: Create Booking.....................................
export async function createBooking(formData) {
  const {
    guestId,
    fullName,
    email,
    date,
    time,
    phone,
    numGuests,
    notes,
    rideId,
  } = Object.fromEntries(formData)

  const bookingData = {
    guestId,
    fullName,
    email,
    date,
    time,
    phone,
    numGuests,
    notes,
    rideId,
  }

  const { error } = await supabase.from("bookings").insert([bookingData])

  if (error) return { error: "Rezerváciu sa nepodarilo vytvoriť." }

  return { success: true }
}

// MARK: Delete Guest..........................................
export async function deleteGuest(guestId) {
  if (!guestId) return { error: "Neplatné ID hosťa." }

  const { error: deleteError } = await supabase
    .from("guests")
    .delete()
    .eq("id", guestId)

  if (deleteError) {
    console.error(deleteError)
    return { error: "Chyba pri mazaní hosťa" }
  }

  // Revalidácia cache v Next.js (iba ak používaš App Router)
  if (typeof revalidatePath === "function") {
    revalidatePath("/")
  }

  return { success: true }
}

// MARK: Delete Booking..........................................

export async function deleteBooking(id) {
  const { error: deleteError } = await supabase
    .from("bookings")
    .delete()
    .eq("id", id)

  if (deleteError) {
    console.error(deleteError)
    return { error: "Chyba pri mazaní rezervácie" }
  }

  // Revalidácia cache v Next.js (iba ak používaš App Router)
  if (typeof revalidatePath === "function") {
    revalidatePath("/")
  }

  return { success: true }
}

// MARK: Update Booking..........................................
export async function updateBooking(formData) {
  const id = Number(formData.get("bookingId"))

  const updateData = {
    // fullName: formData.get("fullName"),
    // email: formData.get("email"),
    date: formData.get("date"),
    time: formData.get("time"),
    phone: formData.get("phone"),
    numGuests: Number(formData.get("numGuests")),
    notes: formData.get("notes"),
    rideId: Number(formData.get("rideId")),
  }

  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", id)
    .select()

  if (error) {
    return { error: "Rezerváciu sa nepodarilo aktualizovať." }
  }

  revalidatePath("/account/reservations")
}
