import React from 'react'
import classes from './homepage.module.css';
import Divider from '@/components/HomePage/Divider/Divider';
import Stats from '@/components/HomePage/Stats/Stats';
import Button from '@/components/Common/Button/Button';
import ClientSlider from '@/components/HomePage/Slider/Slider';

export default function HomePage() {
  return (
    <section className={classes.hero}>
      <div className={classes.heroContent}>
        <h1 className={classes.heroTitle}>
          <span className={classes.heroLine}>Software testing services that </span>
          <span className={classes.highlight}> leave no stone unturned</span>
        </h1>

        <p className={classes.heroDescription}>
          At QAonCloud, we know that quality isn’t luck; it’s smart, relentless QA testing.
          We’re a trusted software testing company that excels at making sure products behave
          the way they should by leveraging our expertise and software test automation.
        </p>
        <Divider />
        <Stats />
        <Button backgroundColor="#172C54">Explore our services</Button>
        <ClientSlider />
      </div>
    </section>
  );
}