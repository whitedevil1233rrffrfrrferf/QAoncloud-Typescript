import Image from "next/image";
import styles from "./Hero.module.css";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import Stats from "./Stats/Stats";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <HeroContent />
        <HeroVisual />
        
      </div>
      
    </section>
  );
}
