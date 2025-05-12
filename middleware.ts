import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import GoogleProvider from "next-auth/providers/google";
export default withAuth(
  function middleware(req: any) {
    console.log("token", req.nextauth.token);
    console.log("req.nextUrl.pathname", req.nextUrl.pathname);

    // ✅ GANTI bagian 1–4 dengan blok ini
    if (req.nextUrl.pathname.startsWith("/book")) {

      console.log("is update path?", req.nextUrl.pathname.endsWith("/update"));

      // Jika role user, hanya boleh akses /book (berarti tidak boleh akses tambah/update/list)
      if (req.nextauth.token.role === "user" && req.nextUrl.pathname !== "/book") {
        return NextResponse.redirect(new URL("/access", req.url));
      }

      // Jika role admin, cek akses per fitur
      if (req.nextauth.token.role === "admin") {

        // Admin tapi tidak punya akses create → tidak bisa tambah buku
        if (
          req.nextUrl.pathname === "/book/tambah" &&
          !req.nextauth.token.access.includes("create")
        ) {
          return NextResponse.redirect(new URL("/access", req.url));
        }

        // Admin tapi tidak punya akses update → tidak bisa update buku
        if (
          req.nextUrl.pathname.endsWith("/update") &&
          !req.nextauth.token.access.includes("update")
        ) {
          return NextResponse.redirect(new URL("/access", req.url));
        }
      }
    }

    // Role selain admin tidak boleh ke /admin
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      req.nextauth.token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/access", req.url));
    }

    // User tanpa akses list tidak boleh ke /member
    if (
      req.nextUrl.pathname.startsWith("/member") &&
      req.nextauth.token?.role === "user" &&
      !req.nextauth.token.access?.includes("list")
    ) {
      return NextResponse.rewrite(new URL("/access", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token;
      },
    },
    pages: {
      signIn: "/auth/login",
      error: "/api/auth/error",
    },
  }
);

export const config = {
  matcher: ["/admin", "/admin/:path*", "/member", "/book/:path*"],
};
