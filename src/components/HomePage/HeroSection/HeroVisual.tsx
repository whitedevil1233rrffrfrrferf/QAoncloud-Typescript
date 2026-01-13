import Image from "next/image";
import styles from "./Hero.module.css";

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <Image
        src="/Cube.gif"
        alt="Rotating cube"
        width={600}
        height={600}
        priority
        unoptimized
      />
    </div>
  );
}
