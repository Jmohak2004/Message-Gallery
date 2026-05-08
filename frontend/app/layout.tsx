import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";
import LowerNav from "@/components/LowerNav";
import "./globals.css";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MessageMate - Copy Smart, Respond Faster",
  description: "Access pre-written messages for every situation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar/>
          <LowerNav/>
          <main className="pt-24">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
