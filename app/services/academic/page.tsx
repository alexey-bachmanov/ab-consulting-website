import React from 'react';
import Image from 'next/image';

import { siteContent } from '@/data/data';

import styles from '../../../styles/servicespage.module.css';

const Services: React.FC = function () {
  const contentJSX: any = siteContent.academicBlurbs.map((entry) => (
    <li key={entry.header} className={styles.service}>
      <Image
        className={styles['service-graphic']}
        src={entry.image}
        width={100}
        height={100}
        alt={entry.header}
      />
      <span>
        <h3 className={styles['service-heading']}>{entry.header}</h3>
        <p className={styles['service-blurb']}>{entry.text}</p>
      </span>
    </li>
  ));

  return (
    <main className={styles.main}>
      <h2>Academic Services</h2>
      <ul className={styles['service-list']}>{contentJSX}</ul>
    </main>
  );
};

export default Services;
