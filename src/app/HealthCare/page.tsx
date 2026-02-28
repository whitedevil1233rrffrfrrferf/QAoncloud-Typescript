import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import React from 'react'
import classes from "./page.module.css"

import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import { BarChart3, Headset,ScanEye } from 'lucide-react'
import ComparisonTable from '@/components/Industries/ComparisonTable/Comparisontable';
import FinTechteamSection from '@/components/Industries/FinTech/FinTechteams/FinTechteamSection'
import { ComparisonRow } from '@/components/Industries/ComparisonTable/Comparisontable';
import ClientSlider from '@/components/Common/Slider/Slider'
import IndustryPageHeader from '@/components/Industries/FinTech/Header/IndustryPageHeader'
import Mistakes from '@/components/Industries/Mistakes/Mistakes'
import ReleaseRegulations from '@/components/Industries/ReleaseRegulations/ReleaseRegulations'
import WorkWell from '@/components/Industries/WorkWell/WorkWell'

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
const mistakesData = {
  title: "In HeathTech ",
  highlight: "it isn’t “just a bug” ",
  description: `The stakes are higher, and the regulations are stricter. Bugs aren’t just bad news, they could prove problematic to patient health. But that doesn’t mean you can slow down. Competitors don’t rest, so you can’t either. Your engineers can’t do it all, but your investors expect results.So, do you focus on moving fast or on staying compliant? Most healthtech teams struggle to choose and risk falling behind. `,
  cards: [
    { title: "Test data is a nightmare", description: "You can't test with real patient data. But creating realistic synthetic data that covers edge cases and workflows? That's a project in itself. Most teams either cut corners or test mildly." },
    { title: "Integrations break quietly", description: `Think EMRs, EHRs, hospital systems, insurance APIs. They’re fragile, inconsistently documented, and deeply interconnected. It only takes one bad release to break workflows across an entire health system` },
    { title: "Regulatory documentation never ends", description: "Think HIPAA. FDA. SOC 2. Audits demand documented test coverage. Every submission needs proof that you tested what you said you tested." },
  ],
}

const releaseRegulationsData = {
  title: "QA that moves ",
  highlight: "fast and stays compliant ",
  description: `Think AI-accelerated QA testing meets engineers with extensive healthcare software experience.Be it generating synthetic test data, automating regression suites, or parallel execution, our AI handles the volume. Our engineers make the calls on what matters clinically, what tends to break, and what auditors demand. The result? 40% faster releases. HIPAA-compliant test data. Documentation that's ready to go.`,
  cards: [
    { title: "Synthetic test data that’s safe", description: "Our AI generates realistic patient data that covers edge cases without exposing PHI. No more cutting corners because you don't have safe data." },
    { title: "Engineers who know HealthTech, inside out", description: `Our engineers have tested EMR integrations, HL7 feeds, FHIR APIs, and insurance claim workflows. We know where HealthTech software breaks` },
    { title: "Built-in audit-ready documentation", description: "Every test run is documented. Every coverage gap is visible. When auditors or FDA reviewers ask, you can prove your work. " },
  ],
}

const WorkWellData = {
  title: "We work well with",
  highlight: "HealthTech teams",
  description: "",
  steps: [
            { icon: Headset, title: '1. Discovery call', description: 'We’ll discuss your product, your compliance requirements, and your biggest QA pain points, in a 30-minute call. No pitch deck, just an honest conversation. ' },
            { icon: ScanEye, title: '2. A focused Pilot', description: "We’ll start with a focused 1-month pilot. You'll see the 40% improvement on real work, with compliant processes from day one." },
            { icon: BarChart3, title: '3. Scale together', description: "We grow with you as your product grows. More surfaces, more integrations, more coverage. Same team that knows your product and your compliance needs." },
  ]}
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
            <IndustryPageHeader
              tag="AI-accelerated QA for HealthTech."
              title="HIPAA-compliant by design"
              description="Faster shipping shouldn’t mean risking patient data. With QAonCloud, you can ship 40% faster, 
          without compromising regulatory compliance or cutting corners. We use synthetic data, document coverage, 
          and embed engineers with extensive HealthTech experience"
              imageSrc="/Images/Healthcare/HealthcareHeader.png"
              imageAlt="HealthTech Card"
            />
          </div>
          <ClientSlider heading="Trusted by HealthTech team around the world" />
          
          <ContentWrapper>
            <Mistakes
              {...mistakesData}
            />

            <ReleaseRegulations
              {...releaseRegulationsData}
            />
            <WorkWell
              {...WorkWellData}
              
              
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
                    <a href="/Contact-us" style={{ color: "#3093E8", textDecoration: "underline" }}>
                     Book a quick discovery call </a>{" "} with us today.
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