import { register } from "@/services/api/authApi";
import { RegisterRequest } from "@/types/RegisterRequest";
import { useMutation } from "@tanstack/react-query";

export const useRegister = () => {
  return useMutation({
    mutationFn: (registerRequest: RegisterRequest) => register(registerRequest),
  });
};