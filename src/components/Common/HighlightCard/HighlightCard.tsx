import styles from "./HighlightCard.module.css";
import { ReactNode } from "react";

interface HighlightCardProps {
  text: string;
  icon?: ReactNode;
}

export const HighlightCard = ({ text, icon }: HighlightCardProps) => {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <p className={styles.text}>{text}</p>
    </div>
  );
};