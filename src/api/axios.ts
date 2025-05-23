import axios from "axios";
import Swal from "sweetalert2";

/*
const api = axios.create({
  baseURL: "https://localhost:7293/api",
  headers: {
    "Content-Type": "application/json",
  },
});
*/

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:7293/api",
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");

      Swal.fire({
        icon: "error",
        title: "Sesión expirada",
        text: "Tu sesión ha caducado. Inicia sesión nuevamente.",
      }).then(() => {
        window.location.href = "/login";
      });
    }

    return Promise.reject(error);
  }
);

export default api;
