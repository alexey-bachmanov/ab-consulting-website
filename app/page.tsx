import React from 'react';

import styles from '../styles/homepage.module.css';

const Home: React.FC = function () {
  return (
    <main className={styles.main}>
      {/* HERO */}
      <div className={styles.hero}>
        <h2>Providing Strategic and Tactical Support</h2>
        <p>to commercial and non-profit organizations and investors.</p>
      </div>

      {/* AD COPY */}
      <section className={styles['section-home']}>
        <h3 className={styles['section-heading']}>Biopharma</h3>
        <ul>
          <li>Target identification and validation</li>
          <li>Animal models</li>
          <li>Genetically engineered animals</li>
          <li>Medicine palatability</li>
          <li>Bitter blocking and masking</li>
          <li>Study design</li>
        </ul>
      </section>
      <section className={styles['section-home']}>
        <h3 className={styles['section-heading']}>Food and Flavor</h3>
        <ul>
          <li>Taste and palatability</li>
          <li>Animal behavior</li>
        </ul>
      </section>
      <section className={styles['section-home']}>
        <h3 className={styles['section-heading']}>Academic</h3>
        <ul>
          <li>Grant writing</li>
          <li>Manuscript editing</li>
          <li>Statistical analyses</li>
        </ul>
      </section>
      <section className={styles['section-home']}>
        <h3 className={styles['section-heading']}>Non-profit</h3>
        <ul>
          <li>Strategic planning</li>
          <li>Research funding</li>
          <li>Research infrastructure</li>
          <li>Commercialization</li>
          <li>Industry-Academia collaborations</li>
        </ul>
      </section>

      {/* CTA */}
    </main>
  );
};

export default Home;
