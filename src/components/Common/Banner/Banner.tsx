// Banner.tsx
import React from "react"
import styles from "./Banner.module.css"
import Button from "../Button/Button"

export interface BannerProps {
  title: string
  highlight?: string
  description: string
  subDescription?: string
  ctaLabel?: string
  ctaHref?: string
  decorativeImage?: string
  decorativeImageAlt?: string
  // All link props are optional
  linkDescription?: string
  linkDescriptionText?: string
  linkDescriptionHref?: string
  hideLinkSuffix?: boolean
  hidectaLabel?: boolean
}

export const Banner: React.FC<BannerProps> = ({
  title,
  highlight,
  description,
  subDescription,
  ctaLabel,
  ctaHref = "/Contact-us",
  decorativeImage,
  decorativeImageAlt = "",
  linkDescription,
  linkDescriptionText,
  linkDescriptionHref = "#",
  hideLinkSuffix = false,
  hidectaLabel = false,
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


        {!hidectaLabel && ctaLabel && (
          <div className={styles.buttonContainer}>
            <Button href="/Contact-us" variant="heroPrimary" size="content">
                            Talk To An Expert
                          </Button>
          </div>
        )}
        {/* Only renders if linkDescription is passed */}
        {linkDescription && (
          <p className={styles.linkDescription}>
            {linkDescription}{" "}
            {linkDescriptionText && (
              <a href={linkDescriptionHref} className={styles.linkDescriptionAnchor}>
                {linkDescriptionText}
              </a>
            )}{" "}
            {!hideLinkSuffix && "with us."}
          </p>
        )}
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
