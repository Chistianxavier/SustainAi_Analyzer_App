import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NavigationProgress } from "@/components/navigation-progress";
import { LanguageProvider } from "@/lib/language-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SustainAI - AI-Powered Solutions for Sustainable Development",
  description:
    "Empowering communities through AI technology aligned with UN Sustainable Development Goals. Building a future where technology serves humanity and protects our planet.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>

          {children}

          {/* 🔔 Global Toast Container */}
          <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style: {
                  background: "#16a34a",
                  color: "#fff",
                },
              },
              error: {
                style: {
                  background: "#dc2626",
                  color: "#fff",
                },
                iconTheme: {
                  primary: "#fff",
                  secondary: "#dc2626",
                },
              },
            }}
          />
        </LanguageProvider>

        <Analytics />
      </body>
    </html>
  );
}
