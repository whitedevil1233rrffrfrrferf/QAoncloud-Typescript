import Image from "next/image";
import styles from "./Hero.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.visualInner}>
        <div className={`${styles.metricTag} ${styles.metricTagTop}`}>
          40% Faster than in house team
        </div>
        <div className={`${styles.metricTag} ${styles.metricTagRight}`}>
          60+ Global Team Trust Us
        </div>
        <div className={`${styles.metricTag} ${styles.metricTagBottom}`}>
          12+ Years of QA Testing Services
        </div>

        <Image
          className={styles.cubeImage}
          src="/cube.png"
          alt="Rotating cube"
          width={500}
          height={500}
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
