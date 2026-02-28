import React from 'react';
import styles from './BlogPage.module.css';
import { ContentWrapper } from "@/components/Common/ContentWrapper/ContentWraper";
import { Banner } from "@/components/Common/Banner/Banner";
import Image from 'next/image'

const BlogPage: React.FC = () => {
  return (
    <div className={styles.blogPage}>


      {/* HERO */}
      <section className={styles.hero}>
        {/* Using a placeholder image. Replace src with actual team meeting image */}
        <img
          src="/Images/BlogsPage/blogheader.png"  
          alt="Team meeting"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Community &amp; Lifestyle Platform · 6-month engagement
          </h1>
          <p className={styles.heroSubtitle}>
            A fast-growing SaaS platform struggling with release quality partnered with us to transform their QA process.
          </p>
        </div>
      </section>

      {/* KEY RESULTS */}
      <section className={styles.keyResults}>
        <p className={styles.sectionLabel}>
          Key <span>Results</span>
        </p>
        <div className={styles.metricsCard}>
          <div className={styles.metric}>
            <span className={styles.metricValue}>+42%</span>
            <span className={styles.metricLabel}>Increase In Weekly Active Users</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>–31%</span>
            <span className={styles.metricLabel}>Eduction In Early Churn</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricValue}>2.3×</span>
            <span className={styles.metricLabel}>Improvement In Core Feature Adoption</span>
          </div>
        </div>
      </section>

      {/* THE SITUATION */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>The Situation</h2>
        <p className={styles.sectionText}>
          Indihoof is a community-driven platform designed to help people discover, connect, and participate in local groups and activities. As the platform expanded, the team noticed that while user acquisition was strong, long-term engagement was falling short
        </p>
        <p className={styles.sectionText}>
          New users often struggled to understand how to get value from the platform after signing up. Important community features were buried, and the onboarding experience didn't clearly communicate Indihoof's core purpose.
        </p>
        <p className={styles.sectionText}>
          Indihoof partnered with Qaoncloud to identify the root causes behind these issues and redesign the experience around real user behavior.
        </p>
      </section>

      {/* THE CHALLENGE */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>The Challenge</h2>
        <p className={styles.blockquote}>
          "We had a strong vision, but users weren't reaching the 'aha' moment fast enough."
        </p>
        <p className={styles.sectionText}>The primary challenges were:</p>
        <ul className={styles.challengeList}>
          <li>High drop-off during the first week of usage</li>
          <li>Poor discoverability of community and interaction features</li>
          <li>Lack of a clear narrative guiding users through the product</li>
        </ul>
      </section>

      {/* THE RESULTS */}
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>The Results</h2>
        <p className={styles.sectionText}>
          After launching the updated experience, Indihoof saw immediate improvements in both engagement and retention.
        </p>
        <p className={styles.sectionText}>
          Users were able to understand the platform faster, explore communities more confidently, and interact more frequently. Internally, the Indihoof team gained a clearer product direction and a repeatable framework for future improvements.
        </p>
      </section>

      <ContentWrapper>
        <Banner
          title="Want to create experiences users actually come back to?"
          highlight=""
          description=""
          subDescription='30 minutes. No pitch deck. Just a conversation about your setup and whether we can help'
          ctaLabel="Book a 30-Minute Call"
          ctaHref="/Contact-us"
          decorativeImage="/Images/Footer/HomePage.png"
        />
      </ContentWrapper>

    </div>
  );
};

export default BlogPage;