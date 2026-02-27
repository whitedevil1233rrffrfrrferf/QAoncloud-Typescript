import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'


import React from 'react'
import classes from "./page.module.css"
import QualityAssurance from '@/components/Industries/QualityAssurance/QualityAssurance'
import { SmoothReleases } from '@/components/Industries/SmoothReleases/SmoothReleases'
import QualityTestingServices from '@/components/Industries/QualityServices/QualityServices'
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import ClientSlider from "@/components/HomePage/Slider/Slider";

import Partnerships from '@/components/Industries/Partnership/Partnership'
import ServicePageHeader from '@/components/Industries/FinTech/Header/ServicePageHeader'
import HeroSection from '@/components/HomePage/HeroSection/HeroSection'
import Benefits from '@/components/Industries/Benefits/Benefits'
import ComparisonTable from '@/components/Industries/ComparisonTable/Comparisontable';
import FinTechteamSection from '@/components/Industries/FinTechteams/FinTechteamSection'
import avanti from '../../../assets/logos/indihood_logo.png';



const finTechData = {
  title: "FinTech teams",
  highlight: "ship faster with QAonCloud",

  featured: {
    logoSrc: "/logos/avanti.png",          // Next.js: /public/logos/Akyrian.png → /logos/Akyrian.png
    logoAlt: "avanti",
    statHighlight: "40% faster releases",
    statRest: "while passing SOC 2 audit with zero findings",
    quote:
      '"We went from dreading audits to walking in confident. QAonCloud\'s team understood our compliance requirements from day one. We didn\'t have to explain PCI-DSS or why test data matters',
    author: {
      name: "Quentin Mussche",
      role: "CEO, Neobank",
      avatar: "/Images/Fintech/Quentin Mussche.png",   // /public/Images/... → /Images/...
    },
    image: "/Images/Fintech/shipfasterimage.png",
    imageAlt: "Glowing crypto coins",
  },

  testimonials: [
    {
      label: "Testimonial 1",
      quote:
        "They caught a PCI compliance gap we'd missed for six months. That alone paid for the engagement.",
      author: {
        name: "Richard Crosby",
        role: "Head of Engineering, Series A Payments Company",
        avatar: "/Images/Fintech/Richard Crosby.png",  // /public/Images/... → /Images/...
      },
    },
    {
      label: "Testimonial 2",
      quote:
        "Our engineers used to spend 30% of their time on QA. Now they build. QAonCloud handles the rest.",
      author: {
        name: "Quentin Mussche",
        role: "CTO, Digital Banking Platform",
        avatar: "/Images/Fintech/Quentin Mussche.png",
      },
    },
  ],
};



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
            title="In Fintech, mistakes can be"
            highlight="costly"
            description="Other industries are more forgiving when it comes to bugs. But not FinTech."
            subDescription="Because in FinTech, a bug isn't just a mistake. It's a regulatory incident. A glaring headline. An act of non-compliance.  
                                  That's why most FinTech teams are forced to choose between compliance and speed. "
            marginBottom={2}
          />
          <ContentWrapper>
            <SmoothReleases
              title="BFSI testing services that are a "
              highlight="cut above the rest"
              features={[
                {
                  title: "Compliance is relentless",
                  description:
                    "PCI-DSS, SOC 2, PSD2, state regulations. And they keep changing. Every release needs documented test coverage you can show auditors.",
                  icon: "star",
                },
                {
                  title: "Security testing isn't optional",
                  description:
                    "Let's face it, you developers didn't sign up to write test scripts. But they spend 20-30% of their time testing, when they should be building features.",
                  icon: "user",
                },
                {
                  title: "Audit prep is a fire drill",
                  description:
                    "When auditors ask for test documentation, scrambling to recreate it is a red flag. You need records that exist before anyone asks.",
                  icon: "circle",
                },
              ]}
            />
            <SmoothReleases
              title="QA that keeps up with "
              highlight="releases and regulations"
              features={[
                {
                  title: "Compliance built in, not bolted on",
                  description:
                    "Automated compliance reporting and test coverage documentation is audit-ready by default. So, no more scrambling when regulators call",
                  icon: "star",
                },
                {
                  title: "Security testing from day one",
                  description:
                    "Security isn't a final step. It's embedded in every test cycle, every release, every deployment.",
                  icon: "user",
                },
                {
                  title: "Engineers who speak FinTech fluently",
                  description:
                    "Our experts have seen it all - payment processors, neobanks, and trading platforms. Your edge cases won't break us.",
                  icon: "circle",
                },
              ]}
            />

            <QualityTestingServices title="We work well with "
              highlight="FinTech teams"
              services={[
                {
                  title: "Discovery call",
                  description:
                    "We learn your product, your compliance requirements, and where QA is slowing you down. No sales pitch, no fuss, just an honest conversation",
                  learnMoreHref: "/services/functional-testing",
                  icon: "code",
                },
                {
                  title: " A focused Pilot",
                  description:
                    "We'll start with a focused 1-month engagement. You'll know we're a fit, when you see 40% faster releases. ",
                  learnMoreHref: "/services/functional-testing",
                  icon: "bolt",
                },
                {
                  title: " Scale together",
                  description:
                    "We'll grow with your product. More surfaces, more test coverage, more ownership. And the same, reliable team that sticks with you. ",
                  learnMoreHref: "/services/functional-testing",
                  icon: "arrow",
                },
              ]}
            />

            <FinTechteamSection
              title={finTechData.title}
              highlight={finTechData.highlight}
              featured={finTechData.featured}
              testimonials={finTechData.testimonials}
            />
            <ComparisonTable />
          </ContentWrapper>

          <FAQs
            title="FAQs"
            highlight=""
            faqs={[
              {
                question: "How fast can you get started?",
                answer:
                  "Most teams are up and running within 2-3 weeks. We start with a discovery call to understand your product and compliance requirements, then move into a focused pilot engagement.",
              },
              {
                question: "Do you understand [specific regulation]?",
                answer:
                  "We've worked with PCI-DSS, SOC 2 Type II, PSD2, state money transmitter requirements, GDPR, and more. If there's a regulation we haven't encountered, we'll tell you upfront, and we learn about it fast.",
              },
              {
                question: "What if we already have some QA in place?",
                answer:
                  "We don't expect you to change your processes, we integrate into your way of work. Most clients start by handing us their biggest pain point (compliance testing, regression suites, or a specific product surface) and expand from there.",
              },
              {
                question: "How do you handle sensitive test data?",
                answer:
                  "We use synthetic test data generation, so real customer data is never exposed. This keeps your compliance with data privacy regulations in check, removing a major security risk from your testing process.",
              },
              {
                question: 'What does "40% faster" actually mean?',
                answer:
                  "We use synthetic test data generation, so real customer data is never exposed. This keeps your compliance with data If traditional QA takes 12 months, we'll do it in 7. We save a lot of time with our AI handling repetitive work (test generation, execution, data creation), letting our engineers focus on judgment calls and edge cases.privacy regulations in check, removing a major security risk from your testing process.",
              },
              {
                question: 'How does pricing work?',
                answer:
                  "We typically work on monthly engagements starting with a focused pilot engagement. Pricing depends entirely on the scope of work and complexity involved. Want to put a real number to our services? Book a quick discovery call with us today.",
              },
            ]}
          />


          <ContentWrapper>

            <Banner
              title="Faster, frequent,"
              highlight="bug free releases"
              description="Talk to an expert & learn how you can speed up your QA process today."
              ctaLabel="Talk To An Expert"
              ctaHref="/Contact-us"
              linkDescription="Or see"
              linkDescriptionText="How Neo bank cut release time by 40%"
              linkDescriptionHref="#"
              decorativeImage="/Images/Footer/HomePage.png"
            />

          </ContentWrapper>
        </div>
      </div>

    </div>

  )
}