import Button from "@/components/Common/Button/Button";
import styles from "./Hero.module.css";
import Stats from "./Stats/Stats";

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <span className={styles.trustedBadge}>
        Trusted by 60+ global engineering teams
      </span>

      <h1>
        40% faster QA. Accelerated by AI, driven by experts.
      </h1>

      <p>
        QA software testing services that deliver impeccable quality, 2X faster. No chaos, no compromises. 
      </p>
      {/* <p>
        At QAonCloud, we know that quality isn’t luck; it’s smart, relentless QA testing. We’re a trusted software testing company that businesses like yours trust to ensure faster releases and fewer bugs, without the hassle of hiring, firefighting, or babysitting vendors.
      </p> */}

      <div className={styles.buttonContainer}>
        <Button href="/how-we-work" variant="primary">
          Talk to an expert
        </Button>
        <Button href="/how-we-work" variant="primary">
          See How We Work
        </Button>
        {/* <button className="primaryBtn">Talk to a QA expert</button>
        <button className="secondaryBtn">See How We Work</button> */}
      </div>
      {/* <Stats /> */}
    </div>
  );
}