import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import React from 'react'
import classes from "./page.module.css"
import QualityAssurance from '@/components/Industries/QualityAssurance/QualityAssurance'
import { SmoothReleases } from '@/components/Industries/SmoothReleases/SmoothReleases'
import QualityTestingServices from '@/components/Industries/QualityServices/QualityServices'
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import ClientSlider from '@/components/Industries/Slider/Slider'
import ComparisonTable from '@/components/Industries/ComparisonTable/Comparisontable';
import FinTechteamSection from '@/components/Industries/FinTechteams/FinTechteamSection'
import ServicePageHeader from '@/components/Industries/HealthcareHeader/Header/ServicePageHeader'
import { ComparisonRow } from '@/components/Industries/ComparisonTable/Comparisontable';

export const healthcareData = {
  title: "HealthTech teams",
  highlight: "ship faster with QAonCloud",
  featured: {
    logoSrc: "/logos/Akyrian.png",
    logoAlt: "Akyrian",
    statHighlight: "40% faster releases",
    statRest: "cycles, FDA submission approved on first review",
    quote:
      '"We were terrified of our FDA submission. QAonCloud helped us document our test coverage so thoroughly that the review went smoother than anything we\'d submitted before.',
    author: {
      name: "Quentin Mussche",
      role: "CEO, Healthtech",
      avatar: "/Images/Fintech/Quentin Mussche.png",
    },
    image: "/Images/Healthcare/HealthTech teams ship faster.png",
    imageAlt: "DNA helix healthcare",
  },
  testimonials: [
    {
      label: "Testimonial 1",
      quote:
        "They generated synthetic patient data that covered edge cases we never would have thought of. Our test coverage went from 60% to 95%.",
      author: {
        name: "Richard Crosby",
        role: "Head of Engineering, Series A Payments Company",
        avatar: "/Images/Fintech/Richard Crosby.png",
      },
    },
    {
      label: "Testimonial 2",
      quote:
        "Our EMR integration was a mess. QAonCloud's team had seen it before and knew exactly where to focus. They found three critical bugs in the first week.",
      author: {
        name: "Quentin Mussche",
        role: "CTO, Digital Banking Platform",
        avatar: "/Images/Fintech/Quentin Mussche.png",
      },
    },
  ],
};

export const healthcareRows: ComparisonRow[] = [
  {
    alternative: "In-house QA team",
    problem: "It takes 6+ months to hire, train and equip someone who understands healthcare compliance. Then you have to worry about retaining them, too",
    difference: "We're productive in weeks, embedding engineers who already know HIPAA, FDA, and healthcare integrations, into your workflow.",
  },
  {
    alternative: "Offshore QA vendors",
    problem: "Offshore QA often means junior resources who don't understand how to handle PHI or healthcare workflows. They would need constant hand-holding, and risk compliance.",
    difference: "You get senior engineers who have worked extensively in healthcare. They know what BAA means, why test data matters, and do what it takes to stay compliant.",
  },
  {
    alternative: "AI testing tools alone",
    problem: "No one to call when an auditor has questions. No judgment on clinical edge cases.",
    difference: "AI handles volume. Humans handle judgment. You can't explain your test coverage to FDA with a dashboard",
  },
  {
    alternative: "Your engineers doing QA",
    problem: "Your developers aren't healthcare compliance experts. They need to be building features, not struggling to document test coverage for audits.",
    difference: "Frees up your engineers to do what they do best. We'll handle QA with documentation that satisfies regulators.",
  },
];

