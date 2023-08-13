import React from 'react';

import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';

import styles from '../styles/Footer.module.css';

const Footer: React.FC = function () {
  return (
    <footer className={styles.footer}>
      <a
        className={styles['contact-info']}
        href="mailto:bachmanovconsulting@gmail.com"
      >
        <FiMail />
        <span>eMail</span>
      </a>
      <a
        className={styles['contact-info']}
        href="https://www.linkedin.com/in/alexander-bachmanov-4089b960/"
        target="_blank"
        rel="external"
      >
        <FiLinkedin />
        <span>Linkedin</span>
      </a>
      <a className={styles['contact-info']} href="tel:+2674963709">
        <FiPhone />
        <span className={styles['phone-number']}>267-496-3709</span>
      </a>
      <span className={styles['copyright-notice']}>
        ©2023 Bachmanov Biomedical Consulting
      </span>
    </footer>
  );
};

export default Footer;
