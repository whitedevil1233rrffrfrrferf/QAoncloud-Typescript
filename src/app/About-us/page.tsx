import { Banner } from '@/components/Common/Banner/Banner'
import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import React from 'react'
import classes from "./page.module.css"
function page() {
  return (
    <div >
      <div className={classes.container}>
           <SectionHeader title='Built by ' highlight='Desicrew in 2016' description='QAonCloud was formed to solve an issue teams constantly face - frequent delays and buggy releases. We’re a trusted software testing company, and we’ve worked with startups and global businesses across industries, combining fast, precise automation with reliable, skilled engineers with deep domain expertise. ' />
          <SectionHeader title='Our approach ' highlight='is simple' description='our AI handles the repetitive, high-volume work, while our engineers make the strategic calls. The result? 40% faster QA. We build strong partnerships, and our clients trust us to deliver, again and again. ' />
          <SectionHeader title='We don’t look in ' highlight='from the outside' description='We embed into your workflow, sit in your standups, and take ownership, alongside your team. When something’s wrong, we’ll be the first to tell you, and we’ll stick with you until it’s resolved.  ' />
          <ContentWrapper>
              <Banner
                  title="We’re here to help you ship confidently, with "
                  highlight="every release."
                  description=""
                  //subDescription="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
                  ctaLabel="Talk to an expert"
                  ctaHref="/how-we-work"
              />
          </ContentWrapper>   
      </div>
       
        
    </div>
  )
}

export default page