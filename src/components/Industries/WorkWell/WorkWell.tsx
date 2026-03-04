import { ProcessSection } from '@/components/Common/DottedCards/ProcessSection'
import { LucideIcon } from 'lucide-react'
import React from 'react'

type Step = {
  icon: LucideIcon | React.ForwardRefExoticComponent<{ size?: number; color?: string; className?: string } & React.RefAttributes<SVGSVGElement>>
  title: string
  description: string
}

type WorkWellProps = {
  title: string
  highlight: string
  description?: string
  steps: Step[]
}

function WorkWell({ title, highlight, description = '', steps }: WorkWellProps) {
  return (
    <section>
      <ProcessSection title={title} highlight={highlight} description={description} steps={steps} />
    </section>
  )
}

export default WorkWell