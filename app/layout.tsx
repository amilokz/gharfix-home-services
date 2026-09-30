import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GharFix — Trusted Home Services in Lahore, Islamabad & Rawalpindi",
  description:
    "Book verified plumbers, electricians, AC technicians, deep cleaners and painters in 60 seconds. Upfront PKR pricing, 7-day service warranty. Confirm on WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#f6f9ff] font-sans text-slate-800">
        {children}
      </body>
    </html>
  );
}
