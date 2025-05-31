import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Jersey_20,
  Jersey_10,
  JetBrains_Mono,
  Afacad,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey_10 = Jersey_10({
  variable: "--font-jersey-10",
  subsets: ["latin"],
  weight: "400",
});

const jersey_20 = Jersey_20({
  variable: "--font-jersey-20",
  subsets: ["latin"],
  weight: "400",
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaishnav Lakshman",
  description: "Welcome to Vaishnav's virtual home!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey_10.variable} ${jersey_20.variable} ${jetbrains_mono.variable} ${afacad.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
