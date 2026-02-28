import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'


import React from 'react'
import classes from "./page.module.css"
import QualityAssurance from '@/components/Industries/QualityAssurance/QualityAssurance'
import { SmoothReleases } from '@/components/Industries/SmoothReleases/SmoothReleases'
import QualityTestingServices from '@/components/Industries/QualityServices/QualityServices'
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'

import Partnerships from '@/components/Industries/Partnership/Partnership'
import QABenefits from '@/components/Industries/Benefits/Benefits'

import HowWeWork from '@/components/How-we-work/Header/HowWeWork'
import WorkingTogether from '@/components/How-we-work/WorkingTogether/WorkingTogether'
import HighlightCards from '@/components/How-we-work/HighlightCards/HighlightCards'
import { MilestoneSection } from '@/components/How-we-work/MilestoneSection/MilestoneSection'
import FeatureShowcase from '@/components/How-we-work/FeatureShowcase/FeatureShowcase'


export default function page() {
  return (
    <div>
      <div className={classes.container}>
          <div className={classes.pageContent}>
            <div className={classes.homeHeroBg}> 
              <HowWeWork />
            </div> 
            <ContentWrapper>
                <WorkingTogether />
                <HighlightCards />
                <FeatureShowcase />
                <MilestoneSection />
            </ContentWrapper>
            
            <FAQs
                title="Questions we're frequently asked."
                highlight="(FAQs)"
                faqs={[
                  {
                    question: "What's the minimum commitment?",
                    answer:
                      "We typically start with a 1-month focused engagement. Long enough to prove value, short enough that you're not locked in if it's not a fit.",
                  },
                  {
                    question: "Do we get dedicated engineers or a rotating pool?",
                    answer:
                      "Dedicated. You'll have named engineers who learn your product and stay with you. No explaining context every sprint.",
                  },
                  {
                    question: "What if we need to scale up or down?",
                    answer:
                      "We flex with your needs. Launching a big release? We ramp up. Quieter quarter? We scale back. You're not paying for idle capacity.",
                  },
                  {
                    question: "How do you handle sensitive data?",
                    answer:
                      "Synthetic test data by default. For Healthtech clients, we're HIPAA-compliant. For Fintech, we follow SOC 2 practices. We work within your security requirements.",
                  },
                  {
                    question: "What if we already have some automation?",
                    answer:
                      "Great—we'll assess what's working, integrate with it, and fill the gaps. We're not here to throw out what you've built.",
                  },
                ]}
              />
              <ContentWrapper>
                
                <Banner
                  title="See how this fits"
                  highlight="your needs"
                  description="30 minutes to walk through your setup and see if there's a fit. No pitch deck, no pressure. "
                    //subDescription="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
                  ctaLabel="Book a 30-Minute Call"
                  ctaHref="/how-we-work"
                />
              </ContentWrapper>
              
          </div>
      </div>
        
    </div>
    
  )
}