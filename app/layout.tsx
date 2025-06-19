import type { Metadata } from "next";
import { Geist, Geist_Mono, Doto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
});

export const metadata: Metadata = {
  title: "Terry Cheng",
  description: "Terry Cheng's personal website",
  authors: [{ name: "Terry Cheng", url: "https://lemontea.xyz" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} antialiased`}
      >
        {/* Umami Analytics */}
        <Script
          src="https://umami.lemontea.xyz/script.js"
          data-website-id="66f7c8be-a725-4626-a538-8ebbc5ee47d5"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
