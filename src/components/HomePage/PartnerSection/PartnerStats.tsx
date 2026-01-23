import styles from "./PartnerSection.module.css";

const stats = [
  { value: "155+", label: "Happy Client" },
  { value: "12+", label: "Years Of Success" },
  { value: "200+", label: "Projects Delivered" },
  { value: "8+", label: "Global Offices" },
];

export default function PartnerStats() {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.statItem}>
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
