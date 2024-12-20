import Footer from "../components/Footer/Footer";
import NavBar from "../components/Header/NavBar";
import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} bg-primary text-white`}
      >
        <NavBar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster position="bottom-center" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
