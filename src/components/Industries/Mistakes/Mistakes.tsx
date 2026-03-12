import { ReactNode } from 'react'
import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import FeatureLineCard from '@/components/Common/GreenCards/GreenLineCard'
import classes from './Mistakes.module.css'

type Card = {
  title: string
  description: string
}

type MistakesProps = {
  title: string
  highlight: string
  description: ReactNode
  subDescription?: string
  cards: Card[]
}

function Mistakes({ title, highlight, description, subDescription, cards }: MistakesProps) {
  return (
    <section className={classes.container}>
      <SectionHeader title={title} highlight={highlight} description={description} subDescription={subDescription} />
      <div className={classes.featuresGrid}>
        {cards.map((card, i) => (
          <FeatureLineCard key={i} variant="caution" title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  )
}

export default Mistakes