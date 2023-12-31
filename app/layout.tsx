import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar/navbar";

import "./globals.css";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Frontend Store for E-commerce Admin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <div className="mb-20">
          <Navbar />
        </div>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
