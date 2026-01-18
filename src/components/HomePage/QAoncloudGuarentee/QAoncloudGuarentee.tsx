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
            description="Whether you're a 10-person startup or a 500-person enterprise, we scale our approach to match your reality. No one-size-fits-all frameworks here."
          />

          <GuaranteeCard
            icon={<FiUsers />}
            title="We're built for your stage"
            description="Whether you're a 10-person startup or a 500-person enterprise, we scale our approach to match your reality. No one-size-fits-all frameworks here."
          />

          <GuaranteeCard
            icon={<FiCheckCircle />}
            title="QA is our forte"
            description="We're not a generalist agency that dabbles in QA. Software testing is all we do — and we've spent 12+ years perfecting it across every tech stack."
          />

          <GuaranteeCard
            icon={<FiRepeat />}
            title="We're not a body shop"
            description="We're in it for the long haul. From sprint-by-sprint testing to continuous integration, we grow with your product and your team."
          />
        </div>
      
    </section>
  )
}

export default QAoncloudGuarentee