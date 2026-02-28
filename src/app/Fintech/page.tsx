import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import React from 'react'
import classes from "./page.module.css"
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import ComparisonTable from '@/components/Industries/ComparisonTable/Comparisontable';
import FinTechteamSection from '@/components/Industries/FinTech/FinTechteams/FinTechteamSection'
import { ComparisonRow } from '@/components/Industries/ComparisonTable/Comparisontable';
import ClientSlider from '@/components/Common/Slider/Slider'
import ReleaseRegulations from '@/components/Industries/ReleaseRegulations/ReleaseRegulations'
import WorkWell from '@/components/Industries/WorkWell/WorkWell'
import { BarChart3, Headset,ScanEye } from 'lucide-react'
import Mistakes from '@/components/Industries/Mistakes/Mistakes'
import IndustryPageHeader from '@/components/Industries/FinTech/Header/IndustryPageHeader'

const finTechData = {
  title: "FinTech teams",
  highlight: "ship faster with QAonCloud",
  featured: {
    logoSrc: "/logos/avanti.png",
    logoAlt: "avanti",
    statHighlight: "40% faster releases",
    statRest: "while passing SOC 2 audit with zero findings",
    quote: '"We went from dreading audits to walking in confident. QAonCloud\'s team understood our compliance requirements from day one. We didn\'t have to explain PCI-DSS or why test data matters',
    author: { name: "Quentin Mussche", role: "CEO, Neobank", avatar: "/Images/Fintech/Quentin Mussche.png" },
    image: "/Images/Fintech/shipfasterimage.png",
    imageAlt: "Glowing crypto coins",
  },
  testimonials: [
    {
      label: "Testimonial 1",
      quote: "They caught a PCI compliance gap we'd missed for six months. That alone paid for the engagement.",
      author: { name: "Richard Crosby", role: "Head of Engineering, Series A Payments Company", avatar: "/Images/Fintech/Richard Crosby.png" },
    },
    {
      label: "Testimonial 2",
      quote: "Our engineers used to spend 30% of their time on QA. Now they build. QAonCloud handles the rest.",
      author: { name: "Quentin Mussche", role: "CTO, Digital Banking Platform", avatar: "/Images/Fintech/Quentin Mussche.png" },
    },
  ],
};

const mistakesData = {
  title: "In FinTech, mistakes ",
  highlight: "are costly",
  description: `A bug isn't just a mistake. It's a regulatory incident. A glaring headline. An act of non-compliance.`,
  cards: [
    { title: "Compliance is relentless", description: "PCI-DSS, SOC 2, PSD2, state regulations. And they keep changing. Every release needs documented test coverage you can show auditors." },
    { title: "Security isn't optional", description: `You can't ship with "we'll test that later." Vulnerabilities in Fintech get exploited fast, and the consequences aren't just technical.` },
    { title: "Audit prep is a fire drill", description: "When auditors ask for test documentation, scrambling to recreate it is a red flag. You need records that exist before anyone asks." },
  ],
}

const releaseRegulationsData = {
  title: "QA that keeps up with ",
  highlight: "releases and regulations",
  description: `Audit-ready documentation. Engineers who know what PCI-DSS actually requires & AI to handle volume & enhance speed to give you 40% faster releases.`,
  cards: [
    { title: "Compliance built in, not bolted on", description: "Automated compliance reporting and test coverage documentation is audit-ready by default." },
    { title: "Security testing from day one", description: "Security isn’t a final step. It's embedded in every test cycle, every release, every deployment." },
    { title: "Engineers who speak FinTech fluently", description: "Our experts have seen it all - payment processors, neobanks, and trading platforms. Your edge cases won’t break us" },
  ],
}

const WorkWellData = {
  title: "We work well with",
  highlight: "FinTech teams",
  description: "",
  steps: [
            { icon: Headset, title: '1. Discovery call', description: 'We learn your product, your compliance requirements, and where QA is slowing you down. ' },
            { icon: ScanEye, title: '2. A focused Pilot', description: "We’ll start with a focused 1-month engagement. You’ll know we’re a fit, when you see 40% faster releases. " },
            { icon: BarChart3, title: '3. Scale together', description: "We’ll grow with your product. More surfaces, more test coverage, more ownership." },
  ]}


