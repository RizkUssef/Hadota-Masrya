import { RegisterRequest } from "@/types/RegisterRequest";
import axiosInstance from "@/utils/axiosInstance";

export const register = async (registerRequest: RegisterRequest) => {
  try {
    const response = await axiosInstance.post("/register", registerRequest);
    return response.data;
  } catch (err: any) {
    console.error("Register error:", err.response?.data || err.message);
    throw err;
  }
};
