import type { Metadata } from "next";
import Logo from "@/components/Layout/Logo";

export const metadata: Metadata = {
  title: "Register - Hadota",
  description: "Hadota Masrya egyption chat app",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: [{ url: "/assets/Logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Logo />
      {children}
    </div>
  );
}
