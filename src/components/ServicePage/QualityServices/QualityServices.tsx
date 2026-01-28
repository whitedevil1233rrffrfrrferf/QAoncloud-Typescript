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
            description="Ensuring your product behaves as it should, with end-to-end validation of features and workflows."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>⚡</span>}
            title="Automation Testing"
            description="Using scripts and tools to automate checking if your product works as expected."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>↗</span>}
            title="Performance Testing"
            description="Checking if your mission-critical systems stay fast, stable and reliable under pressure."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🤖</span>}
            title="Security Testing"
            description="Checking for vulnerabilities to uncover risks, strengthen security, and protect sensitive data."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🛡</span>}
            title="Mobile and Web App Testing"
            description="Validating the consistency of user experience across devices, browsers, and platforms."
            learnMoreHref="/services/functional-testing"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>📱</span>}
            title="Compliance or Accessibility Testing"
            description="Ensuring the product meets regulatory requirements, and is easy to use, even for specially-abled users."
            learnMoreHref="/services/functional-testing"
          />
        </div>
      </div>
    </section>
  );
}

export default QualityTestingServices;