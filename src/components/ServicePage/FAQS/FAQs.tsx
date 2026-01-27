'use client';

import React, { useState } from 'react';
import styles from './FAQs.module.css';
import SectionHeader from '@/components/Common/SectionHeader/SectionHeader';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What industries does QAonCloud specialize in?",
      answer: "We're all-rounders! We've worked with a wide variety of customers across all sectors. We are working with more clients in the BFSI, Saas and Healthcare sectors, but we also have clients in eCommerce, Luxury, and Pharmaceutical sectors."
    },
    {
      question: "What types of testing services do you offer?",
      answer: "We provide comprehensive testing services including functional testing, performance testing, security testing, automation testing, and more. Our solutions are tailored to meet your specific needs."
    },
    {
      question: "How quickly can you start testing our project?",
      answer: "We can typically start within 24-48 hours after project kickoff. Our onboarding process is streamlined to get your testing up and running quickly."
    },
    {
      question: "Do you provide both manual and automated testing?",
      answer: "Yes, we offer both manual and automated testing solutions. Our team will help you determine the best approach based on your project requirements and budget."
    },
    {
      question: "What makes QAonCloud different from other testing providers?",
      answer: "We combine deep expertise with flexible engagement models, competitive pricing, and a commitment to quality. Our team works as an extension of your in-house team."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqsSection}>
      <div className={styles.container}>
        <SectionHeader title="Questions we're frequently asked." highlight="(FAQs)" />
        {/* <h2 className={styles.title}>
          Questions we're frequently asked. <span className={styles.highlight}>(FAQs)</span>
        </h2> */}
        
        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className={`${styles.icon} ${activeIndex === index ? styles.active : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <div className={`${styles.answer} ${activeIndex === index ? styles.active : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;