import styles from "./Stats.module.css";

interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className={styles.item}>
      <h2 className={styles.value}>{value}</h2>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
