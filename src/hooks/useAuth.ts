import { login, register } from "@/services/api/authApi";
import { LoginRequest } from "@/types/LoginRequest";
import { RegisterRequest } from "@/types/RegisterRequest";
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