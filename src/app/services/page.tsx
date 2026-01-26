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
            <QualityTestingServices />
            <CaseStudiesSection />
            <GreenCards />
            <ServiceEfficiency />
          </ContentWrapper>
          
        </div>
        
      </div>
    </div>
    
  );
}

export default ServicesPage;