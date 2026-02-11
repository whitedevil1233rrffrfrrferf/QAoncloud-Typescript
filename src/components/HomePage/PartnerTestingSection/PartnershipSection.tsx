import React from "react";

import styles from "./PartnershipSection.module.css";

import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import PartnershipCard from "../../PartnerTestingCard/PartnershipCard";
import Button from "@/components/Common/Button/Button";

const caseStudies = [
  {
    company: "AOL",
    logo: "/logos/AOI.png", // replace with actual path
    topColor: "#2A5068",
    tags: ["FinTech"],
    title: "Series B payments startup",
    description: "AOL. saw a 45% reduction in their QA cycle time.",
    subdescription:"We strengthened their QA process, improved test coverage, and helped cut defect leakage across releases.",
    url:"https://docsend.com/view/zw3jj5g3ra69apry"
    
  },
  {
    company: "Avanti",
    logo: "/logos/avanti.png",
    topColor: "#623B2B",
    tags: ["Integration Testing", "User Testing", "Performance QA"],
    title: "Series B payments startup",
    description: "AOL. saw a 45% reduction in their QA cycle time.",
    subdescription:"We strengthened their QA process, improved test coverage, and helped cut defect leakage across releases.",
    url:"https://docsend.com/view/gxyqru5wr72twj8p"
  },
  {
    company: "RedBlackTree",
    logo: "/logos/redblacktree.png",
    topColor: "#3B2C66",
    tags: ["Compliance QA", "User Testing", "Security Testing"],
    title: "Series B payments startup",
    description: "AOL. saw a 45% reduction in their QA cycle time.",
    subdescription:"We strengthened their QA process, improved test coverage, and helped cut defect leakage across releases.",
    url:"https://docsend.com/view/9kqq39c6tmhkubby"
  }
];

export default function PartnershipSection() {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="Built for teams like yours"
        
      />

      <div className={styles.cardsGrid}>
        {caseStudies.map((study, idx) => (
          <PartnershipCard key={idx} {...study} />
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button href="/how-we-work" variant="primary">
        Talk to an expert
      </Button>
      </div>
      
    </section>
  );
}
