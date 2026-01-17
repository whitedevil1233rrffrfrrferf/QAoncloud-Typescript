import styles from "./Hero.module.css";
import Stats from "./Stats/Stats";

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <span className={styles.trustedBadge}>
        Trusted by 60+ global engineering teams
      </span>

      <h1>
        No slip-ups. No delays. No vendor chaos.
        Just reliable software testing services.
      </h1>

      <p>
        At QAonCloud, we know that quality isn’t luck; it’s smart, relentless QA testing. We’re a trusted software testing company that businesses like yours 
        trust to ensure faster releases and fewer bugs, 
        without the hassle of hiring, firefighting, or babysitting vendors.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <button className="primaryBtn">Talk to a QA expert</button>
        <button className="secondaryBtn">See How We Work</button>
      </div>
      <Stats />
    </div>
  );
}
