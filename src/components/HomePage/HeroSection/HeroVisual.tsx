import Image from "next/image";
import styles from "./Hero.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.visualInner}>
        <div className={`${styles.metricTag} ${styles.metricTagTop}`}>
          40% Faster than in-house teams
        </div>
        <div className={`${styles.metricTag} ${styles.metricTagRight}`}>
          60+ Global teams trust us
        </div>
        <div className={`${styles.metricTag} ${styles.metricTagBottom}`}>
          12+ Years of unmatched QA testing services
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
