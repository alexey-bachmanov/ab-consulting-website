import React from 'react';

import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';

import styles from '../../styles/contactpage.module.css';

const Contact: React.FC = function () {
  return (
    <main className={styles.main}>
      <a className={styles['contact-info']} href="mailto:email@domain.com">
        <FiMail />
        <span>email@domain.com</span>
      </a>
      <a
        className={styles['contact-info']}
        href="https://www.linkedin.com/"
        target="_blank"
        rel="external"
      >
        <FiLinkedin />
        <span>Linkedin/in/alexander-bachmanov</span>
      </a>
      <a className={styles['contact-info']} href="tel:+215555555">
        <FiPhone />
        <span className={styles['phone-number']}>215-555-5555</span>
      </a>
    </main>
  );
};

export default Contact;
