import GreenCards from "@/components/HomePage/GreenCardsSection/GreenCards";
import Hero from "@/components/HomePage/HeroSection/Hero";
import PartnerTesting from "@/components/HomePage/PartnerTestingSection/PartnerTesting";
import ClientSlider from "@/components/HomePage/Slider/Slider";
import classes from './page.module.css'
import TestingServices from "@/components/HomePage/TestingServices/TestingServices";
import Testimonials from "@/components/HomePage/TestimonialsSection/Testimonials";
export default function Home() {
  return (
    <div className={classes.container}>
      <Hero />
      <ClientSlider />
      <GreenCards />
      <PartnerTesting />
      <TestingServices />
      <Testimonials />
      
    </div>
  )
  
}