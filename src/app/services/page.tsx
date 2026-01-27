import React from 'react';

import ServicePageHeader from '@/components/ServicePage/Header/ServicePageHeader';
import classes from "./page.module.css"
import QualityAssurance from '@/components/ServicePage/QualityAssurance/QualityAssurance';
import QualityTestingServices from '@/components/ServicePage/QualityServices/QualityServices';
import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper';
import CaseStudiesSection from '@/components/ServicePage/CaseStudiesSection/CaseStudiesSection';
import FeatureLineCard from '@/components/ServicePage/GreenCardsSection/GreenLineCard';
import GreenCards from '@/components/ServicePage/GreenCardsSection/GreenLineCard';
import ServiceEfficiency from '@/components/ServicePage/UnmatchedExpertise/UnmatchedExpertise';
import { SmoothReleases } from '@/components/ServicePage/SmoothReleases/SmoothReleases';
import { Banner } from '@/components/Common/Banner/Banner';
import FAQs from '@/components/ServicePage/FAQS/FAQs';

function ServicesPage() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.pageContent}>
          <div className={classes.homeHeroBg}> 
            <ServicePageHeader />
          </div>
          <QualityAssurance />
          <ContentWrapper>
            <ServiceEfficiency />
            <QualityTestingServices />
            <CaseStudiesSection />
            <GreenCards />
            <SmoothReleases />
            
          </ContentWrapper>
            <FAQs/>
            <ContentWrapper>
                <Banner
                  title="Ready to put your "
                  highlight="app to the test?"
                  description="We’re fast, thorough, and great at what we do. Let our experts spot bugs and vulnerabilities while you focus on what you do best. "
                  
                  
                  ctaLabel="Talk to an expert"
                  ctaHref="/how-we-work"
                />
            </ContentWrapper>
            
           
          
        </div>
        
      </div>
    </div>
    
  );
}

export default ServicesPage;