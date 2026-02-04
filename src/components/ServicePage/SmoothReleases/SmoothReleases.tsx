
import { FeatureCard } from "@/components/Common/FeatureGrid/FeatureCard";
import styles from "./SmoothReleases.module.css";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";


export const SmoothReleases = () => {
  return (
    <section className={styles.section}>
        <SectionHeader title="QA software testing that guarantees " highlight="smooth releases." />
        <div className={styles.grid}>
        <FeatureCard
            title="Partners, not vendors"
            description="We take ownership, treating your QA needs as our responsibility. No chasing, no stress. We’ll keep an eye on the quality for you, while you do what you do best. "
            icon={<StarIcon />}
        />

        <FeatureCard
            title="Our expertise isn’t limited. "
            description="We do it all and we do it well. Our seasoned experts can handle anything you throw at them. "
            icon={<UserIcon />}
        />

        <FeatureCard
            title="Get more than your money’s worth"
            description="We provide unmatched, high-level QA expertise at a fraction of the cost. Our optimised testing processes offer utmost accuracy, speed, and reliability. "
            icon={<CircleIcon />}
        />

        <FeatureCard
            title="No compromises on quality."
            description="Our robust tools, dynamic work model, and modern software testing approach ensure optimum quality, efficiency, and timely delivery. "
            icon={<ArrowIcon />}
        />
        <FeatureCard
            title="Tailored to your needs."
            description="With detailed insights on user behaviour, we ensure apps are intuitive, user-friendly, with user-oriented functionalities, reducing churn."
            icon={<ArrowIcon />}
        />
        </div>
    </section>
    
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
