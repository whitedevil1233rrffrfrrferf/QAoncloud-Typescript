import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import { MilestoneCard } from "./MilestoneCard";
import styles from "./MilestoneSection.module.css";

export const MilestoneSection = () => {
  const milestones = [
    {
      day: 7,
      items: [
        "Kickoff complete, strategy defined",
        "Integrations live",
        "Named engineer(s) in your Slack"
      ]
    },
    {
      day: 14,
      items: [
        "First test cycles running",
        "Initial bugs caught",
        "Coverage baseline established"
      ]
    },
    {
      day: 30,
      items: [
        "QA running in sync with your releases",
        "40% speed difference visible",
        "Clear path forward—or part ways cleanly"
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionHeader title="What you're " highlight="signing up for" description="Clear milestones. No surprises." />
        {/* <h2 className={styles.title}>
          What you're <span className={styles.highlight}>signing up for</span>
        </h2>
        <p className={styles.subtitle}>Clear milestones. No surprises.</p> */}
      </div>

      <div className={styles.grid}>
        {milestones.map((milestone) => (
          <MilestoneCard
            key={milestone.day}
            day={milestone.day}
            items={milestone.items}
          />
        ))}
      </div>
    </section>
  );
};