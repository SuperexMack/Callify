import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NavbarWrapper from "./Components/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Callify",
  description: "A WebRTC-based P2P project for browser-to-browser video and audio streaming platform You can use it to video call your friends or family members.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <NavbarWrapper></NavbarWrapper>
        {children}
        <Footer></Footer>
      </body>
     
    </html>
  );
}
