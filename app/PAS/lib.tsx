import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Ganti dengan URL backend NestJS Anda
  timeout: 10000, // Waktu timeout dalam milidetik
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tambahkan interceptors untuk request (opsional)
axiosInstance.interceptors.request.use(
  (config) => {
    // Misalnya, tambahkan token Authorization jika diperlukan
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Tambahkan interceptors untuk response (opsional)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Tangani error secara global
    if (error.response?.status === 401) {
      // Logout user jika token tidak valid
      console.error('Unauthorized: Please log in again');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
