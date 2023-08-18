import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../styles/globals.css';
import { Open_Sans } from 'next/font/google';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Bachmanov Biomedical Consulting',
  description:
    'Providing strategic and tactical Support to commercial and non-profit organizations and investors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
