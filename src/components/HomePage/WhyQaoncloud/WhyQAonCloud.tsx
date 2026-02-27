import Image from "next/image";
import { Sparkle } from "lucide-react";
import styles from "./WhyQAonCloud.module.css";

const features: string[] = [
  "Much faster than hiring in-house",
  "More reliable than offshore vendors",
  "More effective than AI tools alone",
  "More efficient than engineers on QA",
];

export default function WhyQAonCloud() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Why <span className={styles.highlight}>global</span>{" "}
            <span className={styles.titleWhite}>teams prefer QAonCloud</span>
          </h2>
        </div>

        <div className={styles.divider} />

        {/* Body */}
        <div className={styles.body}>
          {/* Feature List */}
          <ul className={styles.featureList}>
            {features.map((feature: string, i: number) => (
              <li key={i} className={styles.featureItem}>
                <span className={styles.starIcon} aria-hidden="true">
                  <Sparkle size={24} strokeWidth={1.5} />
                </span>
                <span className={styles.featureText}>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Visual — fill-based so it adapts naturally */}
          <div className={styles.visual}>
            <div className={styles.imageWrapper}>
              <Image
                src="/Images/HomePage/WhyQaoncloud.png"
                alt="QAonCloud platform visual"
                fill
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
