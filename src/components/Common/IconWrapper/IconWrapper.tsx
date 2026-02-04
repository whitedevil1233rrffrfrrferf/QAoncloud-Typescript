import React from "react";
import styles from "./IconWrapper.module.css";

interface IconWrapperProps {
  children: React.ReactNode;
}

export default function IconWrapper({ children }: IconWrapperProps) {
  return <div className={styles.wrapper}>{children}</div>;
}
