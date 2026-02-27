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
import ComparisonTable from '@/components/Industries/ComparisonTable/Comparisontable'
import FinTechteamSection from '@/components/Industries/FinTechteams/FinTechteamSection'

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
          <ClientSlider heading='Trusted by healthtech teams at' />
          <QualityAssurance
            title="In healthtech, "
            highlight="it isn’t “just a bug"
            description="The stakes are higher, and the regulations are stricter. Bugs aren’t just bad news, they could prove problematic to patient health."
            subDescription="But that doesn’t mean you can slow down. Competitors don’t rest, so you can’t either. Your engineers can’t do it all, but your investors expect results. So, do you focus on moving fast or on staying compliant? Most healthtech teams struggle to choose and risk falling behind."
            marginBottom={2}
          />
          <ContentWrapper>
            <SmoothReleases
              title=""
              highlight=""
              features={[
                {
                  title: "Test data is a nightmare",
                  description:
                    "You can't test with real patient data. But creating realistic synthetic data that covers edge cases and workflows? That's a project in itself. Most teams either cut corners or test mildly. ",
                  icon: "star",
                },
                {
                  title: "Integrations break quietly",
                  description:
                    "Think EMRs, EHRs, hospital systems, insurance APIs. They’re fragile, inconsistently documented, and deeply interconnected. It only takes one bad release to break workflows across an entire health system.",
                  icon: "user",
                },
                {
                  title: "Regulatory documentation never ends",
                  description:
                    "Think HIPAA. FDA. SOC 2. Audits demand documented test coverage. Every submission needs proof that you tested what you said you tested.",
                  icon: "circle",
                },
                // {
                //   title: "Value for Money",
                //   description:
                //     "Unmatched, high-level QA expertise at a fraction of the cost, ensuring accuracy, speed, and reliability",
                //   icon: "arrow",
                // },
                // {
                //   title: "Tailored to your needs.",
                //   description:
                //     "Ensuring products are intuitive, user-friendly, with user-oriented functionalities, reducing churn.",
                //   icon: "arrow",
                // },
              ]}
            />
            <QualityTestingServices title="QA that moves fast "
              highlight="and stays compliant"
              services={[
                {
                  title: "Synthetic test data that’s safe",
                  description:
                    "Our AI generates realistic patient data that covers edge cases without exposing PHI. No more cutting corners because you don't have safe data.",
                  learnMoreHref: "/services/functional-testing",
                  icon: "code",
                },
                {
                  title: "Engineers who know healthcare, inside out",
                  description:
                    "Our engineers have tested EMR integrations, HL7 feeds, FHIR APIs, and insurance claim workflows. We know where healthcare software breaks.",
                  learnMoreHref: "/services/functional-testing",
                  icon: "bolt",
                },
                {
                  title: "Built-in audit-ready documentation",
                  description:
                    "Every test run is documented. Every coverage gap is visible. When auditors or FDA reviewers ask, you can prove your work.",
                  learnMoreHref: "/services/functional-testing",
                  icon: "arrow",
                },
                // {
                //   title: "Performance Testing",
                //   description:
                //     "Ensures your platform is fast, stable, and responsive, even during peak transaction volumes.",
                //   learnMoreHref: "/services/functional-testing",
                //   icon: "robot",
                // },
                // {
                //   title: "Regulatory Compliance Testing",
                //   description:
                //     "Keeps an eye on compliance! Helps you meet regulatory demands with confidence, with no delays. ",
                //   learnMoreHref: "/services/functional-testing",
                //   icon: "shield",
                // },
                // {
                //   title: "Security Testing",
                //   description:
                //     "Safeguards transactions and sensitive data, keeping things secure and trustworthy.",
                //   learnMoreHref: "/services/functional-testing",
                //   icon: "mobile",
                // },
                // {
                //   title: "Regression Testing",
                //   description:
                //     "Safeguards what already works, ensuring new updates don’t break critical financial flows.",
                //   learnMoreHref: "/services/functional-testing",
                //   icon: "mobile",
                // },
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
                  "Most teams are up and running within 2–3 weeks. We start with a discovery call to understand your product and compliance requirements, then move into a focused pilot engagement.",
              },
              {
                question: "How do you handle HIPAA compliance?",
                answer:
                  "We never use real patient data. Our AI-generated synthetic test data is realistic enough to catch edge cases but contains no traces of PHI. We sign BAAs and follow HIPAA security requirements throughout our process, so compliance is never an issue.",
              },
              {
                question: "Have you worked with EMR/EHR integrations?",
                answer:
                  "Yes, we have! We've tested integrations with Epic, Cerner, Allscripts, athenahealth, and custom hospital systems. We've also worked with HL7, FHIR APIs, and insurance claim workflows.",
              },
              {
                question: "Can you help with FDA documentation?",
                answer:
                  "Yes. We provide documented test coverage, traceability matrices, and verification records that support FDA submissions. Our built-in documentation is designed to answer the questions reviewers actually ask.",
              },
              {
                question: 'What does "40% faster" actually mean?',
                answer:
                  "Simply put, what usually takes 12 months with traditional QA approaches takes just 7 months with us. We save time by letting our AI handle the repetitive work (test generation, execution, data creation) while our engineers focus on judgment calls and compliance documentation.",
              },
              {
                question: "How does pricing work?",
                answer: (
                  <>
                    We typically work on monthly engagements starting with a focused pilot engagement. Pricing
                    depends entirely on the scope of work and complexity involved.
                    <br />
                    Want to put a real number to our services?{" "}
                    <a href="/contact" style={{ color: "#3093E8", textDecoration: "underline" }}>
                      Book a quick discovery call
                    </a>{" "}
                    with us today.
                  </>
                ),
              },
            ]}
          />


          <ContentWrapper>

            <Banner
              title="Ship faster with"
              highlight="no compliance anxiety"
              description="Talk to a healthtech QA expert today. We’ll keep it simple - no pitch deck, no six-meeting sales cycle. Just an honest conversation about how we can help with your QA needs."

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