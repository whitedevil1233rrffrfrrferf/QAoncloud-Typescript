import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import React from 'react'
import styles from './WorkingTogether.module.css'
import { CardsGrid } from './CardsGrid'

function WorkingTogether() {
  return (
    <div className={styles.container}>
      <SectionHeader
        title="Two systems"
        highlight="working together"
        description="Traditional QA is slower because humans do everything including repetitive work that doesn't need human strategic interventions. We split the work differently."
      />
      <CardsGrid />
    </div>
  )
}

export default WorkingTogether