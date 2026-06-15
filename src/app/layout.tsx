import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}
        <Script 
          src="https://kit.fontawesome.com/ba7c57d421.js"
        />
      </body>
    </html>
  );
}
