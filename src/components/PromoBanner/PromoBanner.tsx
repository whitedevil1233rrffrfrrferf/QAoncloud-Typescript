import React from 'react';
import styles from './PromoBanner.module.css';

const PromoBanner: React.FC = () => {
  return (
    <section className={styles.promoBanner}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Stop firefighting. Start shipping <span className={styles.highlight}>with confidence.</span>
        </h2>
        <div className={styles.content}>
          <p>Say goodbye to production issues and hello to seamless deployments. Our platform ensures your code is always production-ready.</p>
          <p>Focus on building great features while we handle the reliability and performance of your applications.</p>
        </div>
        <button className={styles.ctaButton}>
          Talk to an expert
        </button>
      </div>
    </section>
  );
};

export default PromoBanner;
