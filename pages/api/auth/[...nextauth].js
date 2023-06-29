import NextAuth from "next-auth/next";
import GoogleProvider from  "next-auth/providers/google"
export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOLGE_CLIENT_SECRET,
      }),
    ],
    secret:process.env.NEXT_PUBLIC_JWT_SECRET
  }
  export default NextAuth(authOptions)