import React from 'react';
import styles from './divider.module.css';

const Divider: React.FC = () => {
  return (
    <div className={styles.dividerContainer}>
      <div className={styles.dividerLine}>
        <div className={styles.dividerDot} style={{ left: '0%' }}></div>
        <div className={styles.dividerDot} style={{ right: '0%' }}></div>
      </div>
    </div>
  );
};

export default Divider;
