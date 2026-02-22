// Banner.tsx
import React from "react"
import styles from "./Banner.module.css"
import Button from "../Button/Button"

export interface BannerProps {
  title: string
  highlight?: string
  description: string
  subDescription?: string
  ctaLabel: string
  ctaHref?: string
  decorativeImage?: string
  decorativeImageAlt?: string
}

export const Banner: React.FC<BannerProps> = ({
  title,
  highlight,
  description,
  subDescription,
  ctaLabel,
  ctaHref = "/how-we-work",
  decorativeImage,
  decorativeImageAlt = "",
}) => {
  return (
    <section className={styles.container}>
      {/* Left: text content */}
      <div className={styles.inner}>
        <h2 className={styles.title}>
          {title}
          {highlight && <span className={styles.highlight}>{highlight}</span>}
        </h2>

        {description && (
          <p className={styles.description}>{description}</p>
        )}
        {subDescription && (
          <p className={styles.description}>{subDescription}</p>
        )}

        <div className={styles.buttonContainer}>
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>

      {/* Right: decorative image — positioned via Figma specs */}
      {decorativeImage && (
        <div className={styles.imageWrapper} aria-hidden="true">
          <img
            src={decorativeImage}
            alt={decorativeImageAlt}
            className={styles.decorativeImage}
          />
        </div>
      )}
    </section>
  )
}

export default Banner
