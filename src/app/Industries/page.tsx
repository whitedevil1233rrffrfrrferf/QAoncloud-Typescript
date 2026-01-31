import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import ClientSlider from '@/components/HomePage/Slider/Slider'

import React from 'react'
import classes from "./page.module.css"
import QualityAssurance from '@/components/Industries/QualityAssurance/QualityAssurance'
import { SmoothReleases } from '@/components/Industries/SmoothReleases/SmoothReleases'
import QualityTestingServices from '@/components/Industries/QualityServices/QualityServices'
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import ServicePageHeader from '@/components/Industries/Header/ServicePageHeader'
import Partnerships from '@/components/Industries/Partnership/Partnership'
import QABenefits from '@/components/Industries/Benefits/Benefits'


export default function page() {
  return (
    <div>
      <div className={classes.container}>
          <div className={classes.pageContent}>
            <div className={classes.homeHeroBg}> 
              <ServicePageHeader />
            </div> 
            <ClientSlider />
            <QualityAssurance
                  title="The Need for "
                  highlight="QA in Fintech"
                  description="So, in order to stay secure and compliant, ensuring no mistakes are made by testing thoroughly is essential. "
                  subDescription="Be it payments, digital channels, credit services, digital core, commercial, corporate banking, investment banking, or trade finance, we’ve got you covered!"
                  marginBottom={2}
                />
            <ContentWrapper>
                <SmoothReleases
                  title="BFSI testing services that are a "
                  highlight="cut above the rest"
                  features={[
                    {
                      title: "Deep Fintech Domain Expertise",
                      description:
                        "Our experience, proficiency in best practices and technical sophistication speaks for itself. ",
                      icon: "star",
                    },
                    {
                      title: "Accelerated time-to-market",
                      description:
                        "We’ll keep it simple, quick, and hassle-free, working alongside your development teams.",
                      icon: "user",
                    },
                    {
                      title: "No Compromises on Quality",
                      description:
                        "Robust tools, dynamic work model, and modern software testing approach",
                      icon: "circle",
                    },
                    {
                      title: "Value for Money",
                      description:
                        "Unmatched, high-level QA expertise at a fraction of the cost, ensuring accuracy, speed, and reliability",
                      icon: "arrow",
                    },
                    {
                      title: "Tailored to your needs.",
                      description:
                        "Ensuring products are intuitive, user-friendly, with user-oriented functionalities, reducing churn.",
                      icon: "arrow",
                    },
                  ]}
                />
                <QualityTestingServices title="Services  "
                  highlight="We Offer"
                  services={[
                    {
                      title: "360° App Testing",
                      description:
                        "Talk about total coverage! Keeps every feature, integration, and transaction running smoothly.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "code",
                    },
                    {
                      title: "Functional Testing",
                      description:
                        "Ensures every payment, login, and feature works as expected, every single time.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "bolt",
                    },
                    {
                      title: "Data Integrity Testing",
                      description:
                        "Guarantees financial data stays accurate, consistent, and untampered, from start to finish.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "arrow",
                    },
                    {
                      title: "Performance Testing",
                      description:
                        "Ensures your platform is fast, stable, and responsive, even during peak transaction volumes.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "robot",
                    },
                    {
                      title: "Regulatory Compliance Testing",
                      description:
                        "Keeps an eye on compliance! Helps you meet regulatory demands with confidence, with no delays. ",
                      learnMoreHref: "/services/functional-testing",
                      icon: "shield",
                    },
                    {
                      title: "Security Testing",
                      description:
                        "Safeguards transactions and sensitive data, keeping things secure and trustworthy.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "mobile",
                    },
                    {
                      title: "Regression Testing",
                      description:
                        "Safeguards what already works, ensuring new updates don’t break critical financial flows.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "mobile",
                    },
                  ]} 
                />
                <Partnerships
                imageSrc="/Partnership.png" // your screenshot
                companyName="Indihood"
                companyLogo="/indihood_logo.png"
                highlightPercent="60%"
                description="indihood’s loan management mobile and web app turned out to be better than they’d imagined! Faster, more user-friendly, better performing, and bug-free."
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
