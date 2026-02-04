import styles from "./FeatureCard.module.css";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
