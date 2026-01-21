// Banner.tsx
import React from "react"
import styles from "./Banner.module.css"
import SectionHeader from "../SectionHeader/SectionHeader"

export interface BannerProps {
  title: string
  highlight?: string
  description: string
  ctaLabel: string
  onCtaClick?: () => void
}

export const Banner: React.FC<BannerProps> = ({
  title,
  highlight,
  description,
  ctaLabel,
  onCtaClick,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <SectionHeader
          title="Stop firefighting. Start shipping "
          highlight="with confidence."
          description="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
        />

        <button className={styles.button} onClick={onCtaClick}>
          {ctaLabel}
        </button>
      </div>
    </section>
  )
}
