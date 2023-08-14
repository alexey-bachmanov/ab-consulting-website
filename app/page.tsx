import React from 'react';

import styles from '../styles/homepage.module.css';

const Home: React.FC = function () {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h2>Your Needs. Our Focus.</h2>
        <p>
          Customized consulting solutions for your small molecules and biologics
          development programs
        </p>
      </div>
      <section className={styles['section-home']}>
        <h3 className={styles['section-heading']}>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <section className={styles['section-home']}>
        <h3 className={styles['section-heading']}>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
      <section className={styles['section-home']}>
        <h3 className={styles['section-heading']}>Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </main>
  );
};

export default Home;
