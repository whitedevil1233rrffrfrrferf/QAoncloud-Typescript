import GreenCards from "@/components/HomePage/GreenCardsSection/GreenCards";
import Hero from "@/components/HomePage/HeroSection/Hero";
import PartnerTesting from "@/components/HomePage/PartnerTestingSection/PartnerTesting";
import ClientSlider from "@/components/HomePage/Slider/Slider";
import classes from './page.module.css'
import TestingServices from "@/components/HomePage/TestingServices/TestingServices";
import Testimonials from "@/components/HomePage/TestimonialsSection/Testimonials";
import QAoncloudGuarentee from "@/components/HomePage/QAoncloudGuarentee/QAoncloudGuarentee";
import CaseStudiesSection from "@/components/HomePage/CaseStudiesSection/CaseStudies";
export default function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.pageContent}>
        <div className={classes.homeHeroBg}> 
          <Hero />
        </div>
        
        <ClientSlider />
        <GreenCards />
        <PartnerTesting />
        <TestingServices />
        <Testimonials />
        <QAoncloudGuarentee />
        <CaseStudiesSection />  
      </div>
      
    </div>
  )
  
}