import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/provider/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qode Assignment - BUI TIEN DAT",
  description: "Qode Assignment - BUI TIEN DAT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
