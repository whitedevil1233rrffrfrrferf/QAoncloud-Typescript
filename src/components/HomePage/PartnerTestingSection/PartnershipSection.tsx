import React from "react";

import styles from "./PartnershipSection.module.css";

import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import PartnershipCard from "../../PartnerTestingCard/PartnershipCard";
import Button from "@/components/Common/Button/Button";

const caseStudies = [
  {
    company: "Akyrian",
    logo: "/logos/Akyrian.png", // replace with actual path
    topColor: "#242430CC",
    tags: ["Functional Testing", "Integration Testing","Performance Testing"],
    title: "40% cost optimization & efficiency gains.",

    description: "We tackled Akyrian's process inefficiencies and compliance complexities, building scalable quality processes.",
    subdescription: "Read Full Case Study →",
    url: "https://docsend.com/view/whb97ns2ev3i9erb"

  },
  {
    company: "Avanti",
    logo: "/logos/avanti.png",
    topColor: "#F8D23499",
    tags: ["Functional Testing", "Integration Testing", "Performance Testing"],
    title: "High-quality, defect-free releases.",

    description: "We ensured Avanti's releases were stable, and secure,  improving app quality and QA cycle time.",
    subdescription: "Read Full Case Study →",
    url: "https://docsend.com/view/gxyqru5wr72twj8p"
  },
  {
    company: "FORATravel",
    logo: "/logos/FORATravel.png",
    topColor: "#4C4C4C99",
tags: ["Automation Testing", "Functional Testing", "Integration Testing","Performance Testing", "API Testing"],
    title: "Reduction of Production bugs.",
    description: "We developed a comprehensive test plan for FORA, ensuring high-quality, defect-free builds for every release. ",
    subdescription: "Read Full Case Study →",
    url: "https://docsend.com/view/v8jfi9rsm7jmdbs9"
  }
];

export default function PartnershipSection() {
  return (
    <section className={styles.section}>
      <SectionHeader
        title="Real partnerships. "
        highlight="Real wins." 
      />

      <div className={styles.cardsGrid}>
        {caseStudies.map((study, idx) => (
          <PartnershipCard key={idx} {...study} />
        ))}
      </div>

 

    </section>
  );
}