"use client";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import styles from "./PhaseSection.module.css";

const phases = [
  {
    id: 1,
    label: "Phase 1",
    position: "left" as const,
    whatWeDo: [
      "Gather context about your product",
      "Map critical user paths and risk areas",
      "Integrate with your CI/CD",
      "Define success metrics together",
    ],
    whatYouGet: [
      "QA strategy document tailored to your product",
      "Clear scope and coverage plan",
      "Named engineer(s) assigned to your account",
    ],
  },
  {
    id: 2,
    label: "Phase 2",
    position: "right" as const,
    whatWeDo: [
      "AI generates initial test cases from your product",
      "Engineers review, refine, and add domain-specific cases",
      "First test cycles run against your staging environment",
      "We validate our approach with real concerns",
    ],
    whatYouGet: [
      "Preliminary bug reports",
      "Validated test coverage baseline",
      "Testing rooted in real product knowledge",
    ],
  },
  {
    id: 3,
    label: "Phase 3",
    position: "left" as const,
    whatWeDo: [
      "QA runs in sync with your release cadence",
      "Automated reports delivered every cycle",
      "Our engineers are always up for a chat in your Slack",
      "QA that's continuously refined as your product evolves",
    ],
    whatYouGet: [
      "Pre-release confidence",
      "Bugs caught before customers find them",
      "QA that keeps pace with your roadmap",
    ],
  },
];

type Phase = (typeof phases)[0];

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 12" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <div className={`${styles.row} ${phase.position === "right" ? styles.rowRight : styles.rowLeft}`}>
      <div className={styles.cardOuter}>
        {/* Phase label ALWAYS on left */}
        <div className={styles.phaseLabel}>{phase.label}</div>
        <div className={styles.card}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <ClockIcon />
              <span className={styles.sectionTitle}>What we do</span>
            </div>
            <ul className={styles.list}>
              {phase.whatWeDo.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.divider} />
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <GiftIcon />
              <span className={styles.sectionTitle}>What you get</span>
            </div>
            <ul className={styles.list}>
              {phase.whatYouGet.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Connector that matches the Figma:
 * - Left card → arc goes RIGHT then curves DOWN-LEFT to the right card
 * - Right card → arc goes LEFT then curves DOWN-RIGHT to the left card
 * 
 * Using a tall viewBox (1000 x 200) so the curve has room to breathe.
 * The left card occupies roughly x: 0–500, right card x: 500–1000.
 */
function Connector({ fromPosition, id }: { fromPosition: "left" | "right"; id: number }) {
  const markerId = `arrow-${id}`;

  // Left → Right: horizontal line from ~50% x to the right, then down
  const leftToRight = "M 460 0 L 820 0 Q 850 0 850 30 L 850 100";
  // Right → Left: horizontal line from ~50% x to the left, then down
  const rightToLeft = "M 540 0 L 150 0 Q 120 0 120 30 L 120 100";

  return (
    <div className={styles.connectorWrapper}>
      <svg
        className={styles.connectorSvg}
        viewBox="0 0 1000 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <marker
            id={markerId}
            markerWidth="14"
            markerHeight="14"
            refX="7"
            refY="7"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0 0 L14 7 L0 14 z" fill="#f97316" />
          </marker>
        </defs>
        <path
          d={fromPosition === "left" ? leftToRight : rightToLeft}
          stroke="#f97316"
          strokeWidth="4"
          strokeDasharray="10 8"
          strokeLinecap="round"
          fill="none"
          markerEnd={`url(#${markerId})`}
        />
      </svg>
    </div>
  );
}

export default function PhaseSection() {
  return (
    <section className={styles.wrapper}>
        <SectionHeader title="From kickoff to " highlight='coverage in weeks' description={`Here’s what happens when you start working with us.`} />
      {/* <div className={styles.header}>
        <h2 className={styles.title}>
          From kickoff to{" "}
          <span className={styles.highlight}>coverage in weeks</span>
        </h2>
        <p className={styles.subtitle}>
          Here&apos;s what happens when you start working with us.
        </p>
      </div> */}

      <div className={styles.timeline}>
        {phases.map((phase, index) => (
          <div key={phase.id} className={styles.phaseBlock}>
            <PhaseCard phase={phase} />
            {index < phases.length - 1 && (
              <Connector fromPosition={phase.position} id={phase.id} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}