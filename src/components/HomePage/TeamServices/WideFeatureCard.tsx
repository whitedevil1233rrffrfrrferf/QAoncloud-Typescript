import styles from "./WideFeatureCard.module.css";
import { ReactNode } from "react";

interface WideFeatureCardProps {
  title: string;
  subtitle?: string;
  description: string;
  quote?: string;
  icon?: ReactNode;
}

export const WideFeatureCard = ({
  title,
  subtitle,
  description,
  quote,
  icon,
}: WideFeatureCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <p className={styles.description}>{description}</p>

        {quote && <p className={styles.quote}>~ “{quote}”</p>}
      </div>

      {icon && <div className={styles.iconWrapper}>{icon}</div>}
    </div>
  );
};
