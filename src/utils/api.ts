import { useAuthLogin } from '@/stores/authLogin';
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'localhost:3000/api/v1',
});
api.interceptors.request.use(
  (config) => {
    // Fungsi ini akan berjalan SEBELUM setiap request dikirim

    // Ambil token langsung dari store menggunakan .getState()
    const token = useAuthLogin.getState().token;

    // Jika token ada, tambahkan ke header Authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Kembalikan konfigurasi yang sudah dimodifikasi untuk dilanjutkan
    return config;
  },
  (error) => {
    // Jika ada error pada setup request, lempar error tersebut
    return Promise.reject(error);
  }
);
