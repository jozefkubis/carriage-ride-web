"use server"

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth"
import { supabase } from "./supabase"
import { redirect } from "next/navigation"

export async function createGuest(formData) {

    const newGuest = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        password: formData.get("password"),
    };
    console.log(newGuest);


    const { error } = await supabase.from("guests").insert([newGuest])

    if (error) {
        console.error("Supabase Error:", error);
        throw new Error("Guest could not be created");
    }

    revalidatePath("/login")
    redirect("/login")
}


export async function signInAction() {
    await signIn("google", { redirectTo: "/account" })
}

export async function signOutAction() {
    await signOut("google", { redirectTo: "/" })
}