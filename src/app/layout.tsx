import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

import Header from '../components/Header/Header.js';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Add weights as needed
  style: ['normal', 'italic'],
  variable: '--font-playfair', // Using a CSS variable
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} font-playfair antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
