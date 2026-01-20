import type { Metadata } from "next";
import { Raleway, Poppins } from 'next/font/google';
import "./globals.css";
import ClientLayout from './ClientLayout';

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

export const metadata: Metadata = {
  title: "QAonCloud - Quality Assurance Solutions",
  description: "Delivering exceptional QA services with a focus on quality and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${poppins.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
