import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import styles from './QAoncloudGuarentee.module.css'
import React from 'react'
import GuaranteeCard from './GuarenteeCard'
import {
  FiStar,
  FiUsers,
  FiCheckCircle,
  FiRepeat,
} from "react-icons/fi";

function QAoncloudGuarentee() {
  return (
    
       <section className={styles.section}>
        <SectionHeader
          title="The QAonCloud"
          highlight="Guarantee"
          description="Choosing the right QA partner isn't just about finding testers — it's about finding a team that truly understands your product."
        />

        <div className={styles.cardsGrid}>
          <GuaranteeCard
            icon={<FiStar />}
            title="We're built for your stage"
            description="From early startups to enterprise-scale teams, our QA adapts to your reality."
          />

          <GuaranteeCard
            icon={<FiUsers />}
            title="QA is our forte"
            description="Testing is all we do — refined over 12+ years across modern tech stacks."
          />

          <GuaranteeCard
            icon={<FiCheckCircle />}
            title="No body shop"
            description="We partner long-term, integrating directly into your delivery process."
          />

          <GuaranteeCard
            icon={<FiRepeat />}
            title="Built to scale"
            description="Sprint testing, CI pipelines, and continuous quality — all covered."
          />
        </div>
      
    </section>
  )
}

export default QAoncloudGuarentee