import React from "react";
import styles from "./ServicePageHeader.module.css";
import Image from "next/image";
import Button from "../../../Common/Button/Button"; 
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const ServicePageHeader = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        

        {/* Floating Image */}
        <div className={styles.imageWrapper}>
           <div className={styles.imageEllipse} />
          
          <Image
            src="/Images/Healthcare/HealthcareHeader.png" 
            alt="FinTech Card"
            width={420}
            height={260}
            priority
            className={styles.image}
          />
        </div>

        {/* Tag */}
        <div className={styles.tag}>
          <span className={styles.star}>✦</span>
          AI-accelerated QA for HealthTech.
        </div>


        {/* Heading */}
        <h1 className={styles.title}>
          HIPAA-compliant by design
        </h1>

        {/* Description */}
        <p className={styles.description}>
          Faster shipping shouldn’t mean risking patient data. With QAonCloud, you can ship 40% faster, 
          without compromising regulatory compliance or cutting corners. We use synthetic data, document coverage, 
          and embed engineers with extensive HealthTech experience
        </p>

        {/* Button */}
        <div className={styles.buttonContainer}>
          <Button href="/how-we-work" variant="primary">
            Talk To An Expert
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ServicePageHeader;