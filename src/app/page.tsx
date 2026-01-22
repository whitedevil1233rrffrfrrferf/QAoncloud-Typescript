import GreenCards from "@/components/HomePage/GreenCardsSection/GreenCards";
import Hero from "@/components/HomePage/HeroSection/Hero";
import PartnerTesting from "@/components/HomePage/PartnerTestingSection/PartnerTesting";
import ClientSlider from "@/components/HomePage/Slider/Slider";
import classes from './page.module.css'
import TestingServices from "@/components/HomePage/TestingServices/TestingServices";
import Testimonials from "@/components/HomePage/TestimonialsSection/Testimonials";
import QAoncloudGuarentee from "@/components/HomePage/QAoncloudGuarentee/QAoncloudGuarentee";

import PromoBanner from "@/components/PromoBanner/PromoBanner";
import { Banner } from "@/components/Common/Banner/Banner";
import Footer from "@/components/Common/Footer/Footer";
import { FeatureGrid } from "@/components/Common/FeatureGrid/FeatureGrid";
import PartnershipSection from "@/components/HomePage/PartnerTestingSection/NewPartnerTesting/PartnershipSection";
import CaseStudiesSection from "@/components/HomePage/CaseStudiesSection/CaseStudies";

export default function Home() {
  return (
    <div>
       <div className={classes.container}>
      <div className={classes.pageContent}>
        <div className={classes.homeHeroBg}> 
          <Hero />
        </div>
        <div>

        </div>
        <ClientSlider />
        <GreenCards />
        <PartnerTesting />
        <TestingServices />
        <Testimonials />
        <QAoncloudGuarentee />
        <PartnershipSection /> 
        <CaseStudiesSection />
        
      </div>
      
    </div>
    {/* <FeatureGrid /> */}
      <Banner
          title="Stop firefighting. Start shipping"
          highlight="with confidence."
          description="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most."
          ctaLabel="Talk to an expert"
        />
        
    </div>
   
  )
  
}