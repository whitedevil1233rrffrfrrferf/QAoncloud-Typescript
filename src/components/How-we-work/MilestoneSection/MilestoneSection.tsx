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
        "Named engineer(s) in your Slack",
      ],
    },
    {
      day: 14,
      items: [
        "First test cycles running",
        "Initial bugs caught",
        "Coverage baseline established",
      ],
    },
    {
      day: 30,
      items: [
        "QA running in sync with your releases",
        "40% speed difference visible",
        "Clear path forward—or part ways cleanly",
      ],
    },
  ];

  return (
    <section className={styles.section}>
      <SectionHeader
        title="What you can expect "
        highlight="in 30 days"
        description="With QAonCloud, you get a clear picture of what to expect. No confusion. No surprises. Just clear milestones."
      />
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