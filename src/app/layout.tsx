import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Hadota",
  description: "Hadota Masrya egyption chat app",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: [
      { url: "/assets/Logo.svg", type: "image/svg+xml" },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[var(--font-family-body)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
