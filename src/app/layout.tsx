import type { Metadata } from "next";
import { Raleway, Poppins, Inter } from 'next/font/google';
import "./globals.css";
import ClientLayout from './ClientLayout';
import Footer from "@/components/Common/Footer/Footer";
import BackToTop from "@/components/Common/BackToTop/BackToTop";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '400', '500', '700'],
  variable: '--font-raleway',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "QAonCloud - Quality Assurance Solutions",
  description: "Delivering exceptional QA services with a focus on quality and innovation",
  icons: {
    icon: '/Logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable} ${inter.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
