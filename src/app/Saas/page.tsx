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
import ClientSlider from '@/components/Industries/Slider/Slider'
import ServicePageHeader from '@/components/Industries/Saas/Header/ServicePageHeader'
import FeatureLineYellowCard from "@/components/Common/YellowCards/YellowLineCard";
import FeatureLineCard from "@/components/Common/GreenCards/GreenLineCard";
import FeatureLineGreenCard from "@/components/Common/GreenCards/GreenLineCard";
import Regulations from '@/components/Industries/QualityAssurance/QualityAssurance'

export default function page() {
  return (
    <div>
      <div className={classes.container}>
          <div className={classes.pageContent}>
            <div className={classes.homeHeroBg}> 
              <ServicePageHeader />
            </div> 
            <ClientSlider heading='Trusted by SaaS teams at '/>
          
            <ContentWrapper>
                <QualityAssurance
                  title="Your QA is slowing you down"
                   highlight=' more than you think'
                  description="You built a CI/CD pipeline to help you ship faster. But releases kept piling up for testing. Your engineers had to write test cases when they should’ve been building code. Bugs slipped through. Somehow, somewhere along the way, QA became a bottleneck. Now you’re struggling to choose between shipping fast and shipping safe, while all your competitors are stepping it up."
                  subDescription=""
                  marginBottom={2}
                />
       
              <div className={classes.featuresGrid}>

              <FeatureLineYellowCard
                title="QA is the bottleneck"
                description="Your engineers are doing their best, turning in code on time. But releases wait days for testing. QA always seems to fall behind and eventually something slips through."
              />
              <FeatureLineYellowCard
                title="Your engineers are on QA-duty"
                description="Let’s face it, you developers didn't sign up to write test scripts. But they spend 20-30% of their time testing, when they should be building features."
              />
              <FeatureLineYellowCard
                title="Your customers find bugs before you do"
                description="Flaky tests, missed edge cases, or bugs in production, lead to an overall loss of trust. Sounds like a nightmare, doesn’t it? "
              />
            </div>
               <SmoothReleases
  title="Here’s how we work with "
  highlight="SaaS teams"
  description=""
  features={[
    {
      title: "The discovery call",
      description:
        "We’ll start with a 30-minute conversation — no sales pitch, no fancy decks. We’ll understand your product, discuss your release cadence, and see how we can put an end to QA slowing you down.",
      icon: "star",
    },
    {
      title: "A focused Pilot engagement",
      description:
        "Most teams start with a focused 1-month pilot, depending on the highest-priority surface. You'll soon see your releases are 40% faster, with no added anxiety.",
      icon: "user",
    },
    {
      title: "We’ll scale with you",
      description:
        "We’ll grow with you as your product grows — more surfaces, more test types, more coverage. One thing remains constant: the diligent team that knows your product.",
      icon: "circle",
    },
  ]}
/>
                 <Regulations
              title="AI-accelerated QA that"
              highlight=" keeps up with your cadence."
              description="We combine AI-accelerated QA testing with product-savvy engineers who embed into your workflow in no time.The AI handles the volume: test generation, testing across browsers and devices, regression suites that run in parallel. Meanwhile, the engineers handle the strategic decisions, such as what needs testing, what matters, and what's broken.The result? 40% faster releases. Tests that catch real bugs. Engineers who are free to do what they were hired to do"
              subDescription=""
            />
            <div className={classes.featuresGrid}>

              <FeatureLineCard
                title="QA that keeps up with you"
                description="Want to ship daily? We’ll make it happen! We plug into your CI/CD pipeline to facilitate daily deployments. No more releases waiting on testing."
              />
              <FeatureLineCard
                title="Free your engineers to build"
                description="Free up 20-30% of your developers’ time so they can focus on what they do best - writing code. We’ll handle all the testing."
              />
              <FeatureLineCard
                title="Catch bugs before customers do"
                description="You won’t be finding new bugs in support tickets. Because our tests actually work. Our coverage catches real issues, it doesn’t just pass. We’ll catch all the bugs before production. "
              />
            </div>
                
                 {/*
<SmoothReleases
  title="BFSI testing services that are a "
  highlight="cut above the rest"
  description=""
  features={[
    {
      title: "QA is the bottleneck",
      description:
        "Your engineers are doing their best, turning in code on time. But releases wait days for testing. QA always seems to fall behind and eventually something slips through.",
      icon: "star",
    },
    {
      title: "Your engineers are on QA-duty",
      description:
        "Let’s face it, your developers didn't sign up to write test scripts. But they spend 20-30% of their time testing, when they should be building features.",
      icon: "user",
    },
    {
      title: "Your customers find bugs before you do",
      description:
        "Flaky tests, missed edge cases, or bugs in production lead to an overall loss of trust. Sounds like a nightmare, doesn’t it?",
      icon: "circle",
    },
  ]}
/>

<SmoothReleases
  title="Here’s how we work with "
  highlight="SaaS teams"
  description=""
  features={[
    {
      title: "The discovery call",
      description:
        "We’ll start with a 30-minute conversation — no sales pitch, no fancy decks. We’ll understand your product, discuss your release cadence, and see how we can put an end to QA slowing you down.",
      icon: "star",
    },
    {
      title: "A focused Pilot engagement",
      description:
        "Most teams start with a focused 1-month pilot, depending on the highest-priority surface. You'll soon see your releases are 40% faster, with no added anxiety.",
      icon: "user",
    },
    {
      title: "We’ll scale with you",
      description:
        "We’ll grow with you as your product grows — more surfaces, more test types, more coverage. One thing remains constant: the diligent team that knows your product.",
      icon: "circle",
    },
  ]}
/>

<QualityTestingServices
  title="AI-accelerated QA that "
  highlight="keeps up with your cadence."
  services={[
    {
      title: "QA that keeps up with you",
      description:
        "Want to ship daily? We’ll make it happen. We plug into your CI/CD pipeline to facilitate daily deployments. No more releases waiting on testing.",
      learnMoreHref: "/services/functional-testing",
      icon: "code",
    },
    {
      title: "Free your engineers to build",
      description:
        "Free up 20-30% of your developers’ time so they can focus on what they do best — writing code. We’ll handle all the testing.",
      learnMoreHref: "/services/functional-testing",
      icon: "bolt",
    },
    {
      title: "Catch bugs before customers do",
      description:
        "You won’t be finding new bugs in support tickets. Because our tests actually work. Our coverage catches real issues — it doesn’t just pass.",
      learnMoreHref: "/services/functional-testing",
      icon: "arrow",
    },
  ]}
/>
*/}


                <Partnerships
                
                imageSrc="/Partnership.png" // your screenshot
                companyName="Indihood"
                companyLogo="/indihood_logo.png"
                highlightPercent="40%"
                description="We were terrified of our FDA submission. QAonCloud helped us document our test coverage so thoroughly that the review went smoother than anything we'd submitted before."
              />
              <QABenefits />
            </ContentWrapper>
            
              <FAQs
                title="Questions we're frequently asked."
                highlight="(FAQs)"
                faqs={[
                  {
                    question: "How does QAonCloud ensure compliance with financial regulations while testing?",
                    answer:
                      "We're all-rounders! We've worked with a wide variety of customers across all sectors. We are working with more clients in the BFSI, SaaS and Healthcare sectors, but we also have clients in eCommerce, Luxury, and Pharmaceutical sectors.",
                  },
                  {
                    question: "What types of testing services do you offer?",
                    answer:
                      "We provide comprehensive testing services including functional testing, performance testing, security testing, automation testing, and more. Our solutions are tailored to meet your specific needs.",
                  },
                  {
                    question: "How quickly can you start testing our project?",
                    answer:
                      "We can typically start within 24–48 hours after project kickoff. Our onboarding process is streamlined to get your testing up and running quickly.",
                  },
                  {
                    question: "Do you provide both manual and automated testing?",
                    answer:
                      "Yes, we offer both manual and automated testing solutions. Our team will help you determine the best approach based on your project requirements and budget.",
                  },
                  {
                    question: "What makes QAonCloud different from other testing providers?",
                    answer:
                      "We combine deep expertise with flexible engagement models, competitive pricing, and a strong commitment to quality. Our team works as an extension of your in-house team.",
                  },
                ]}
              />
              
    
              <ContentWrapper>
                
                <Banner
                  title="You can bet on us to  "
                  highlight="deliver quality"
                  description="Your fintech product shouldn’t look like a bad bet. Our BFSI testing services will make sure it doesn’t. We’ll test, push, and prod every bit to ensure it works perfectly, to inspire customer trust and loyalty. "
                  
                  ctaLabel="Talk to an expert"
                  ctaHref="/how-we-work"
                />
                
              </ContentWrapper>
          </div>
      </div>
        
    </div>
    
  )
}