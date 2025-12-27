// Stats.js
import React from 'react';
import classes from './stats.module.css';

const Stats = () => {
  return (
    <div className={classes.stats}>
      <div className={classes.statItem}>
        <h3 className={classes.statValue}>12+</h3>
        <span className={classes.statLabel}>Years of Success</span>
      </div>
      <div className={classes.statItem}>
        <h3 className={classes.statValue}>155+</h3>
        <span className={classes.statLabel}>Happy Clients</span>
      </div>
      <div className={classes.statItem}>
        <h3 className={classes.statValue}>8+</h3>
        <span className={classes.statLabel}>Global Offices</span>
      </div>
    </div>
  );
};

export default Stats;
