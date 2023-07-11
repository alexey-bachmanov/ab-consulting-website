'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Comfortaa } from 'next/font/google';

import { FiFeather } from 'react-icons/fi';

import styles from '../styles/Header.module.css';

const headerFont = Comfortaa({ subsets: ['latin'] });

const Header: React.FC = function () {
  // state declarations
  const [dropdownIsShowing, setDropdownIsShowing] = useState<Boolean>(false);

  // handler functions
  const toggleDropdown = () => {
    setDropdownIsShowing((prevState) => !prevState);
  };
  const showDropdon = () => {
    setDropdownIsShowing(true);
  };
  const hideDropdon = () => {
    setDropdownIsShowing(false);
  };

  // programatic styles
  const dropdownMenuStyle = `${styles['dropdown-menu']} ${
    dropdownIsShowing ? '' : styles.hidden
  }`;
  const dropdownButtonStyle = `${styles['nav-link-level-1']} ${
    dropdownIsShowing ? styles['nav-link-level-1-active'] : ''
  }`;

  // JSX
  return (
    <header className={styles.header}>
      <div className={styles['header-main-logo']}>
        <FiFeather />
        <div className={headerFont.className}>
          <h1>BACHMANOV</h1>
          <h1>BIOMEDICAL</h1>
          <h1>CONSULTING</h1>
        </div>
      </div>

      <nav className={styles['nav-menu']}>
        <Link className={styles['nav-link-level-1']} href="/">
          Home
        </Link>

        <Link className={styles['nav-link-level-1']} href="/about">
          About
        </Link>

        <div className={styles['dropdown-container']}>
          <div
            className={dropdownButtonStyle}
            onClick={toggleDropdown}
            onPointerEnter={showDropdon}
            onPointerLeave={hideDropdon}
          >
            Services
          </div>
          <ul
            className={dropdownMenuStyle}
            onPointerEnter={showDropdon}
            onPointerLeave={hideDropdon}
          >
            <li className={styles['nav-link-level-2']}>
              <Link href="/services/biopharma">Biopharma</Link>
            </li>
            <li className={styles['nav-link-level-2']}>
              <Link href="/services/food-and-flavor">Food and Flavor</Link>
            </li>
            <li className={styles['nav-link-level-2']}>
              <Link href="/services/academic">Academic</Link>
            </li>
            <li className={styles['nav-link-level-2']}>
              <Link href="/services/non-profit">Non-profit</Link>
            </li>
          </ul>
        </div>

        <Link className={styles['nav-link-level-1']} href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
