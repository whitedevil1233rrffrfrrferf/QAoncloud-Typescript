import React from "react";
import styles from "./ServiceCard.module.css";
import IconWrapper from "@/components/Common/IconWrapper/IconWrapper";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  learnMoreHref?: string; // 👈 optional
}

export default function ServiceCard({
  icon,
  title,
  description,
  learnMoreHref
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <IconWrapper>{icon}</IconWrapper>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      {learnMoreHref && (
        <a href={learnMoreHref} className={styles.learnMore}>
          Learn More <span aria-hidden>↗</span>
        </a>
      )}
    </div>
  );
}
