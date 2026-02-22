"use client";

import { Code2, Zap, ArrowUpRight, Brain, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./ServicesSection.module.css";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  wide?: boolean;
}

const SERVICES: Service[] = [
  {
    title: "Functional Testing",
    description:
      "Every feature works the way it should. We catch bugs or glitches before your users do.",
    icon: Code2,
  },
  {
    title: "Test Automation",
    description:
      "Tests that take minutes, not hours. Our custom automation keeps up with your product.",
    icon: Zap,
  },
  {
    title: "Performance Testing",
    description:
      "No launch-day surprises. Our load, stress, and scalability testing ensures your app can keep up with the traffic.",
    icon: ArrowUpRight,
  },
  {
    title: "AI/ML QA",
    description:
      "Specialized testing for ML models and AI features. Validate accuracy, bias, and edge cases at scale.",
    icon: Brain,
    wide: true,
  },
  {
    title: "Security Testing",
    description:
      "No room for vulnerabilities. Our penetration testing and security audits protect your users and your reputation.",
    icon: Shield,
  },
];

/* ─────────────────────────────────────────
   SVG Grid Pattern (rendered inside inner circle)
───────────────────────────────────────── */
function GridPattern() {
  return (
    <svg
      className={styles.gridPattern}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="svc-grid"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="0" y2="16" stroke="#ffffff" strokeWidth="0.5" />
          <line x1="0" y1="0" x2="16" y2="0" stroke="#ffffff" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#svc-grid)" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Single Card
───────────────────────────────────────── */
function ServiceCard({ title, description, icon: Icon, wide }: Service) {
  return (
    <div className={`${styles.card} ${wide ? styles.colSpan2 : ""}`}>
      {/* Text content */}
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
      </div>

      {/* Bottom-right decorative layered circles */}
      <div className={styles.corner}>
        {/* Outer circle */}
        <div className={styles.outerCircle}>
          {/* Inner circle with grid + icon */}
          <div className={styles.innerCircle}>
            <GridPattern />
            <Icon className={styles.icon} size={28} strokeWidth={1.5} />
          </div>
        </div>

        {/* Blue glow — bottom-right of the outer circle */}
        <div className={styles.blueGlow} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <SectionHeader title="Software testing services that cut risks," highlight="not momentum" />
      

      <div className={styles.grid}>
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
