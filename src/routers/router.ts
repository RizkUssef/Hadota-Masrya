export const ROUTES = {
  // public
  home:       "/",
  about:      "/about",

  // auth
  login:      "/auth/login",
  register:   "/auth/register",
  forgetPassword: "/auth/forget-password",
  resetPassword:  (token: string) => `/auth/reset-password/${token}`,
  verifyAccount:  (token: string) => `/auth/verify-account/${token}`,
  resendVerifyCode: "/auth/resend-verify-account",

  // chat
  chat:       "/chat",
  chatRoom:   (id: string) => `/chat/${id}`,

  // profile
  profile:    "/profile",
  settings:   "/profile/settings",
} as const;