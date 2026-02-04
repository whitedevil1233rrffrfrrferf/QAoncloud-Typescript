import styles from "./Benefits.module.css";

const benefits = [
  "Ensure a flawless user experience with an intuitive and engaging user interface.",
  "Launch secure, compliant, and bug-free products confidently.",
  "Increase customer retention with an optimized, user-centric application.",
  "Secure transactions and sensitive financial data with seamless integration.",
  "Elevate app performance and scalability under real-world conditions.",
];

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <h2 className={styles.title}>
        The Key Benefits of <span>QA Testing</span>
      </h2>

      <ul className={styles.list}>
        {benefits.map((text, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.number}>{index + 1}</span>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
