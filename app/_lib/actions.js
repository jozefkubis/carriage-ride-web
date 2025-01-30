"use server"

import { signIn, signOut } from "./auth"
// import { redirect } from "next/navigation"



export async function signInAction() {
    await signIn("google", { redirectTo: "/account" })
}

export async function signOutAction() {
    await signOut("google", { redirectTo: "/" })
}