export default function page() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.pageContent}>
          <div className={classes.homeHeroBg}>
            <ServicePageHeader />
          </div>
          <ClientSlider heading="Trusted by HealthTech team around the world" />
          <QualityAssurance
            title="In Fintech, mistakes can be"
            highlight="costly"
            description="Other industries are more forgiving when it comes to bugs. But not FinTech."
            subDescription="Because in FinTech, a bug isn't just a mistake. It's a regulatory incident. A glaring headline. An act of non-compliance. That's why most FinTech teams are forced to choose between compliance and speed."
            marginBottom={2}
          />
          <ContentWrapper>
            <SmoothReleases
              title="BFSI testing services that are a "
              highlight="cut above the rest"
              features={[
                { title: "Compliance is relentless", description: "PCI-DSS, SOC 2, PSD2, state regulations. And they keep changing. Every release needs documented test coverage you can show auditors.", icon: "star" },
                { title: "Security testing isn't optional", description: "Let's face it, you developers didn't sign up to write test scripts. But they spend 20-30% of their time testing, when they should be building features.", icon: "user" },
                { title: "Audit prep is a fire drill", description: "When auditors ask for test documentation, scrambling to recreate it is a red flag. You need records that exist before anyone asks.", icon: "circle" },
              ]}
            />
            <SmoothReleases
              title="QA that keeps up with "
              highlight="releases and regulations"
              features={[
                { title: "Compliance built in, not bolted on", description: "Automated compliance reporting and test coverage documentation is audit-ready by default. So, no more scrambling when regulators call", icon: "star" },
                { title: "Security testing from day one", description: "Security isn't a final step. It's embedded in every test cycle, every release, every deployment.", icon: "user" },
                { title: "Engineers who speak FinTech fluently", description: "Our experts have seen it all - payment processors, neobanks, and trading platforms. Your edge cases won't break us.", icon: "circle" },
              ]}
            />
            <QualityTestingServices
              title="We work well with "
              highlight="FinTech teams"
              services={[
                { title: "Discovery call", description: "We learn your product, your compliance requirements, and where QA is slowing you down. No sales pitch, no fuss, just an honest conversation", learnMoreHref: "/services/functional-testing", icon: "code" },
                { title: "A focused Pilot", description: "We'll start with a focused 1-month engagement. You'll know we're a fit, when you see 40% faster releases.", learnMoreHref: "/services/functional-testing", icon: "bolt" },
                { title: "Scale together", description: "We'll grow with your product. More surfaces, more test coverage, more ownership. And the same, reliable team that sticks with you.", learnMoreHref: "/services/functional-testing", icon: "arrow" },
              ]}
            />


            <FinTechteamSection
              title={healthcareData.title}
              highlight={healthcareData.highlight}
              featured={healthcareData.featured}
              testimonials={healthcareData.testimonials}
            />
            <ComparisonTable title="Here's why" highlight="Healthcare Teams prefer us" rows={healthcareRows} />
          </ContentWrapper>


          <FAQs
            title="FAQs"
            highlight=""
            faqs={[
              { question: "How fast can you get started?", answer: "Most teams are up and running within 2-3 weeks. We start with a discovery call to understand your product and compliance requirements, then move into a focused pilot engagement." },
              { question: "How do you handle HIPAA compliance?", answer: "We never use real patient data. Our AI-generated synthetic test data is realistic enough to catch edge cases but contains no traces of PHI. We sign BAAs and follow HIPAA security requirements throughout our process, so compliance is never an issue" },
              { question: "Have you worked with EMR/EHR integrations?", answer: "Yes, we have! We've tested integrations with Epic, Cerner, Allscripts, athenahealth, and custom hospital systems. We've also worked with HL7, FHIR APIs, and insurance claim workflows" },
              { question: "Can you help with FDA documentation?", answer: "Yes. We provide documented test coverage, traceability matrices, and verification records that support FDA submissions. Our built-in documentation is designed to answer the questions reviewers actually ask." },
              { question: 'What does "40% faster" actually mean?', answer: "Simply put, what usually takes 12 months with traditional QA approaches takes just 7 months with us. We save time by letting our AI handle the repetitive work (test generation, execution, data creation) while our engineers focus on judgment calls and compliance documentation" },
              {
                question: "How does pricing work?", answer: (<> We typically work on monthly engagements starting with a focused pilot engagement. Pricing
                    depends entirely on the scope of work and complexity involved. <br /> Want to put a real number to our services?{" "}
                    <a href="/contact" style={{ color: "#3093E8", textDecoration: "underline" }}> Book a quick discovery call </a>{" "} with us today.
                  </>
                ),
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