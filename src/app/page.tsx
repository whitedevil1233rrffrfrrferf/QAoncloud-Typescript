import GreenCards from "@/components/HomePage/GreenCardsSection/GreenCards";


import ClientSlider from "@/components/HomePage/Slider/Slider";
import classes from './page.module.css'
import Testimonials from "@/components/HomePage/TestimonialsSection/Testimonials";
import { Banner } from "@/components/Common/Banner/Banner";
import PartnershipSection from "@/components/HomePage/PartnerTestingSection/PartnershipSection";
import CaseStudiesSection from "@/components/HomePage/CaseStudiesSection/CaseStudies";
import { ContentWrapper } from "@/components/Common/ContentWrapper/ContentWraper";
import { ProcessSection } from "@/components/Common/DottedCards/ProcessSection";
import QualityAssurance from "@/components/Industries/QualityAssurance/QualityAssurance";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import WhyQAonCloud from "@/components/HomePage/WhyQaoncloud/WhyQAonCloud";
import ServicesSection from "@/components/HomePage/TestingServices/ServicesSection";
import SectionDivider from "@/components/Common/SectionDivider/SectionDivider";


export default function Home() {
  return (
    <div>
       <div className={classes.container}>
          <div className={classes.pageContent}>
            <HeroSection />            
            <div>

            </div>
              <ClientSlider />
              <SectionDivider />
               <QualityAssurance
                    title="Your engineers aren’t stalling releases. "
                    highlight="Your QA is."
                    description="Your QA is slowing you down more than you think. Your engineers are on QA-duty when they should be building. Your tests take hours. Your “automation” needs hand-holding. And every release is a shot in the dark. Meanwhile, your competitors ship weekly.
                    But it doesn’t have to be this way. Our AI-accelerated, expert-driven QA services ensure you ship quickly, frequently and confidently."
                    subDescription=""
                    marginBottom={2}
                  />
                  <SectionDivider />
              <ContentWrapper> 
                
                <ProcessSection />
              </ContentWrapper> 
              <SectionDivider />
              {/* <PartnerSection /> */}
              <ContentWrapper> 
                {/* <QAoncloudGuarentee /> */}
                <ServicesSection  />
                
              </ContentWrapper>
              <SectionDivider />
              <ContentWrapper>
                <CaseStudiesSection />
              </ContentWrapper>
              <SectionDivider /> 
                <Testimonials />
              <SectionDivider />
              <ContentWrapper>
                  <WhyQAonCloud />
                </ContentWrapper>
                <SectionDivider /> 
              <ContentWrapper> 
                
                <PartnershipSection />
              </ContentWrapper>
              <SectionDivider />

              
               
                
                <ContentWrapper>
                  <Banner
                  title="Ready to ship"
                  highlight="faster? "
                  description="It takes just 10 mins to make your releases 40% faster. Talk to our team about your QA challenges and we’ll find the best solution for you. "
                  //subDescription="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
                  ctaLabel="Talk to an expert"
                  ctaHref="/Contact-us"
                  decorativeImage="/Images/Footer/HomePage.png"
                />
                </ContentWrapper>
               <SectionDivider />   
                     
          </div>
      
    </div>
    {/* <FeatureGrid /> */}
      
    </div>
   
  )
  
}
