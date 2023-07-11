import React from 'react';

import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';

import styles from '../styles/Footer.module.css';

const Footer: React.FC = function () {
  return (
    <footer className={styles.footer}>
      <a className={styles['contact-info']} href="mailto:email@domail.com">
        <FiMail />
        <span>eMail</span>
      </a>
      <a
        className={styles['contact-info']}
        href="https://www.linkedin.com/"
        target="_blank"
        rel="external"
      >
        <FiLinkedin />
        <span>Linkedin</span>
      </a>
      <a className={styles['contact-info']} href="tel:+215555555">
        <FiPhone />
        <span className={styles['phone-number']}>215-555-5555</span>
      </a>
      <span className={styles['copyright-notice']}>
        ©2023 Bachmanov Biomedical Consulting
      </span>
    </footer>
  );
};

export default Footer;
