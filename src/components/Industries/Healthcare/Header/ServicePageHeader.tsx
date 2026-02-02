import React from 'react';
import styles from './ServicePageHeader.module.css';
import Image from 'next/image';
import Button from '../../../Common/Button/Button';

const ServicePageHeader = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
            {/* <p className={styles.header_para}>Putting the 'assurance' in quality assurance.</p> */}
            <h1>
              HIPAA-compliant
              <span style={{ color: '#3b82f6' }}> by design. </span>
            </h1>
            <p>
              Faster shipping shouldn’t mean risking patient data. With QAonCloud, you can ship 40% faster, without compromising regulatory compliance or cutting corners. We use synthetic data, document coverage, and embed engineers with extensive healthcare experience. 
            </p>
            <div className={styles.buttonContainer}>
                <Button href="/how-we-work" variant="primary">
                    Talk to an expert
                </Button>
            </div>
        </div>   
        <div className={styles.image}>
            <Image src="/fintech-banner.png" width={600} height={500} alt='Professional working on laptop' />
        </div> 

      </div> 

    </section>
  );
};

export default ServicePageHeader;