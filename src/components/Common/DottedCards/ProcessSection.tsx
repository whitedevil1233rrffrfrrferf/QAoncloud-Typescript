import React from 'react';
import styles from './ProcessSection.module.css';
import { ProcessStep } from './ProcessStep';
import { Sparkles, Code2, Zap, LucideIcon } from 'lucide-react';
import SectionHeader from '../SectionHeader/SectionHeader';

const CurvedConnector = ({ position }: { position: 'first' | 'second' }) => (
  <svg 
    className={`${styles.connector} ${styles[position]}`}
    viewBox="0 0 200 100" 
    fill="none" 
    preserveAspectRatio="none"
  >
    <path
      d="M 0 50 Q 100 0, 200 50"
      stroke="#FF8641"
      strokeWidth="2"
      strokeDasharray="8 8"
      fill="none"
    />
  </svg>
);

interface ProcessStepData {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  highlight: string;
  description: string;
  steps: ProcessStepData[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  title,
  highlight,
  description,
  steps,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <SectionHeader title={title} highlight={highlight} description={description} />
      </div>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}

        <CurvedConnector position="first" />
        <CurvedConnector position="second" />
      </div>
    </section>
  );
};