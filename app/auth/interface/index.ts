import { BaseResponsePagination, BaseResponseSuccess } from "@/lib/axiosClient";

interface User {
    // [x: string]: string;
    id?: number;
    nama: string;
    email: string;
    password: string;
    refresh_token: string;
    access_token: string;
  }

  interface User {
    id?: number;
    nama: string;
    email: string;
    password: string;
  }
   
  export interface RegisterResponse extends BaseResponsePagination {}
  export interface RegisterPayload extends Pick<User, "nama" | "email" | "password"> {}
  export interface LoginPayload extends Pick<User, "email" | "password"> {}
  export interface LoginResponse extends BaseResponsePagination {
    data: User;
  }

  export interface ProfileResponse extends BaseResponseSuccess {
    data: User;
  }

