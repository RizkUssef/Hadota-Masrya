import type { Metadata } from "next";
import Logo from "@/components/Layout/Logo";
import Sidebar from "@/components/Layout/Sidebar";

export const metadata: Metadata = {
  title: "Chat - Hadota",
  description: "Hadota Masrya egyption chat app",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: [{ url: "/assets/Logo.svg", type: "image/svg+xml" }],
  },
};

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <Logo />
      <div className="flex gap-8 w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
