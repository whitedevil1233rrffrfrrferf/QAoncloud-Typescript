import React from "react";

import styles from "./PartnershipSection.module.css";

import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import PartnershipCard from "../../PartnerTestingCard/PartnershipCard";
import Button from "@/components/Common/Button/Button";

const caseStudies = [
  {
    company: "Aol.",
    logo: "/logos/AOI.png", // replace with actual path
    topColor: "#2A5068",
    tags: ["Automation", "User Testing", "Functional QA"],
    title: "AOL - Media",
    description: "Learn how AOL delivers better content to their readers with the help of QAonCloud.",
    url:"https://docsend.com/view/zw3jj5g3ra69apry"
    
  },
  {
    company: "Avanti",
    logo: "/logos/avanti.png",
    topColor: "#623B2B",
    tags: ["Integration Testing", "User Testing", "Performance QA"],
    title: "Avanti Finance - Financial Services",
    description: "Learn how Avanti achieved bug reduction and faster feature implementation through partnership.",
    url:"https://docsend.com/view/gxyqru5wr72twj8p"
  },
  {
    company: "RedBlackTree",
    logo: "/logos/redblacktree.png",
    topColor: "#3B2C66",
    tags: ["Compliance QA", "User Testing", "Security Testing"],
    title: "RedBlackTree - HRMS",
    description: "Discover how RBT ensures their customer’s products are tested and delivered bug free with QAonCloud.",
    url:"https://docsend.com/view/9kqq39c6tmhkubby"
  }
];

export default function PartnershipSection() {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="The QAonCloud"
        highlight="Guarantee"
        description="Choosing the right QA partner isn't just about finding testers — it's about finding a team that truly understands your product."
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
