import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import React from 'react'
import styles from "./QualityAssurance.module.css"
function QualityAssurance() {
  return (
    <div className={styles.container}>
      <SectionHeader
        title="Quality assurance "
        highlight="= Smooth releases"
        description="Quality assurance stops problems before they start. Good QA testing services are the secret to seamless releases, cutting risk, safeguarding your reputation, and helping you ship stronger products faster. "
        subDescription="We weave testing into every step of the development process, improving performance, security, and user experience while reducing rework and release delays. Simply put, we turn unpredictable software into dependable products."
        marginBottom={2} // 👈 applies "1.5rem" to h2, p, and sub-p
      />
    </div>
    
  )
}

export default QualityAssurance