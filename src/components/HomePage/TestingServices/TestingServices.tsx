import React from "react";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";

import styles from "./TestingServices.module.css";
import ServiceCard from "@/components/Common/ServiceCard/ServiceCard";

function TestingServices() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <SectionHeader
          title="What we handle "
          highlight="so you don't have to"
          description="Comprehensive QA solutions tailored to your tech stack, timeline, and team. We plug in where you need us most."
        />

        <div
          className={styles.cardsGrid}
        >
          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>&lt;/&gt;</span>}
            title="Functional Testing"
            description="Every feature works the way it should. We catch bugs or glitches before your users do.

"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>⚡</span>}
            title="Test Automation"
            description="Tests that take minutes, not hours. Our custom automation keeps up with your product."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>↗</span>}
            title="Performance Testing"
            description="No launch-day surprises. Our load, stress, and scalability testing ensures your app can keep up with the traffic."
          />
           <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🛡</span>}
            title="Security Testing"
            description="No room for vulnerabilities. Our penetration testing and security audits protect your users and your reputation."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🤖</span>}
            title="AI / ML QA"
            description="Specialized testing for ML models and AI features. Validate accuracy, bias, and edge cases at scale."
          />

         

          {/* <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>📱</span>}
            title="Mobile Testing"
            description="Cross-platform testing for iOS and Android to ensure a seamless mobile experience."
          /> */}
        </div>
      </div>
    </section>
  );
}

export default TestingServices;