// Banner.tsx
import React from "react"
import styles from "./Banner.module.css"
import SectionHeader from "../SectionHeader/SectionHeader"
import Button from "../Button/Button"

export interface BannerProps {
  title: string
  highlight?: string
  description: string
  subDescription?: string
  ctaLabel: string
  ctaHref?: string
  onCtaClick?: () => void
}

export const Banner: React.FC<BannerProps> = ({
  title,
  highlight,
  description,
  subDescription,
  ctaLabel,
  ctaHref = "/how-we-work",
  
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <SectionHeader
          title={title}
          highlight={highlight}
          description={description}
          subDescription={subDescription}
        />

        <Button href={ctaHref} variant="primary" >
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}