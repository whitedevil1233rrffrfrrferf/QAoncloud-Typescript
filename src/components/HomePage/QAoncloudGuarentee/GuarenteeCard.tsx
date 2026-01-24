import styles from "./GuaranteeCard.module.css";
import { ReactNode } from "react";
import IconWrapper from "@/components/Common/IconWrapper/IconWrapper";

interface GuaranteeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function GuaranteeCard({
  icon,
  title,
  description,
}: GuaranteeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <IconWrapper>
          {icon}
        </IconWrapper>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      
    </div>
  );
}