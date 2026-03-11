import axios from "axios";
import { config } from "@/lib/config";
// import store from "@/redux/store";
// import { setToken } from "@/redux/auth";
import { toastError } from "./toast";

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
    //   store.dispatch(setToken(token));
    }
    return response;
  },
  (error) => {
    // Network error (e.g., no internet)
    if (!error.response) {
      if (error.message === "Network Error" || error.code === "ERR_NETWORK")
        toastError("لا يوجد اتصال. تأكد من اتصالك بالشبكة.");
    }

    // Unauthorized
    if (error.response?.status === 401) {
      toastError("انتهت مدة الجلسة، سجل الدخول مجددّا.");
      localStorage.removeItem("token");
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
