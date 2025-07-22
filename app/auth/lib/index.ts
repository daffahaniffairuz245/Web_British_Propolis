import { Query, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import useToast from "@/hook/useToast";
import { axiosClient } from "@/lib/axiosClient";
import {
  RegisterPayload,
  RegisterResponse,
  LoginPayload,
  LoginResponse,
  ProfileResponse,
} from "../interface";
import { signIn, useSession } from "next-auth/react";
import { socialPayload } from "@/app/book/interface";
import { Session } from "inspector/promises";
// ❌ Hapus: import { get } from "http"; → Tidak digunakan
// ❌ Hapus: import { headers } from "next/headers"; → Tidak digunakan
// ❌ Hapus: import { Session } from "inspector/promises"; → Salah pakai dan tidak cocok digunakan di sini

export const sociallogin = async (payload: socialPayload): Promise<LoginResponse> => {
  return axiosClient.post("/auth/social-login", payload).then((res) => res.data);
};

const useAuthModule = () => {
  const { toastError, toastSuccess, toastWarning } = useToast();
  const router = useRouter();
  const { data: session } = useSession()

  // Function untuk register
  const register = async (payload: RegisterPayload): Promise<RegisterResponse> => {
    const response = await axiosClient.post("/auth/register", payload);
    return response.data;
  };

  const useRegister = () => {
    return useMutation<RegisterResponse, Error, RegisterPayload>({
      mutationFn: register,
      onSuccess: (response) => {
        toastSuccess(response.message);
        router.push("/auth/login");
      },
      onError: () => {
        toastError();
      },
    });
  };

  // Function untuk login
  const login = async (payload: LoginPayload): Promise<LoginResponse> => {
    const response = await axiosClient.post("/auth/login", payload);
    return response.data;
  };

  const useLogin = () => {
    return useMutation<LoginResponse, Error, LoginPayload>({
      mutationFn: login,
      onSuccess: async (response) => {
        toastSuccess(response.message);

        // Menyimpan token di NextAuth session
        await signIn("credentials", {
          id: response.data.id,
          name: response.data.nama,
          email: response.data.email,
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
          redirect: false,
          role: "admin",
          access: ["read", "create", "", "delete", "list"],
        });

        router.push("/admin");
      },
      onError: (error: any) => {
        if (error.response?.status === 422) {
          toastWarning(error.response.data.message);
        } else {
          toastError();
        }
      },
    });
  };

  // getProfile
  const getProfile = async (): Promise<ProfileResponse> => {
    const token = ""; // 🔧 TODO: Ambil accessToken dari cookies/session/localStorage jika perlu
    return axiosClient
      .get("/auth/profile")
      .then((res) => res.data);
  };

  const useProfile = () => {
    const { data, isLoading, isFetching } = useQuery({
      queryKey: ["/auth/profile"],
      queryFn: () => getProfile(),
      select: (response: any) => response,
      staleTime: 1000 * 60 * 60,
      enabled:session!== undefined,
      refetchInterval: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
    });

    return { data, isFetching, isLoading };
  };

  return { useRegister, useLogin, useProfile };
};

export default useAuthModule;
