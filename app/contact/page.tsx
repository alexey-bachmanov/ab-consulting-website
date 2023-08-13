import React from 'react';

import { FiMail, FiLinkedin, FiPhone } from 'react-icons/fi';

import styles from '../../styles/contactpage.module.css';

const Contact: React.FC = function () {
  return (
    <main className={styles.main}>
      <a
        className={styles['contact-info']}
        href="mailto:bachmanovconsulting@gmail.com"
      >
        <FiMail />
        <span>bachmanovconsulting@gmail.com</span>
      </a>
      <a
        className={styles['contact-info']}
        href="https://www.linkedin.com/in/alexander-bachmanov-4089b960/"
        target="_blank"
        rel="external"
      >
        <FiLinkedin />
        <span>Linkedin/in/alexander-bachmanov</span>
      </a>
      <a className={styles['contact-info']} href="tel:+2674963709">
        <FiPhone />
        <span className={styles['phone-number']}>267-496-3709</span>
      </a>
    </main>
  );
};

export default Contact;
