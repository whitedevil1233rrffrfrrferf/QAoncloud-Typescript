import styles from "./PartnerSection.module.css";

export default function PartnerContent() {
  return (
    <>
      <h2 className={styles.heading}>
        We’re the partner-in-testing <span>you need</span>
      </h2>

      <p className={styles.description}>
        We're not a QA body shop with quick-fixes. Or an enterprise firm
        that values you based on the size of your cheques. We're the embedded
        QA partner who grows with you, doing everything it takes to support you.
      </p>

      <p className={styles.description}>
        We've been sharpening our QA skills over the last 12 years just so
        businesses like you can ship quality quickly. We'll work with your
        engineers, owning quality end-to-end, and grow with you.
      </p>
    </>
  );
}
