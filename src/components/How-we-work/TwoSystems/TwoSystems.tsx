import Image from "next/image";
import { Sparkle } from "lucide-react";
import styles from "./TwoSystems.module.css";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";

const aiItems = [
  "Test case generation from your product",
  "Repetitive execution at scale",
  "Synthetic test data creation",
  "Parallel cloud execution",
  "Regression suite maintenance",
];

const engineerItems = [
  "Test strategy and prioritization",
  "Edge cases and exploratory testing",
  "Domain-specific judgment calls",
  '"Should we ship this?" decisions',
  "Your Slack messages at 2am",
];

const cards = [
  {
    title: "What AI Handles",
    items: aiItems,
    image: "/Images/How-We-Work/WhatAiHandles.png",
    alt: "AI illustration",
  },
  {
    title: "What Engineers Handle",
    items: engineerItems,
    image: "/Images/How-We-Work/WhatEngineersHandle.png",
    alt: "Engineers illustration",
  },
];

export default function TwoSystems() {
  return (
    <section className={styles.section}>
      {/* <div className={styles.header}>
        <h2 className={styles.title}>
          Two systems <span className={styles.highlight}>working together</span>
        </h2>
        <p className={styles.subtitle}>
          Traditional QA is slower because humans do everything including
          repetitive work that doesn&apos;t need human strategic interventions.
          We split the work differently.
        </p>
      </div> */}
      <SectionHeader title="Two systems " highlight='working together' description={`Traditional QA is slower because humans do everything including repetitive work that doesn't need human strategic interventions. We split the work differently.`} />  
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            {/* Text content */}
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <ul className={styles.list}>
                {card.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    <Sparkle
                      size={16}
                      strokeWidth={1.5}
                      className={styles.icon}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom-cropped decorative image */}
            {/* <div className={styles.imageWrap}>
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}