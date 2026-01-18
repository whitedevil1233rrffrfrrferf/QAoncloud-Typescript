import React from "react";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import ServiceCard from "./ServiceCard";
import styles from "./TestingServices.module.css";

function TestingServices() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <SectionHeader
          title="Software testing services that cut risks,"
          highlight="not momentum."
          description="Comprehensive QA solutions tailored to your tech stack, timeline, and team. We plug in where you need us most."
        />

        <div
          className={styles.cardsGrid}
        >
          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>&lt;/&gt;</span>}
            title="Functional Testing"
            description="End-to-end validation of every feature and workflow, to ensure your app behaves just the way it should."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>⚡</span>}
            title="Test Automation"
            description="Save time and effort with scalable automation frameworks designed for regression and continuous testing."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>↗</span>}
            title="Performance Testing"
            description="Comprehensive load, stress, and scalability testing that ensures your systems stay fast and reliable."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🤖</span>}
            title="AI / ML QA"
            description="Specialized testing for AI-driven systems to validate performance, accuracy, and edge cases."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🛡</span>}
            title="Security Testing"
            description="In-depth vulnerability assessments and penetration testing to protect sensitive data."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>📱</span>}
            title="Mobile Testing"
            description="Cross-platform testing for iOS and Android to ensure a seamless mobile experience."
          />
        </div>
      </div>
    </section>
  );
}

export default TestingServices;