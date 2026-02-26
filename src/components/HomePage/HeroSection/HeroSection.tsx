import styles from './HeroSection.module.css';
import { Link } from 'lucide-react';
import { Button } from 'bootstrap';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Background glow image */}
      <div className={styles.glowWrapper}>
        <img
          src="/Images/Banner/HomeBanner.png"
          alt=""
          className={styles.glowImage}
          aria-hidden="true"
        />
      </div>

      <div className={styles.content}>
        {/* Text block */}
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            40% faster QA. Accelerated by AI,<br />
            driven by experts.
          </h1>
          <p className={styles.subheading}>
            QA software testing services that deliver impeccable quality, 2X faster.
            No chaos, no compromises.
          </p>
           <div className={styles.buttons}>
            
           <button className={styles.btnSecondary}>Talk To An Expert</button> 
            <button className={styles.btnSecondary}>See How We Work</button>
          </div>
          
          {/* Invisible spacer for positioning */}
          <div className={styles.spacer}></div>
        </div>
        
        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>40%</h2>
            <p className={styles.statLabel}>Faster than in-house team</p>
          </div>
          <div className={styles.statItem}>
            <h2 className={styles.statNumber}>12+ years</h2>
            <p className={styles.statLabel}>Of QA Testing Services.</p>
          </div>
          <div className={styles.statItem}>
            <h2 className={styles.statNumberOrange}>FinTech, HealthTech &amp; SaaS</h2>
            <p className={styles.statLabel}>Vertical Expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
}
