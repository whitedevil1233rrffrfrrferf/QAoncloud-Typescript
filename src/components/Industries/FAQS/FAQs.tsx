"use client";

import React, { useState } from "react";
import styles from "./FAQs.module.css";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";

/* ---------------- TYPES ---------------- */

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQsProps {
  title: string;
  highlight?: string;
  faqs: FAQItem[];
}

/* ---------------- COMPONENT ---------------- */

const FAQs = ({ title, highlight, faqs }: FAQsProps) => {
  const [activeIndexes, setActiveIndexes] = useState<Set<number>>(new Set()); //  all FAQs as closed view

  //  all FAQs as open (expanded)  view
  /* const [activeIndexes, setActiveIndexes] = useState<Set<number>>(
    new Set(faqs.map((_, i) => i))
  );*/

  const toggleFAQ = (index: number) => {
    setActiveIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className={styles.faqsSection}>
      {/* Glow blob behind the header */}
      <div className={styles.glowBlob} aria-hidden="true" />
      <div className={styles.container}>
        <SectionHeader title={title} highlight={highlight} />

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isActive = activeIndexes.has(index);
            return (
              <div key={index} className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ""}`}>
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <h3 className={styles.questionText}>{faq.question}</h3>

                  <span
                    className={`${styles.icon} ${isActive ? styles.active : ""}`}
                  >
                    <ChevronIcon />
                  </span>
                </button>

                <div
                  className={`${styles.answer} ${isActive ? styles.active : ""}`}
                >
                  <div className={styles.answerpara}>{faq.answer}</div>
                </div>
              </div>
            );
          })}
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