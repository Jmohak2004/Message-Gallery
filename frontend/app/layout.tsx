import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/NavBar";
import LowerNav from "@/components/LowerNav";
import "./globals.css";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MessageMate | Professional AI Message Gallery & Generator",
  description: "Access pre-written messages and generate AI-powered replies for emails, emergencies, and daily communication. The ultimate productivity tool for busy professionals.",
  keywords: ["AI message generator", "email templates", "professional communication", "MessageMate", "ready-to-use messages"],
  openGraph: {
    title: "MessageMate | Professional AI Message Gallery",
    description: "Copy smart, respond faster with AI-powered message templates.",
    url: "https://messagemate.ai",
    siteName: "MessageMate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MessageMate | AI Message Gallery",
    description: "Generate professional messages in seconds.",
  },
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
