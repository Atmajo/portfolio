"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import ContentWrapper from "@/wrapper/ContentWrapper";
import MobileNavbar from "@/components/MobileNavbar";
import Banner from "@/components/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <title>Atmajo&apos;s Portfolio</title>
      </head>
      <body
        className={cn(
          "bg-gradient-to-br md:bg-gradient-to-r to-[#040525] from-[#666666] bg-opacity-[60%] text-white mf:h-screen",
          inter.className
        )}
      >
        <Navbar className="hidden lg:flex" />
        <MobileNavbar className="lg:hidden" />
        <ContentWrapper>{children}</ContentWrapper>
        <Banner />
      </body>
    </html>
  );
}
