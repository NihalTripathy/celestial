import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BootstrapClient from "./providers/BootstrapClient";
import "@/styles/globals.scss";
import "@/styles/bootstrap.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celestial Security",
  description: "Celestial Security - Cloud Security Posture Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
