'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import styles from '../styles/NavMenu.module.css';

const NavMenu: React.FC = function () {
  // state declarations
  const [dropdownIsShowing, setDropdownIsShowing] = useState<Boolean>(false);

  // handler functions
  const toggleDropdown = () => {
    if (!dropdownIsShowing) showDropdown();
    if (dropdownIsShowing) hideDropdown();
  };
  const showDropdown = () => {
    setDropdownIsShowing(true);
  };
  const hideDropdown = () => {
    setTimeout(() => setDropdownIsShowing(false), 300);
  };

  // programatic styles
  const dropdownToggleStyle = `${styles['dropdown-toggle']} ${
    dropdownIsShowing ? styles['dropdown-toggle-active'] : ''
  }`;

  // JSX
  return (
    <ul className={styles['navbar-nav']}>
      {/* HOME */}
      <li className={styles['nav-item']}>
        <Link href="/">Home</Link>
      </li>

      {/* ABOUT */}
      <li className={styles['nav-item']}>
        <Link href="/about">About</Link>
      </li>

      {/* SERVICES */}
      <li
        className={styles['nav-item-dropdown']}
        onClick={toggleDropdown}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <div className={dropdownToggleStyle}>Services</div>
        {dropdownIsShowing && (
          <ul className={styles['dropdown-menu']}>
            <li className={styles['dropdown-item']}>
              <Link href="/services/biopharma">Biopharma</Link>
            </li>
            <li className={styles['dropdown-item']}>
              <Link href="/services/food-and-flavor">Food and Flavor</Link>
            </li>
            <li className={styles['dropdown-item']}>
              <Link href="/services/academic">Academic</Link>
            </li>
            <li className={styles['dropdown-item']}>
              <Link href="/services/non-profit">Non-profit</Link>
            </li>
          </ul>
        )}
      </li>

      {/* CONTACT */}
      <li className={styles['nav-item']}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavMenu;
