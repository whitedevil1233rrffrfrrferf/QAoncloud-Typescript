import styles from "./CaseCard.module.css";

interface CaseCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
}

export default function CaseCard({
  image,
  tag,
  title,
  description,
}: CaseCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.tag}>{tag}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
