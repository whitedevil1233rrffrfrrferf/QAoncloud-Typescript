// components/stats/StatsSection.tsx
import StatCard from "./StatCard";
import styles from "./StatsSection.module.css";

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
            
            margin: "0 auto",
          }}
        >
          <StatCard value="155+" label="Happy Clients" />
          <StatCard value="12+" label="Years Of Success" />
          <StatCard value="200+" label="Projects Delivered" />
          <StatCard value="8+" label="Global Offices" />
        </div>
      </div>
    </section>
  );
}
