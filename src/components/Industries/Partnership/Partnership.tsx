'use client';

import React from 'react';
import styles from './Partnerships.module.css';
import Image from 'next/image';

interface PartnershipProps {
  imageSrc: string;
  companyName: string;
  companyLogo: string;
  highlightPercent: string;
  description: string;
}

const Partnerships: React.FC<PartnershipProps> = ({
  imageSrc,
  companyName,
  companyLogo,
  highlightPercent,
  description,
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Real Partnerships. <span className={styles.highlight}>Real Wins.</span>
      </h2>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={`${companyName} screenshot`}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.logoWrapper}>
            <Image
              src={companyLogo}
              alt={`${companyName} logo`}
              width={180}
              height={30}
              className={styles.logo}
            />
          </div>
          <h3 className={styles.highlightText}>
            <span>{highlightPercent}</span> functional defects identified!
          </h3>
          <p className={styles.description}>{description}</p>
          <button className={styles.ctaButton}>Read The Full Story</button>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
