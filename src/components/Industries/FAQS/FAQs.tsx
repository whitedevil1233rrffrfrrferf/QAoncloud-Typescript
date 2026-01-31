"use client";

import React, { useState } from "react";
import styles from "./FAQs.module.css";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";

/* ---------------- TYPES ---------------- */

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  title: string;
  highlight?: string;
  faqs: FAQItem[];
}

/* ---------------- COMPONENT ---------------- */

const FAQs = ({ title, highlight, faqs }: FAQsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqsSection}>
      <div className={styles.container}>
        <SectionHeader title={title} highlight={highlight} />

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3>{faq.question}</h3>

                <span
                  className={`${styles.icon} ${
                    activeIndex === index ? styles.active : ""
                  }`}
                >
                  <ChevronIcon />
                </span>
              </button>

              <div
                className={`${styles.answer} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <p className={styles.answerpara}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

/* ---------------- ICON ---------------- */

const ChevronIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 9L12 16L5 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
