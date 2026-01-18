import React from "react";
import styles from "./ServiceCard.module.css";
import IconWrapper from "@/components/Common/IconWrapper/IconWrapper";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <IconWrapper>{icon}</IconWrapper>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
