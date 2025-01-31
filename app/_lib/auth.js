import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { supabase } from "./supabase"

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
        }
      },
    }),
  ],
  // pages: {
  //     signIn: "/login",
  // },
  // callbacks: {
  //     async signIn({ user, account, profile, email, credentials }) {
  //         return true;
  //     },
  //     async redirect({ url, baseUrl }) {
  //         return `${baseUrl}/login`;
  //     },
  // },
}

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig)
