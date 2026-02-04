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
              Compliance-ready and
              <span style={{ color: '#3b82f6' }}> right on the money. </span>
            </h1>
            <p>
              With QAonCloud, you’ll ship 40% faster, with no added anxiety. No more cutting corners on security or postponing compliance checks. Just smooth, secure releases. Our engineers are fluent in FinTech, so don’t worry about explaining PCI-DSS, SOC 2, and PSD2 to us. 
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