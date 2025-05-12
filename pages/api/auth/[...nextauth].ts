import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { sociallogin } from "@/app/auth/lib"; // pastikan path benar

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "read:user user:email", // ambil juga email privat
        },
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        return { ...credentials };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Handle login via Google
      if (account?.provider === "google") {
        const res = await sociallogin({
          email: token.email!,
          nama: token.name as string,
          avatar: token.picture!,
        });

        return {
          ...token,
          accessToken: res.data.access_token,
          refreshToken: res.data.refresh_token,
          role: res.data.role || "admin", // default role untuk google
          id: res.data.id,
        };
      }

      // Handle login via GitHub
      if (account?.provider === "github") {
        const res = await sociallogin({
          email: token.email!,
          nama: token.name as string,
          avatar: token.picture!,
        });

        return {
          ...token,
          accessToken: res.data.access_token,
          refreshToken: res.data.refresh_token,
          role: res.data.role || "member", // default role untuk github
          id: res.data.id,
        };
      }

      // Handle login biasa (credentials)
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user.id = Number(token.id);
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/error",
  },
};

export default NextAuth(authOptions);
