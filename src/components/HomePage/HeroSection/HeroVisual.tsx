import Image from "next/image";
import styles from "./Hero.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <Image
        src="/cube.png"
        alt="Rotating cube"
        width={500}
        height={500}
        priority
        unoptimized
      />
    </div>
  );
}
