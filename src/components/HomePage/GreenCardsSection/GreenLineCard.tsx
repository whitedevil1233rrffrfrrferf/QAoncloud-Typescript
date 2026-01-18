import { Check } from "lucide-react";
import styles from "./GreenLineCard.module.css";

interface FeatureLineCardProps {
  title: string;
  description: string;
}

export default function FeatureLineCard({
  title,
  description,
}: FeatureLineCardProps) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureLine}>
        <span className={styles.checkIcon}>
          <Check size={14} />
        </span>
        <span className={styles.line} />
      </div>

      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}
