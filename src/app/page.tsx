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
                <TestingServices />
              </ContentWrapper>
              
              <Testimonials />
              
              
              <ContentWrapper> 
                <QAoncloudGuarentee />
                <PartnershipSection /> 
                <CaseStudiesSection />
                <Banner
                  title="Stop firefighting. Start shipping "
                  highlight="with confidence."
                  description="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
                  subDescription="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
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