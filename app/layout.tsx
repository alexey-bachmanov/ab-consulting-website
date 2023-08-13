import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import '../styles/globals.css';
import { Open_Sans } from 'next/font/google';

const font = Open_Sans({ subsets: ['latin'] });

// TODO: get a site description
// BUG: fix dropdown menu on mobile
// TODO: fill in lorem ipsum on landing page
// TODO: replace logo SVG
// TODO: fill in placeholder email links
// TODO: update hero text, restyle so it looks good
export const metadata = {
  title: 'Bachmanov Biomedical Consulting',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
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
