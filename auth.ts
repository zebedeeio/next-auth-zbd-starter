import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions as NextAuthConfig } from "next-auth"
import { getServerSession } from "next-auth"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin"
  }
}

export const config = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  providers: [
    {
      id: "zbd",
      name: "ZBD",
      type: "oauth",
      clientId: process.env.AUTH_ZBD_ID,
      clientSecret: process.env.AUTH_ZBD_SECRET,
      authorization: { url: 'https://api.zebedee.io/v1/oauth2/authorize', params: { scope: "" } },
      token: "https://api.zebedee.io/v1/oauth2/token",
      userinfo: "https://api.zebedee.io/v1/oauth2/user",
      checks: ["pkce"],
      profile({ response: { profile } }) {
        return {
          id: profile.id,
          name: `${profile.firstName} ${profile.lastName}`,
          email: profile.contact.email,
          image: profile.photo
            ? `${profile.photo.prefix}original${profile.photo.suffix}`
            : null,
        }
      },
      style: {
        logo: "/foursquare.svg",
        logoDark: "/foursquare-dark.svg",
        bg: "#fff",
        text: "#000",
        bgDark: "#000",
        textDark: "#fff",
      },
    }
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
} satisfies NextAuthConfig

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}

// We recommend doing your own environment variable validation
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string

      AUTH_ZBD_ID: string
      AUTH_ZBD_SECRET: string
    }
  }
}
