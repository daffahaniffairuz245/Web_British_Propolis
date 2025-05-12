import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }

  interface Session {
    user: {
      id: number | undefined | null;
      email: string | undefined | null;
      name: string | undefined | null;
      accessToken: any;
      refreshToken: any;
      token : any
      image : string | undefined | null
      role : any
     
    };
 
    
  }
  interface JWT {
    id: string;
    name: string;
    email: string;
    accessToken: string;
    refreshToken: string;
  }
}
