import React from 'react';
import Image from 'next/image';

import styles from '../../styles/aboutpage.module.css';

const About: React.FC = function () {
  return (
    <main className={styles.main}>
      <Image
        src="/images/Profile-small.jpg"
        width={455}
        height={600}
        alt="Photograph of Alexander Bachmanov"
      />
      <div className={styles['text-container']}>
        <h3>About me</h3>
        <p>
          Dr. Alexander A. Bachmanov is an expert in life sciences and
          comparative medicine with experience in basic and applied research,
          entrepreneurship, and drug discovery and development. He has degrees
          in veterinary medicine and biological sciences, 40 years of experience
          working in academia and industry, more than 100 peer-reviewed
          scientific publications, and several patents. He served as a reviewer
          for national and international funding organizations (including NIH
          and NSF) and as consultant to pharmaceutical, food, beverage, and
          flavor companies.
        </p>
        <a href="https://en.wikipedia.org/wiki/Alexander_Bachmanov">
          Wikipedia
        </a>
        <a href="https://www.linkedin.com/in/alexander-bachmanov-4089b960/">
          LinkedIn
        </a>
        <a href="/Bachmanov-Resume-2023-06.pdf">Resume</a>
      </div>
    </main>
  );
};

export default About;
