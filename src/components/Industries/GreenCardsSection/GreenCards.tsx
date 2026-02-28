import { Check, TriangleAlert } from "lucide-react";
import styles from "./GreenLineCard.module.css";

interface FeatureLineCardProps {
  title: string;
  description: string;
  variant?: "green" | "caution";
}

export default function FeatureLineCard({
  title,
  description,
  variant = "green",
}: FeatureLineCardProps) {
  const isGreen = variant === "green";

  return (
    <div className={styles.featureCard}>
      <div className={styles.featureLine}>
        <span
          className={styles.checkIcon}
          style={{ color: isGreen ? "#00FF59" : "#FFB042" }}
        >
          {isGreen ? <Check size={14} /> : <TriangleAlert size={14} />}
        </span>
        <span
          className={styles.line}
          style={{
            borderImage: `linear-gradient(90deg, ${
              isGreen ? "#00FF59" : "#FFB042"
            } 0%, rgba(255, 255, 255, 0.1) 100%) 1`,
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}