import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/mousewheel";
import "swiper/css/autoplay";

import "./globals.css";

const fustatSans = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redwigwam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fustatSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
