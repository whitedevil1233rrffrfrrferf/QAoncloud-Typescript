import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "small"; // Add size type

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize; // Add size prop
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "default", // Default size
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </Link>
  );
}