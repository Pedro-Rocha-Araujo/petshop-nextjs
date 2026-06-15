import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Petshop",
  description: "Landing page focado em converção",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
