import { forgetPassword, login, register, resetPassword } from "@/services/api/authApi";
import { ForgetPasswordRequest } from "@/types/ForgetPasswordRequest";
import { LoginRequest } from "@/types/LoginRequest";
import { RegisterRequest } from "@/types/RegisterRequest";
import { ResetPasswordRequest } from "@/types/ResetPasswordRequest";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: (registerRequest: RegisterRequest) => register(registerRequest),
  });
};
export const useLogin = () => {
  return useMutation({
    mutationFn: (loginRequest: LoginRequest) => login(loginRequest),
  });
};
export const useForgetPassword = () => {
  return useMutation({
    mutationFn: (forgetPasswordRequest: ForgetPasswordRequest) => forgetPassword(forgetPasswordRequest),
  });
};
export const useResetPassword = () => {
  return useMutation({
    mutationFn: (resetPasswordRequest: ResetPasswordRequest) => resetPassword(resetPasswordRequest),
  });
};