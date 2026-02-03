import React from 'react';
import styles from './HowWeWork.module.css';
import Image from 'next/image';
import Button from '@/components/Common/Button/Button';


const HowWeWork = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
            {/* <p className={styles.header_para}>Putting the 'assurance' in quality assurance.</p> */}
            <h1>
              How we deliver
              <span style={{ color: '#3b82f6' }}> QA 40% faster </span>
            </h1>
            <p>
              AI eliminates the slow parts. Engineers handle the hard parts. Here's how it actually works
            </p>
            <div className={styles.buttonContainer}>
                <Button href="/how-we-work" variant="primary">
                    Talk to an expert
                </Button>
            </div>
        </div>   
        <div className={styles.image}>
            <Image src="/How-we-work.png" width={600} height={200} alt='Professional working on laptop' />
        </div> 

      </div> 

    </section>
  );
};

export default HowWeWork;