import Image from "next/image";
import styles from "./PartnerSection.module.css";

export default function PartnerImage() {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src="/saas.jpg"   // put image in /public
        alt="Team collaboration"
        fill
        className={styles.image}
        priority
      />
    </div>
  );
}
