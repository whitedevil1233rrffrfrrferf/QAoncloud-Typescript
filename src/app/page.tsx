import GreenCards from "@/components/HomePage/GreenCardsSection/GreenCards";
import Hero from "@/components/HomePage/HeroSection/Hero";

import ClientSlider from "@/components/HomePage/Slider/Slider";
import classes from './page.module.css'
import TestingServices from "@/components/HomePage/TestingServices/TestingServices";
import Testimonials from "@/components/HomePage/TestimonialsSection/Testimonials";
import QAoncloudGuarentee from "@/components/HomePage/QAoncloudGuarentee/QAoncloudGuarentee";
import { Banner } from "@/components/Common/Banner/Banner";
import Footer from "@/components/Common/Footer/Footer";
import { FeatureGrid } from "@/components/Common/FeatureGrid/FeatureGrid";
import PartnershipSection from "@/components/HomePage/PartnerTestingSection/PartnershipSection";
import CaseStudiesSection from "@/components/HomePage/CaseStudiesSection/CaseStudies";
import PartnerSection from "@/components/HomePage/PartnerSection/PartnerSection";
import { ContentWrapper } from "@/components/Common/ContentWrapper/ContentWraper";
import FAQs from "@/components/Industries/FAQS/FAQs";


export default function Home() {
  return (
    <div>
       <div className={classes.container}>
          <div className={classes.pageContent}>
            <div className={classes.homeHeroBg}> 
              <ContentWrapper> 
                <Hero />
              </ContentWrapper>  
              
            </div>
            <div>

            </div>
              <ClientSlider />
              <ContentWrapper> 
                <GreenCards />
              </ContentWrapper> 
              
              <PartnerSection />
              <ContentWrapper> 
                <QAoncloudGuarentee />
                <TestingServices />
              </ContentWrapper>
              
              <Testimonials />
              
              
              <ContentWrapper> 
                
                <PartnershipSection /> 
                <CaseStudiesSection />
                <FAQs
                title="Why global teams"
                highlight="prefer QAonCloud over others"
                faqs={[
                  {
                    question: "Much faster than hiring in-house",
                    answer:
                      "Hiring, training and equipping an in-house QA team takes 6+ months. And when someone leaves, you’re left with coverage gaps and piling tasks. We’re productive in weeks, with zero recruiting costs or management overhead. With us, your QA coverage stays consistent, evolving with your product. ",
                  },
                  {
                    question: "More reliable than offshore vendors",
                    answer:
                      "Offshore QA is often synonymous with junior resources, constant supervision, and communication gaps. Quality remains questionable, and teams end up spending more time managing QA than ever. Our senior engineers become part of the team, learn your product, and own outcomes. No chaos, no hand-holding. Just quality you can trust. ",
                  },
                  {
                    question: "More effective than AI tools alone",
                    answer:
                      "There’s a lot that AI testing tools can do. But they don’t understand users, edge cases, or what a bug signifies. You can’t call an algorithm when you’ve got a problem! We combine AI-accelerated QA with senior engineers whose expertise offers context, optimizes prioritization, and ensures accountability. ",
                  },
                  {
                    question: "More efficient than engineers on QA",
                    answer:
                      "Every minute your engineers spend on QA is time they aren’t doing what they were hired to do. This puts a pause on feature delivery, slowing releases. Let your engineers do what they do best. Leave the testing to our specialists.  ",
                  },
                  
                ]}
              />
                <Banner
                  title="Ready to ship "
                  highlight="faster? "
                  description="It takes just 10 mins to make your releases 40% faster. Talk to our team about your QA challenges and we’ll find the best solution for you. "
                  //subDescription="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
                  ctaLabel="Talk to an expert"
                  ctaHref="/how-we-work"
                />
               </ContentWrapper>
              
                     
          </div>
      
    </div>
    {/* <FeatureGrid /> */}
      
    </div>
   
  )
  
}