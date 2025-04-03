
import type { Metadata } from "next";

import Navigation from "../components/navigation";
import "./globals.css";
import { geistMono, geistSans, poppins, volkhov } from "./fonts";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Savannah Trail",
  description: "We're working hard to bring you something amazing!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${volkhov.variable} ${poppins.variable} antialiased font-poppins`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
