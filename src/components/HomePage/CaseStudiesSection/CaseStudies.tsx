import styles from "./CaseStudiesSection.module.css";
import CaseCard from "../../Common/CaseStudyCard/CaseCard";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import Button from "@/components/Common/Button/Button";

export default function CaseStudiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        
        <SectionHeader
          title="Built for teams "
          highlight="like yours"
          description="Discover how our tailored QA solutions have transformed software quality for diverse industries."
        />

        <div className={styles.grid}>
          <CaseCard
            image="/saas.jpg"
            tag="SaaS"
            title="Ship continuously, without breaking things."
            description="Our AI-accelerated testing scales with your release cadence, testing across browsers, devices, and integrations without slowing down delivery. Our QA keeps up with you as your product evolves, so shipping daily feels like routine, not risky.
"
            
          />

          <CaseCard
            image="/fintech.png"
            tag="FinTech"
            title="Compliance-ready from day one."
            description="In FinTech, QA isn’t just about catching bugs, but about security and compliance too. Our AI-accelerated QA is built for regulated environments, with automated audit trails, security testing, and coverage that stands up to scrutiny. Our engineers know the technicalities of the industry and the cost of getting it wrong, because they’ve done this before."
          
          />

          <CaseCard
            image="/healthcare.png"
            tag="Healthcare"
            title="HIPAA-compliant by design. "
            description="Healthcare QA requires a fine balance of precision and restraint. Our synthetic test data ensures compliance, while still testing real-world scenarios. Our engineers have worked across EMR integrations, patient portals, and clinical workflows, where reliability is critical. "
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button href="/how-we-work" variant="primary">
          Talk to an expert
        </Button>
      </div>
    </section>
  );
}
