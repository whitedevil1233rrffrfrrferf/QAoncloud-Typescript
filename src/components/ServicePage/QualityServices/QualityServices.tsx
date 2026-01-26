import React from "react";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";

import styles from "./QualityTestingServices.module.css";
import ServiceCard from "@/components/Common/ServiceCard/ServiceCard";

function QualityTestingServices() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <SectionHeader
          title="Quality assurance services that "
          highlight="keep the ball rolling!"
          
        />

        <div
          className={styles.cardsGrid}
        >
          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>&lt;/&gt;</span>}
            title="Functional Testing"
            description="End-to-end validation of every feature and workflow, to ensure your app behaves just the way it should."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>⚡</span>}
            title="Test Automation"
            description="Save time and effort with scalable automation frameworks designed for regression and continuous testing."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>↗</span>}
            title="Performance Testing"
            description="Comprehensive load, stress, and scalability testing that ensures your systems stay fast and reliable."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🤖</span>}
            title="AI / ML QA"
            description="Specialized testing for AI-driven systems to validate performance, accuracy, and edge cases."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🛡</span>}
            title="Security Testing"
            description="In-depth vulnerability assessments and penetration testing to protect sensitive data."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>📱</span>}
            title="Mobile Testing"
            description="Cross-platform testing for iOS and Android to ensure a seamless mobile experience."
            learnMoreHref="/services/functional-testing"
          />
        </div>
      </div>
    </section>
  );
}

export default QualityTestingServices;