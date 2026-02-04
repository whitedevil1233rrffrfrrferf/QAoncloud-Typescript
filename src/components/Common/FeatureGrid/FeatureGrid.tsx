import { FeatureCard } from "./FeatureCard";
import styles from "./FeatureGrid.module.css";


export const FeatureGrid = () => {
  return (
    <div className={styles.grid}>
      <FeatureCard
        title="Step 1: AI handles the grunt work"
        description="Be it test case generation, scriptless automation, or synthetic test data, our AI handles the high-volume, repetitive work that slows teams down."
        icon={<StarIcon />}
      />

      <FeatureCard
        title="Step 2: Our engineers make the calls"
        description="Nothing about your product or your users is generic. Our engineers learn your product, understand user behaviour, and make the strategic calls that algorithms can't."
        icon={<UserIcon />}
      />

      <FeatureCard
        title="Step 3: You ship faster, with confidence"
        description="Detailed, weekly reports. Bugs caught before production. Engineers doing what they do best instead of testing. We’re fast, thorough, and accurate. You can't call an algorithm at 2AM, but you can call us!"
        icon={<CircleIcon />}
      />

      {/* <FeatureCard
        title="We do more than one-time audits"
        description="We don’t just hand in our report and disappear. We stick with you until it ships."
        icon={<ArrowIcon />}
      /> */}
    </div>
  );
};

/* Simple SVG icons */
const StarIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
  </svg>
);

const UserIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <circle cx="12" cy="7" r="4" />
    <path d="M5 21c0-4 14-4 14 0" />
  </svg>
);

const CircleIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <path d="M5 12h14M13 5l6 7-6 7" />
  </svg>
);
