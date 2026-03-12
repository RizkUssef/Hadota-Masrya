import { ForgetPasswordRequest } from "@/types/ForgetPasswordRequest";
import { LoginRequest } from "@/types/LoginRequest";
import { RegisterRequest } from "@/types/RegisterRequest";
import { ResetPasswordRequest } from "@/types/ResetPasswordRequest";
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
export const login = async (loginRequest: LoginRequest) => {
  try {
    const response = await axiosInstance.post("/login", loginRequest);
    // store.dispatch(setToken(response.data.token));
    // handle token
    return response.data;
  } catch (err: any) {
    console.error("login error:", err.response?.data || err.message);
    throw err;
  }
};
export const forgetPassword = async (forgetPasswordRequest: ForgetPasswordRequest) => {
  try {
    const response = await axiosInstance.post("/forget-password", forgetPasswordRequest);
    return response.data;
  } catch (err: any) {
    console.error("forget password error:", err.response?.data || err.message);
    throw err;
  }
};
export const resetPassword = async (resetPasswordRequest: ResetPasswordRequest) => {
  try {
    const response = await axiosInstance.post("/reset-password", resetPasswordRequest);
    return response.data;
  } catch (err: any) {
    console.error("forget password error:", err.response?.data || err.message);
    throw err;
  }
};
