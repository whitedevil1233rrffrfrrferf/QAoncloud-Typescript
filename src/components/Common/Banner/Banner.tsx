// Banner.tsx
import React from "react"
import styles from "./Banner.module.css"
import SectionHeader from "../SectionHeader/SectionHeader"
import Button from "../Button/Button"

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
          subDescription="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
        />

        
          <Button href="/how-we-work" variant="primary">
            Talk to an expert
          </Button>
      
      </div>
    </section>
  )
}
