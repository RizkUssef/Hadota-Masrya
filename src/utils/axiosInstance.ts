import axios from "axios";
import { config } from "@/lib/config";

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

let csrfInitialized = false;

axiosInstance.interceptors.request.use(async (requestConfig) => {
  const method = requestConfig.method?.toLowerCase() ?? "";
  if (!csrfInitialized && ["post", "put", "patch", "delete"].includes(method)) {
    await axios.get(`${config.baseUrl}/sanctum/csrf-cookie`, {
      withCredentials: true,
    });
    csrfInitialized = true;
  }
  return requestConfig;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 419 && !error.config._csrfRetried) {
      error.config._csrfRetried = true; // mark so we don't retry again
      csrfInitialized = false;
      await axios.get(`${config.baseUrl}/sanctum/csrf-cookie`, {
        withCredentials: true,
      });
      return axiosInstance(error.config);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;