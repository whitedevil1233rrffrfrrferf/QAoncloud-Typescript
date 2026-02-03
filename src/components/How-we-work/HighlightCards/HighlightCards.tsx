import { HighlightCard } from '@/components/Common/HighlightCard/HighlightCard'
import React from 'react'
import styles from './HighlightCards.module.css'
function HighlightCards() {
  return (
    <div className={styles.container}>
        <HighlightCard
            text="We automate the rote work so engineers focus only on what requires expertise. That's where the 40% comes from."
            icon={<StarIcon />}
        />
        <HighlightCard
            text="We automate the rote work so engineers focus only on what requires expertise. That's where the 40% comes from."
            icon={<StarIcon />}
        />
    </div>
  )
}

export default HighlightCards

export const StarIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="#3093E8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};