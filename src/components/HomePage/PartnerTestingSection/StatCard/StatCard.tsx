// components/stats/StatCard.tsx
import styles from "./StatCard.module.css";

interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.value}>{value}</h2>
      <div className={styles.label}>{label}</div>
    </div>
  );
}