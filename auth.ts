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
      authorization: { url: 'https://api.zebedee.io/v1/oauth2/authorize', params: { scope: "user" } },
      token: "https://api.zebedee.io/v1/oauth2/token",
      userinfo: {
        async request(context) {
          const emptyUserProfile = {
            "id": null,
            "email": null,
            "gamertag": null,
            "image": null,
            "isVerified": null,
            "lightningAddress": null,
            "publicBio": null,
            "publicStaticCharge": null,
            "social": {}
          }
          const headers: { apikey: string; usertoken?: string; } = { apikey: process.env.AUTH_ZBD_LIVE_KEY }
          if (context.tokens.access_token) {
            headers['usertoken'] = context.tokens.access_token
          }
          if (!headers['usertoken']) {
            console.log('No access_token was found from the response of authorization request.')
            return emptyUserProfile
          }
          const t = await fetch('https://api.zebedee.io/v1/oauth2/user', {
            headers
          })
          if (t.ok) {
            const p = await t.json()
            return p.data
          }
          else {
            console.log('Response from https://api.zebedee.io/v1/oauth2/user resulted in the following:')
            console.log('Status Code:', t.status)
            console.log('Response Text:', t.statusText)
            return emptyUserProfile
          }
        },
      },
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          "id": profile['id'],
          "email": profile['email'],
          "gamertag": profile['gamertag'],
          "image": profile['image'],
          "isVerified": profile['isVerified'],
          "lightningAddress": profile['lightningAddress'],
          "publicBio": profile['publicBio'],
          "publicStaticCharge": profile['publicStaticCharge'],
          "social": profile['social']
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
      AUTH_ZBD_LIVE_KEY: string
    }
  }
}
