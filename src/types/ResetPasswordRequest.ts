export interface ResetPasswordRequest {
  currentPassword: string;
  password: string;
  passwordConfirmation: string;
}