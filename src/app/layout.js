import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookNook",
  description: "Discover, share and borrow books with BookNook.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col text-[#1C1917]">
        <Navbar />
        <main className="bg-[#FAF6EF] flex-1 ">{children}</main>
        <Footer />
        <Toaster
          richColors
          position="top-right"
          closeButton
          expand={true}
          duration={4000}
          theme="light"
        />
      </body>
    </html>
  );
}
