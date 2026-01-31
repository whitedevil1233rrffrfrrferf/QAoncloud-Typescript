import React from 'react';
import styles from './ServicePageHeader.module.css';
import Image from 'next/image';
import Button from '../../Common/Button/Button';

const ServicePageHeader = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
            {/* <p className={styles.header_para}>Putting the 'assurance' in quality assurance.</p> */}
            <h1>
              Even the smallest slip-ups prove
              <span style={{ color: '#3b82f6' }}> to be costly</span>
            </h1>
            <p>
              Guarantee security and reliability with our thorough QA testing services.  No one trusts a glitchy, unsecured app with their money! Give your users a user-friendly, compliant, and bug-free app with our renowned QA testing services.
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