import styles from "./GuaranteeCard.module.css";
import { ReactNode } from "react";

interface GuaranteeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function GuaranteeCard({
  icon,
  title,
  description,
}: GuaranteeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}