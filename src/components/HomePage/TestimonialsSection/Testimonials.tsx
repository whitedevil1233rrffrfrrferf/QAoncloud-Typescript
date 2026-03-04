import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import React from 'react'
import ClientSlider from './ClientSlider'
import classes from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={classes.testimonialsContainer}>
        <SectionHeader
            title="Here’s what it’s like to "
            highlight="work with us"
            description=''
        />
        <ClientSlider />
    </div>
  )
}

export default Testimonials