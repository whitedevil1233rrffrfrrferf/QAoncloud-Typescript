import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'


import React from 'react'
import classes from "./page.module.css"
import QualityAssurance from '@/components/Industries/QualityAssurance/QualityAssurance'
import { SmoothReleases } from '@/components/Industries/SmoothReleases/SmoothReleases'
import QualityTestingServices from '@/components/Industries/QualityServices/QualityServices'
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import ServicePageHeader from '@/components/Industries/Healthcare/Header/ServicePageHeader'
import Partnerships from '@/components/Industries/Partnership/Partnership'
import QABenefits from '@/components/Industries/Benefits/Benefits'
import ClientSlider from '@/components/Industries/Slider/Slider'  
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
            <ClientSlider heading='Trusted by healthtech teams at'/>
            <QualityAssurance
                  title="In healthtech, "
                   highlight='it isn’t “just a bug”'
                  description="The stakes are higher, and the regulations are stricter. Bugs aren’t just bad news, they could prove problematic to patient health."
                  subDescription="But that doesn’t mean you can slow down. Competitors don’t rest, so you can’t either. Your engineers can’t do it all, but your investors expect results. So, do you focus on moving fast or on staying compliant? Most healthtech teams struggle to choose and risk falling behind."
                  marginBottom={2}
                />
            <ContentWrapper>
              <div className={classes.featuresGrid}>

              <FeatureLineYellowCard
                title="Test data is a nightmare"
                description="You can't test with real patient data. But creating realistic synthetic data that covers edge cases and workflows? That's a project in itself. Most teams either cut corners or test mildly."
              />
              <FeatureLineYellowCard
                title="Integrations break quietly"
                description="Think EMRs, EHRs, hospital systems, insurance APIs. They’re fragile, inconsistently documented, and deeply interconnected. It only takes one bad release to break workflows across an entire health system"
              />
              <FeatureLineYellowCard
                title="Regulatory documentation never ends"
                description="Think HIPAA. FDA. SOC 2. Audits demand documented test coverage. Every submission needs proof that you tested what you said you tested."
              />
            </div>
              
              <Regulations
              title="QA that moves"
              highlight=" fast and stays compliant "
              description="Think AI-accelerated QA testing meets engineers with extensive healthcare software experience.Be it generating synthetic test data, automating regression suites, or parallel execution, our AI handles the volume. Our engineers make the calls on what matters clinically, what tends to break, and what auditors demand. The result? 40% faster releases. HIPAA-compliant test data. Documentation that's ready to go."
              subDescription=""
            />
            <div className={classes.featuresGrid}>

              <FeatureLineCard
                title="Synthetic test data that’s safe"
                description="Our AI generates realistic patient data that covers edge cases without exposing PHI. No more cutting corners because you don't have safe data."
              />
              <FeatureLineCard
                title="Engineers who know healthcare, inside out"
                description="Our engineers have tested EMR integrations, HL7 feeds, FHIR APIs, and insurance claim workflows. We know where healthcare software breaks"
              />
              <FeatureLineCard
                title="Built-in audit-ready documentation"
                description="Every test run is documented. Every coverage gap is visible. When auditors or FDA reviewers ask, you can prove your work. "
              />
            </div>
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