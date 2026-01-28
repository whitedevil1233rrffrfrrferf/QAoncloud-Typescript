import styles from "./CaseStudiesSection.module.css";
import CaseCard from "../../Common/CaseStudyCard/CaseCard";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import Button from "@/components/Common/Button/Button";

export default function CaseStudiesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        
        <SectionHeader
          title="Case Studies"
          highlight="See how we help businesses like yours"
          description="Discover how our tailored QA solutions have transformed software quality for diverse industries."
        />

        <div className={styles.grid}>
          <CaseCard
            image="/saas.jpg"
            tag="SaaS"
            title="How CloudStack reduced bugs by 73% in 3 months"
            description="A fast-growing SaaS platform struggling with release quality partnered with us to transform their QA process."
            
          />

          <CaseCard
            image="/fintech.png"
            tag="FinTech"
            title="PayFlow's journey to zero critical production bugs"
            description="A fintech startup needed bulletproof QA for their payment processing platform before their Series B."
          />

          <CaseCard
            image="/healthcare.png"
            tag="Healthcare"
            title="MedTech Inc. achieves HIPAA-compliant releases"
            description="A healthcare platform needed rigorous security testing and compliance validation for every release."
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
