import axios, { AxiosInstance } from "axios";
import { getSession, signOut } from "next-auth/react";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
axiosClient.interceptors.request.use( async function (config) {
    // Do something before request is sent

    const sesion = await getSession()

    config.headers.Authorization = `Bearer ${sesion?.user?.accessToken}`;
    
    // config.headers.Device = `12345`; //opsional

    console.log("sesion axiosClient", sesion);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("isi dari error", error.response);
if (error.response?.status === 401) {
   alert("waktu anda abis");
   signOut()
    }

      return Promise.reject(error);
  }
);

export interface BaseResponsePagination {
  status: string;
  message: string;
  pagination: {
    page: number;
    limit: number;
    pageSize: number;
    total: number;
    total_page: number;
  };
}

export interface BaseResponseSuccess {
  status: string;
  message: string;
  data: any[] | any;
}