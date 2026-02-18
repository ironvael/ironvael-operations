import type { Metadata } from "next";
import { DM_Sans, Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { seo, siteUrl, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.defaultTitle,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.defaultDescription,
  keywords: [...seo.keywords],
  authors: [{ name: seo.siteName, url: siteUrl }],
  creator: seo.siteName,
  publisher: seo.siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    url: siteUrl,
    siteName: seo.siteName,
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: seo.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    ...(seo.twitterHandle && { creator: seo.twitterHandle }),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION && {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    }),
    ...(process.env.YANDEX_VERIFICATION && {
      yandex: process.env.YANDEX_VERIFICATION,
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJson = JSON.stringify(organizationJsonLd()).replace(/</g, "\\u003c");
  const webJson = JSON.stringify(websiteJsonLd()).replace(/</g, "\\u003c");

  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${archivo.variable} min-w-0 overflow-x-hidden font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: orgJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: webJson }}
        />
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
