import styles from "./Cards.module.css";
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  items: string[];
  icon?: ReactNode;
}

export const Cards = ({ title, items, icon }: FeatureCardProps) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};