import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import styles from "./SmoothReleases.module.css";
import { FeatureCard } from "@/components/Common/FeatureGrid/FeatureCard";
import { ReactNode } from "react";

/* ---------------- TYPES ---------------- */

type IconKey = "star" | "user" | "circle" | "arrow";

interface FeatureItem {
  title: string;
  description: string;
  icon: IconKey;
}

interface SmoothReleasesProps {
  title: string;
  highlight: string;
  features: FeatureItem[];
}

/* ---------------- ICONS ---------------- */

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

/* ---------------- ICON MAP ---------------- */

const iconMap: Record<IconKey, ReactNode> = {
  star: <StarIcon />,
  user: <UserIcon />,
  circle: <CircleIcon />,
  arrow: <ArrowIcon />,
};

/* ---------------- COMPONENT ---------------- */

export const SmoothReleases = ({
  title,
  highlight,
  features,
}: SmoothReleasesProps) => {
  return (
    <section className={styles.section}>
      <SectionHeader title={title} highlight={highlight} />

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={iconMap[feature.icon]}
          />
        ))}
      </div>
    </section>
  );
};
