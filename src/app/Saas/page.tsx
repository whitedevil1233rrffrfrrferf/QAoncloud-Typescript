import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import React from 'react'
import classes from "./page.module.css"
import QualityAssurance from '@/components/Industries/QualityAssurance/QualityAssurance'
import { SmoothReleases } from '@/components/Industries/SmoothReleases/SmoothReleases'
import QualityTestingServices from '@/components/Industries/QualityServices/QualityServices'
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import ClientSlider from '@/components/Industries/Slider/Slider'
import ServicePageHeader from '@/components/Industries/SaasHeader/Header/ServicePageHeader'
import ComparisonTable from '@/components/Industries/ComparisonTable/Comparisontable';
import FinTechteamSection from '@/components/Industries/FinTechteams/FinTechteamSection'
import { ComparisonRow } from '@/components/Industries/ComparisonTable/Comparisontable';


export const saasData = {
  title: "Saas teams",
  highlight: "ship faster with Confidence",
  featured: {
    logoSrc: "/logos/FORATravel.png",
    logoAlt: "FORATravel",
    statHighlight: "40% faster releases,",
    statRest: "3x increase in deployment frequency",
    quote:
      '"We were terrified of our FDA submission. QAonCloud helped us document our test coverage so thoroughly that the review went smoother than anything we\'d submitted before.',
    author: {
      name: "Quentin Mussche",
      role: "CEO, Healthtech",
      avatar: "/Images/Fintech/Quentin Mussche.png",
    },
    image: "/Images/Saas/Saas teams ship faster.png.png",
    imageAlt: "Glowing cloud SaaS",
  },
  testimonials: [
    {
      label: "Testimonial 1",
      quote:
        "Our engineers got 25% of their time back. They're building features again instead of writing test scripts",
      author: {
        name: "Richard Crosby",
        role: "Head of Engineering, Series A Payments Company",
        avatar: "/Images/Fintech/Richard Crosby.png",
      },
    },
    {
      label: "Testimonial 2",
      quote:
        "We used to find out about bugs from customers. Now we find them before they ship. That's worth everything",
      author: {
        name: "Quentin Mussche",
        role: "CTO, Digital Banking Platform",
        avatar: "/Images/Fintech/Quentin Mussche.png",
      },
    },
  ],
};

export const saasRows: ComparisonRow[] = [
  {
    alternative: "In-house QA team",
    problem: "Takes 6+ months to hire and ramp. You're already behind by the time they're productive",
    difference: "We're productive in weeks. No recruiting, no ramp time, no retention risk.",
  },
  {
    alternative: "Offshore QA vendors",
    problem: "Junior resources who need constant management. You trade one bottleneck for another.",
    difference: "Senior engineers who learn your product and work autonomously. Less management, not more",
  },
  {
    alternative: "AI testing tools alone",
    problem: "Great at running tests. Bad at knowing what to test. No one to call when something breaks",
    difference: "AI handles execution. Humans handle judgment. You get speed and expertise together.",
  },
  {
    alternative: "Your engineers doing QA",
    problem: "Your most expensive people doing work that isn't their specialty. Features don't ship.",
    difference: "Free your engineers to build. We handle QA with people who do this all day.",
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
          <ClientSlider heading="Trusted by SaaS teams around the world" />
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
              title={saasData.title}
              highlight={saasData.highlight}
              featured={saasData.featured}
              testimonials={saasData.testimonials}
            />

            <ComparisonTable title="Here's why" highlight="SaaS Teams prefer us" rows={saasRows} />
          </ContentWrapper>

          <FAQs
            title="FAQs"
            highlight=""
            faqs={[
              { question: "How fast can you ramp up on our product?", answer: "Since we embed industry experts, most of our QA teams are productive within 2-3 weeks. We'll start with your most critical user flows and take it from there. You'll see your releases speed up within a month." },
              { question: "Do you integrate with our CI/CD pipeline?", answer: "Yes, we do. We work with GitHub Actions, GitLab CI, CircleCI, Jenkins, and most major CI tools. Tests run automatically on every push, PR, or deployment." },
              { question: "Can you test across browsers and devices?", answer: "Yes, we can! Our AI runs tests parallelly across Chrome, Firefox, Safari, Edge, and mobile viewports. You get complete cross-browser coverage, and no time penalty." },
              { question: "What if we already have some tests written?", answer: "That's not a problem at all! We'll gladly work with what you have. If your existing tests are solid, we'll build on them. If they could use some work, we'll help you clean them up and fine-tune them" },
              { question: 'What does "40% faster" actually mean?', answer: "Simply put, what usually takes 12 months with traditional QA approaches takes just 7 months with us. We save time by letting our AI handle the repetitive work (test generation, execution, data creation) while our engineers focus on judgment calls and compliance documentation" },
              {
                question: "How does pricing work?",

                answer: (
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