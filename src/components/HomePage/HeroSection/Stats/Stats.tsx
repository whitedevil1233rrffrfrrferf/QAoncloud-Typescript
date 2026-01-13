import styles from "./Stats.module.css";
import StatItem from "./StatItem";

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.list}>
        <StatItem value="12+" label="Years Of Success" />
        <StatItem value="155+" label="Happy Client" />
        <StatItem value="8+" label="Global Offices" />
      </div>
    </section>
  );
}
