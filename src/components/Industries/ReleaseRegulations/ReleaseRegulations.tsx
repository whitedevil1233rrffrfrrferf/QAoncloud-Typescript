import SectionHeader from '@/components/Common/SectionHeader/SectionHeader'
import FeatureLineCard from '@/components/Common/GreenCards/GreenLineCard'
import classes from './ReleaseRegulations.module.css'

type Card = {
  title: string
  description: string
}

type ReleaseRegulationsProps = {
  title: string
  highlight: string
  description: string
  cards: Card[]
}

function ReleaseRegulations({ title, highlight, description, cards }: ReleaseRegulationsProps) {
  return (
    <section className={classes.container}>
      <SectionHeader title={title} highlight={highlight} description={description} />
      <div className={classes.featuresGrid}>
        {cards.map((card, i) => (
          <FeatureLineCard key={i} variant="green" title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  )
}

export default ReleaseRegulations