import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"
 
const authOptions: NextAuthOptions = {
 
  providers: [
    GithubProvider({
        clientId: "",
        clientSecret:"",
      }),
    // ...add more providers here
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials: any, req) {
        return {
          ...credentials,
        };
      },
    }),
  ],
 
 
 
 
};
 
export default NextAuth(authOptions);