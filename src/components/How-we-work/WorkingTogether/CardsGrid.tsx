import { Cards } from "./Cards";
import styles from "./CardsGrid.module.css";

export const CardsGrid = () => {
  return (
    <div className={styles.grid}>
      <Cards
        title="What AI Handles"
        items={[
          "Test case generation from your product",
          "Repetitive execution at scale",
          "Synthetic test data creation",
          "Parallel cloud execution",
          "Regression suite maintenance",
        ]}
        icon={<DiamondIcon />}
      />
      <Cards
        title="What Engineers Handle"
        items={[
          "Test strategy and prioritization",
          "Edge cases and exploratory testing",
          "Domain-specific judgment calls",
          `"Should we ship this?" decisions`,
          "Your Slack messages at 2am",
        ]}
        icon={<DiamondIcon />}
      />
    </div>
  );
};

const DiamondIcon = () => (
  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1">
    <polygon points="12 2 22 12 12 22 2 12" />
    <polygon points="12 6 18 12 12 18 6 12" />
  </svg>
);