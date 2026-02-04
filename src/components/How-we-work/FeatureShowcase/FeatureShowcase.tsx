"use client";

import React, { useState } from 'react';
import styles from './FeatureShowcase.module.css';
import SectionHeader from '@/components/Common/SectionHeader/SectionHeader';

interface Feature {
  title: string;
  items: string[];
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Communication',
    items: [
      'We join your Slack, Teams, or Discord - whatever you use',
      'Daily async updates, not meetings that eat your calendar',
      'Escalations go directly to you when judgment is needed'
    ],
    icon: 'communication'
  },
  {
    title: 'Tooling',
    items: [
      'Native integration with your CI/CD (GitHub Actions, CircleCI, Jenkins, GitLab CI, etc.)',
      'Works with your existing test management tools or we bring ours',
      'Automated reports land in your inbox, not a portal you\'ll forget to check'
    ],
    icon: 'tooling'
  },
  {
    title: 'Cadence',
    items: [
      'Release daily? We test daily.',
      'Sprint-based? We align to your sprints.',
      'Chaotic startup schedule? We\'ve seen it. We adapt.'
    ],
    icon: 'cadence'
  }
];

const FeatureShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <div className={styles.container}>
      <SectionHeader title='We plug into' highlight='your workflow' description="You don't change how you work. We adapt to you." />
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className={`${styles.card} ${index === currentSlide ? styles.active : ''}`}
          >
            <h2 className={styles.title}>{feature.title}</h2>
            <ul className={styles.list}>
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.iconContainer}>
              {feature.icon === 'communication' && (
                <div className={styles.communicationIcons}>
                  <div className={styles.slackIcon}></div>
                  <div className={styles.teamsIcon}>T</div>
                  <div className={styles.discordIcon}></div>
                </div>
              )}
              {feature.icon === 'tooling' && (
                <div className={styles.toolingIcons}>
                  <div className={styles.cicdIcon}></div>
                  <div className={styles.githubIcon}></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* <div className={styles.pagination}>
        <button 
          onClick={prevSlide} 
          className={styles.navButton}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <span className={styles.pageInfo}>
          {currentSlide + 1} / {features.length}
        </span>
        <button 
          onClick={nextSlide} 
          className={styles.navButton}
          aria-label="Next slide"
        >
          ›
        </button>
      </div> */}
    </div>
  );
};

export default FeatureShowcase;
