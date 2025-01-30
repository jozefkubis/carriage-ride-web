import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
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

export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth(authConfig)
