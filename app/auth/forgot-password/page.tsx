"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { axiosClient } from "@/lib/axiosClient";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const res = await axiosClient.post("/auth/forgot-password", { email });

      console.log("res", res.data);

      if (res.data.status === "success") {
        setMessage(res.data.message || "Link reset password telah dikirim ke email Anda.");
        setEmail("");
      } else {
        setError("Gagal mengirim link reset password.");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Lupa Password</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 text-black" // 👈 Tambahkan text-black
            placeholder="Masukkan email Anda"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Mengirim..." : "Kirim Link Reset"}
        </button>
      </form>

      {/* Pesan sukses atau error */}
      {error && (
        <div className="mt-4 text-center text-sm text-red-600">{error}</div>
      )}
      {message && (
        <div className="mt-4 text-center text-sm text-green-600">{message}</div>
      )}
    </div>
  );
};

export default ForgotPassword;
