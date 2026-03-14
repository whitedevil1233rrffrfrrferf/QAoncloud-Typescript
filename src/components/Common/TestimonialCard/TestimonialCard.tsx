import React from "react";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarSrc?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  avatarSrc,
}) => {
  return (
    <div className={styles.card}>
      {/* Radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Content */}
      <div className={styles.content}>
          <p className={styles.quoteText}>
          <span className={styles.quoteOpen}>&ldquo;</span>
          {quote}
          <span className={styles.quoteClose}>&rdquo;</span>
        </p>

        {/* Author */}
        <div className={styles.author}>
          {avatarSrc ? (
            <img src={avatarSrc} alt={name} className={styles.avatar} />
          ) : (
            <div className={styles.avatarFallback}>
              {name.charAt(0)}
            </div>
          )}
          <div className={styles.authorInfo}>
            <span className={styles.authorName}>{name}</span>
            <span className={styles.authorRole}>{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};