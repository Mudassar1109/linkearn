import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "LinkEarn — Earn. Trade. Connect.",
  description:
    "LinkEarn is a modern platform where you earn, trade, and connect with a growing community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
