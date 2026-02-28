import { ProcessSection } from '@/components/Common/DottedCards/ProcessSection'
import { LucideIcon } from 'lucide-react'

type Step = {
  icon: LucideIcon
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