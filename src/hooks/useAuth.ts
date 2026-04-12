import { ROUTES } from "@/routers/router";
import {
  forgetPassword,
  login,
  me,
  register,
  resetPassword,
  verifyAccount,
} from "@/services/api/authApi";
import { ForgetPasswordRequest } from "@/types/ForgetPasswordRequest";
import { LoginRequest } from "@/types/LoginRequest";
import { RegisterRequest } from "@/types/RegisterRequest";
import { ResetPasswordRequest } from "@/types/ResetPasswordRequest";
import { VerifyAccountRequest } from "@/types/VerifyAccountRequest";
import { toastError, toastSuccess } from "@/utils/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: (registerRequest: RegisterRequest) => register(registerRequest),
    onSuccess() {
      toastSuccess(
        "Welcome to Hadota Masrya! Your account has been created successfully.",
      );
      setTimeout(() => {
        window.location.href = ROUTES.login;
      }, 1000);
    },
    onError: (error: any) => {
      toastError(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    },
  });
};
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (loginRequest: LoginRequest) => login(loginRequest),
    onSuccess() {
      toastSuccess(
        "Welcome back to Hadota Masrya! You have logged in successfully.",
      );
      queryClient.invalidateQueries({ queryKey: ['me'] });
      setTimeout(() => {
        window.location.href = ROUTES.chat;
      }, 1000);
    },
    onError: (error: any) => {
      toastError(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    },
  });
};

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => me(),
    retry: false,
    refetchOnMount: 'always',
  });
}
export const useForgetPassword = () => {
  return useMutation({
    mutationFn: (forgetPasswordRequest: ForgetPasswordRequest) =>
      forgetPassword(forgetPasswordRequest),
  });
};
export const useResetPassword = () => {
  return useMutation({
    mutationFn: (resetPasswordRequest: ResetPasswordRequest) =>
      resetPassword(resetPasswordRequest),
  });
};
export const useVerifyAccount = () => {
  return useMutation({
    mutationFn: (verifyAccountRequest: VerifyAccountRequest) =>
      verifyAccount(verifyAccountRequest),
  });
};
