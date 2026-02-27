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
             src="/Images/Saas/SaasHeader.png"  
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
          AI-accelerated QA for SaaS.
        </div>


        {/* Heading */}
        <h1 className={styles.title}>
          Fewer bugs, faster releases.
        </h1>

        {/* Description */}
        <p className={styles.description}>
         40% faster releases. Bugs caught before production. AI-accelerated QA that keeps up with your deployment schedule. 
         Our Saas-literate engineers embed seamlessly into your workflow, 
         without putting a dent in your roadmap.
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