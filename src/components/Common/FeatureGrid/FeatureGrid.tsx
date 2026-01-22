import { FeatureCard } from "./FeatureCard";
import styles from "./FeatureGrid.module.css";


export const FeatureGrid = () => {
  return (
    <div className={styles.grid}>
      <FeatureCard
        title="We're built for your stage"
        description="We're not your typical enterprise vendors. You are our priority, whether you're a 20-person startup or a global enterprise."
        icon={<StarIcon />}
      />

      <FeatureCard
        title="We're not a body shop"
        description="We don’t offer up inexperienced resources and consider the job done. Our experts work with you from start to finish."
        icon={<UserIcon />}
      />

      <FeatureCard
        title="QA is our forte"
        description="So, it doesn’t have to be your DIY project. Trust us to handle the testing while you focus on what you do best."
        icon={<CircleIcon />}
      />

      <FeatureCard
        title="We do more than one-time audits"
        description="We don’t just hand in our report and disappear. We stick with you until it ships."
        icon={<ArrowIcon />}
      />
    </div>
  );
};

/* Simple SVG icons */
const StarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
  </svg>
);

const UserIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <circle cx="12" cy="7" r="4" />
    <path d="M5 21c0-4 14-4 14 0" />
  </svg>
);

const CircleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <path d="M5 12h14M13 5l6 7-6 7" />
  </svg>
);
