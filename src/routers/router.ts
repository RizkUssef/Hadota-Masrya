export const ROUTES = {
  // public
  home:       "/",
  about:      "/about",

  // auth
  login:      "/auth/login",
  register:   "/auth/register",
  forgetPassword: "/auth/forget-password",

  // chat
  chat:       "/chat",
  chatRoom:   (id: string) => `/chat/${id}`,

  // profile
  profile:    "/profile",
  settings:   "/profile/settings",
} as const;