import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { supabase } from "./supabase"
import { createGuest, getGuest } from "./data-service"

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { data: user } = await supabase
          .from("guests")
          .select("*")
          .eq("email", credentials.email)
          .single()

        if (!user) throw new Error("No user found")

        const isValid = compare(credentials.password, user.password)
        if (!isValid) throw new Error("Invalid password")

        return {
          id: user.id,
          name: user.fullName,
          email: user.email,
          phone: user.phone,
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        const existingGuest = await getGuest(user.email)

        if (!existingGuest) await createGuest({ email: user.email, fullName: user.name })

        return true
      } catch {
        return false
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email)
      session.user.guestId = guest.id
      session.user.phone = guest.phone

      return session
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/account`;
    },
  },
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig)
