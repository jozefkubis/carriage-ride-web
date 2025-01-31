import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "./supabase";
import { compare } from "bcryptjs";

const authConfig = {
    providers: [
        GoogleProvider({
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
                const { data: user, error } = await supabase
                    .from("guests")
                    .select("*")
                    .eq("email", credentials.email)
                    .single();

                if (error || !user) {
                    console.error("❌ Chyba pri hľadaní používateľa:", error);
                    throw new Error("No user found");
                }

                const isValid = compare(credentials.password, user.password);
                if (!isValid) throw new Error("Invalid password");

                return {
                    id: user.id,
                    name: user.fullName,
                    email: user.email,
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async signIn({ user, account }) {
            console.log("✅ Prihlásený používateľ:", user);
            return true;
        },
        async redirect({ url, baseUrl }) {
            return `${baseUrl}/dashboard`;
        },
        async session({ session, token }) {
            session.user.id = token.sub;
            return session;
        },
    },
    session: {
        strategy: "jwt",
    },
};

export const { auth, signIn, signOut } = NextAuth(authConfig);
export const GET = auth;
export const POST = auth;
