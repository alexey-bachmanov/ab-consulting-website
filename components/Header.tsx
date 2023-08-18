'use client';
import React from 'react';
import Link from 'next/link';

import { Comfortaa } from 'next/font/google';

import NavMenu from './NavMenu';

import styles from '../styles/Header.module.css';
import Image from 'next/image';

const headerFont = Comfortaa({ subsets: ['latin'] });

const Header: React.FC = function () {
  // JSX
  return (
    <header className={styles['header']}>
      <nav className={styles['navbar']}>
        <Link href="/" className={styles['header-main-logo']}>
          <Image
            src="/images/DNA.svg"
            width={100}
            height={100}
            alt="Double-helix logo"
          />
          <div className={headerFont.className}>
            <h1>BACHMANOV</h1>
            <h1>BIOMEDICAL</h1>
            <h1>CONSULTING</h1>
          </div>
        </Link>

        <NavMenu />
      </nav>
    </header>
  );
};

export default Header;
