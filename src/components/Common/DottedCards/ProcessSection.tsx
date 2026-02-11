import React from 'react';
import styles from './ProcessSection.module.css';
import { ProcessStep } from './ProcessStep';
import { Sparkles, Code2, Zap } from 'lucide-react';
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
      stroke="#3093E8"
      strokeWidth="2"
      strokeDasharray="8 8"
      fill="none"
    />
  </svg>
);

export const ProcessSection: React.FC = () => {
  return (
    <section className={styles.processSection}>
      <div className={styles.header}>
        {/* <h2 className={styles.heading}>
          How do we deliver <span className={styles.highlight}>2X faster</span>?
        </h2>
        <p className={styles.subheading}>
          Accelerated by AI, validated by human expertise, our QA testing services are reliable, thorough, and a lot faster than traditional QA.
        </p> */}
        <SectionHeader title='How do we deliver' highlight='2X faster?' description='Accelerated by AI, validated by human expertise, our QA testing services are reliable, thorough, and a lot faster than traditional QA.' />
      </div>

      <div className={styles.stepsContainer}>
        <ProcessStep
          icon={Sparkles}
          title="AI handles the grunt work"
          description="Be it test case generation, scriptless automation, or synthetic test data, our AI handles high-volume, repetitive work that slows teams down."
        />

        <ProcessStep
          icon={Code2}
          title="Our engineers make the calls"
          description="Nothing about your product or your users is generic. Our engineers learn your product, understand user behaviour, and make the strategic calls that algorithms can't."
        />

        <ProcessStep
          icon={Zap}
          title="You ship faster, with confidence"
          description="Detailed, weekly reports. Bugs caught before production. Engineers doing what they do best instead of testing."
        />

        <CurvedConnector position="first" />
        <CurvedConnector position="second" />
      </div>
    </section>
  );
};