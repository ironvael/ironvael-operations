import type { Metadata } from "next";
import { DM_Sans, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ironvael Operations — Forged in Permanence",
  description:
    "Ironvael Operations builds the systems, infrastructure, and operating foundations that businesses rely on for the long term.",
  openGraph: {
    title: "Ironvael Operations — Forged in Permanence",
    description:
      "Ironvael Operations builds the systems, infrastructure, and operating foundations that businesses rely on for the long term.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${archivo.variable} font-sans antialiased`}
      >
        <Analytics/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
