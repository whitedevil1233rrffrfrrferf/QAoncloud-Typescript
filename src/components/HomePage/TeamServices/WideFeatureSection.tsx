import styles from "./WideFeatureSection.module.css";
import { WideFeatureCard } from "./WideFeatureCard";


export const WideFeatureSection = () => {
  return (
    <section className={styles.section}>
      <WideFeatureCard
        title="Fintech"
        subtitle="Compliance-ready from day one"
        description="In FinTech, QA isn’t just about catching bugs, but about security and compliance too. We’re built for regulated environments, with automated audit trails, security testing, and coverage that stands up to scrutiny."
        quote="We’ve tested payment systems, trading platforms, and banking ops. We know what’s at stake."
        icon={<ShieldIcon />}
      />

      <WideFeatureCard
        title="Healthcare"
        subtitle="HIPAA-compliant by design. "
        description="Healthcare QA requires a fine balance of precision and restraint. Our synthetic test data ensures compliance, while still testing real-world scenarios. Our engineers have worked across EMR integrations, patient portals, and clinical workflows, where reliability is critical"
        quote="We’ve tested payment systems, trading platforms, and banking ops. We know what’s at stake."
        icon={<ShieldIcon />}
      />
      <WideFeatureCard
        title="SaaS"
        subtitle="Ship continuously, without breaking things"
        description="Our AI-accelerated testing scales with your release cadence, testing across browsers, devices, and integrations without slowing down delivery. Our QA keeps up with you as your product evolves, so shipping daily feels like routine, not risky"
        quote="You want to ship daily. We make it happen."
        icon={<ShieldIcon />}
      />
    </section>
  );
};
const ShieldIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3B82F6"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3B82F6"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.8 4.6c-1.5-1.6-4-1.6-5.5 0L12 7.9l-3.3-3.3c-1.5-1.6-4-1.6-5.5 0-1.6 1.6-1.6 4.1 0 5.7L12 21l8.8-10.7c1.6-1.6 1.6-4.1 0-5.7z" />
  </svg>
);