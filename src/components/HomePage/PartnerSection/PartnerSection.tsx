import styles from "./PartnerSection.module.css";

import PartnerStats from "./PartnerStats";
import PartnerImage from "./PartnerImage";
import PartnerContent from "./PartnerContent";

export default function PartnerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <PartnerContent />
          <PartnerStats />
        </div>
        <PartnerImage />
      </div>
    </section>
  );
}
