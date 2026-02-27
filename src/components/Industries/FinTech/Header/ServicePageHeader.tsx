import React from "react";
import styles from "./ServicePageHeader.module.css";
import Image from "next/image";
import Button from "../../../Common/Button/Button"; 
import { Inter } from 'next/font/google'
import Link from "next/link";
  

const inter = Inter({ subsets: ['latin'] })

const ServicePageHeader = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        

        {/* Floating Image */}
        <div className={styles.imageWrapper}>
           <div className={styles.imageEllipse} />
          
          <Image
            src="/Images/Fintech/fintech-banner.png"
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
          AI-accelerated QA for FinTech.
        </div>


        {/* Heading */}
        <h1 className={styles.title}>
          Compliance-ready and right on the money.
        </h1>

        {/* Description */}
        <p className={styles.description}>
          With QAonCloud, you’ll ship 40% faster, with no added anxiety.
          No more cutting corners on security or postponing compliance checks. Just smooth, secure releases.
          Our engineers are fluent in FinTech, so don’t worry about explaining PCI-DSS, SOC 2, and PSD2 to us.
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