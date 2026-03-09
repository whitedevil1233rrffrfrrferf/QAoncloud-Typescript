import React from "react"
import styles from "./Banner.module.css"

export interface QABannerProps {
  decorativeImage?: string
  decorativeImageAlt?: string
  ctaHref?: string
}

export const QABanner: React.FC<QABannerProps> = ({
  decorativeImage = "/Images/Footer/HomePage.png",
  decorativeImageAlt = "",
  ctaHref = "/Contact-us",
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <h3 className={styles.title}>
          You could ship{" "}
          <span className={styles.highlight}>2X faster too!</span>
        </h3>

         <p className={styles.description}>
          <a href={ctaHref} className={styles.descriptionAnchor}>
            Talk to an expert
          </a>{" "}
          today to see how we can perfect your QA process.
        </p>
      </div>

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

export default QABanner