import Image from "next/image";
import styles from "./Hero.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.visualInner}>
        <div className={`${styles.metricTag} ${styles.metricTagTop}`}>
          200+ Successful Releases
        </div>
        <div className={`${styles.metricTag} ${styles.metricTagRight}`}>
          98% Bug Caught
        </div>
        <div className={`${styles.metricTag} ${styles.metricTagBottom}`}>
          80% Faster Release
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