export const fintechRows: ComparisonRow[] = [
  {
    alternative: "In-house QA team",
    problem: "It takes 6 months to hire and train someone who understands Fintech compliance.",
    difference: "We're productive in weeks with experienced engineers who know regulatory landscape.",
  },
  {
    alternative: "Offshore QA vendors",
    problem: "Offshore QA involves junior resources with negligible regulatory context.",
    difference: "Our senior engineers have deep domain expertise, having worked in FinTech. Regulatory compliance is their forte, and you won't have to babysit them.",
  },
  {
    alternative: "AI testing tools alone",
    problem: "No one to call when an auditor has questions. It requires strategic interventions to determine what actually matters.",
    difference: "AI handles volume. Engineers handle judgment. You can't call an algorithm at 2AM, but you can call us.",
  },
  {
    alternative: "Your engineers doing QA",
    problem: "Puts development on pause, and tires out your team. They're not compliance experts anyway.",
    difference: "Frees up your engineers to build like they were meant to. Compliance is built-in from day one.",
  },
];

export default function page() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.pageContent}>
          <div className={classes.homeHeroBg}>
            <IndustryPageHeader
              tag="AI-accelerated QA for FinTech."
              title="Compliance-ready and right on the money."
              description="With QAonCloud, you'll ship 40% faster, with no added anxiety. No more cutting corners on security or postponing compliance checks. Just smooth, secure releases. Our engineers are fluent in FinTech, so don't worry about explaining PCI-DSS, SOC 2, and PSD2 to us."
              imageSrc="/Images/Fintech/fintech-banner.png"
              imageAlt="FinTech Card"
            />
          </div>
          <ClientSlider heading="Trusted by global FinTech teams" />
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
          </ContentWrapper>
          <ContentWrapper>
            
            <FinTechteamSection
              title={finTechData.title}
              highlight={finTechData.highlight}
              featured={finTechData.featured}
              testimonials={finTechData.testimonials}
            />
            <ComparisonTable title="Here's why" highlight="FinTech Teams prefer us" rows={fintechRows} />
          </ContentWrapper>

          <FAQs
            title="FAQs"
            highlight=""
            faqs={[
              { question: "How fast can you get started?", answer: "Most teams are up and running within 2-3 weeks. We start with a discovery call to understand your product and compliance requirements, then move into a focused pilot engagement." },
              { question: "Do you understand [specific regulation]?", answer: "We've worked with PCI-DSS, SOC 2 Type II, PSD2, state money transmitter requirements, GDPR, and more. If there's a regulation we haven't encountered, we'll tell you upfront, and we learn about it fast" },
              { question: "What if we already have some QA in place?", answer: "We don’t expect you to change your processes, we integrate into your way of work. Most clients start by handing us their biggest pain point (compliance testing, regression suites, or a specific product surface) and expand from there." },
              { question: "How do you handle sensitive test data?", answer: "We use synthetic test data generation, so real customer data is never exposed. This keeps your compliance with data privacy regulations in check, removing a major security risk from your testing process." },
              { question: 'What does "40% faster" actually mean?', answer: "We use synthetic test data generation, so real customer data is never exposed. This keeps your compliance with data If traditional QA takes 12 months, we’ll do it in 7. We save a lot of time with our AI handling repetitive work (test generation, execution, data creation), letting our engineers focus on judgment calls and edge cases.privacy regulations in check, removing a major security risk from your testing process." },
              {
                question: "How does pricing work?", answer: (
                  <>
                    We typically work on monthly engagements starting with a focused pilot engagement. Pricing
                    depends entirely on the scope of work and complexity involved.
                    <br />
                    Want to put a real number to our services?{" "}
                    <a href="/Contact-us" style={{ color: "#3093E8", textDecoration: "underline" }}>
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