import { TriangleAlert } from "lucide-react";
import styles from "./YellowLineCard.module.css";

interface FeatureLineCardProps {
  title: string;
  description: string;
}

export default function FeatureLineYellowCard({
  title,
  description,
}: FeatureLineCardProps) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureLine}>
        <span className={styles.checkIcon}>
          <TriangleAlert />
        </span>
        <span className={styles.line} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>  
      
    </div>
  );
}
