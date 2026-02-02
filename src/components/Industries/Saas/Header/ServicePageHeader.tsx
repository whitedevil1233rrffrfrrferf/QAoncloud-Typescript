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
              Fewer bugs,
              <span style={{ color: '#3b82f6' }}> faster releases.  </span>
            </h1>
            <p>
              40% faster releases. Bugs caught before production. AI-accelerated QA that keeps up with your deployment schedule. Our Saas-literate engineers embed seamlessly into your workflow, without putting a dent in your roadmap. 
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