import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV - Nguyễn Tường Khánh My",
  description: "CV online theo layout Figma"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
