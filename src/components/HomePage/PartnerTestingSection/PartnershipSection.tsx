import React from "react";

import styles from "./PartnershipSection.module.css";

import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import PartnershipCard from "../../PartnerTestingCard/PartnershipCard";
import Button from "@/components/Common/Button/Button";

const caseStudies = [
  {
    company: "AOL",
    logo: "/logos/Akyrian.png", // replace with actual path
    topColor: "#242430CC",
    tags: ["Automation", "User Testing", "Functional QA"],
    title: "40% cost optimization & efficiency gains.",

    description: "We tackled Akyrian's process inefficiencies and compliance complexities, building scalable quality processes.",
    subdescription: "Read Full Case Study →",
    url: "https://docsend.com/view/zw3jj5g3ra69apry"

  },
  {
    company: "Avanti",
    logo: "/logos/avanti.png",
    topColor: "#F8D23499",
    tags: ["Integration Testing", "User Testing", "Performance QA"],
    title: "High-quality, defect-free releases.",

    description: "We ensured Avanti's releases were stable, and secure,  improving app quality and QA cycle time.",
    subdescription: "Read Full Case Study →",
    url: "https://docsend.com/view/gxyqru5wr72twj8p"
  },
  {
    company: "RedBlackTree",
    logo: "/logos/FORATravel.png",
    topColor: "#4C4C4C99",
    tags: ["Compliance QA", "User Testing", "Security Testing"],
    title: "269 defects identified.",
    description: "We developed a comprehensive test plan for FORA, ensuring high-quality, defect-free builds for every release. ",
    subdescription: "Read Full Case Study →",
    url: "https://docsend.com/view/9kqq39c6tmhkubby"
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