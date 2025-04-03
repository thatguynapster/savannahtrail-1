import { Geist, Geist_Mono, Poppins, Volkhov } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  display: "swap",
  subsets: ["latin"],
});

export const volkhov = Volkhov({
  variable: "--font-volkhov",
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});
