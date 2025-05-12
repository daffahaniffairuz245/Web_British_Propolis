"use client";
import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import useAuthModule from "../auth/lib";
import { json } from "stream/consumers";
const AdminPage = () => {
  const { useProfile } = useAuthModule();
  const { data, isFetching } = useProfile();

  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("akses Token", session?.user.accessToken); 

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        <p className="text-lg animate-pulse">Memuat halaman admin...</p>
      </div>
    );
  }

  return (
    <>
      {JSON.stringify(data)}
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
          <header className="mb-6 border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Dashboard Admin
            </h1>
            <p className="text-sm text-gray-500">
              Selamat datang, {session?.user?.name || "Admin"}!
            </p>
          </header>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Informasi Session</h2>
            <div className="bg-gray-50 p-4 rounded-md border text-sm font-mono overflow-x-auto">
              <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
          </section>

          <div className="mt-6">
            <Button
              title="Keluar / Logout"
              colorSchema="red"
              onClick={() => signOut()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
