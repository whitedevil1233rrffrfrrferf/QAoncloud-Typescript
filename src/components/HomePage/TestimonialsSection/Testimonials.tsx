import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import React from 'react'
import ClientSlider from './ClientSlider'


function Testimonials() {
  return (
    <div>
        <SectionHeader
            title="Teams like you trust us "
            highlight="to deliver "
            description=''
        />
        <ClientSlider />
    </div>
  )
}

export default Testimonials