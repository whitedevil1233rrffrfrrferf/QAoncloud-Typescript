import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
