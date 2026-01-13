import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import React from 'react'
import classes from './PartnerTesting.module.css'
import StatsSection from './StatCard/StatSection'
function PartnerTesting() {
  return (
    <div className={classes.container}>
        <SectionHeader
            title="Your"
            highlight="partner-in-testing"
            description="We're not a body shop that throws testers at your problem. We're a strategic QA partner that embeds with your team, understands your product deeply, and scales with you as you grow."
        />
        <StatsSection />
    </div>
  )
}

export default PartnerTesting