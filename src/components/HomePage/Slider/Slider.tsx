"use client";

import Image from "next/image";
import classes from "./clientslider.module.css";

import avanti from "../../../assets/logos/indihood_logo.png";
import stabilitas from "../../../assets/logos/stabilitas.png";
import tokopedia from "../../../assets/logos/tokopedia.png";
import venzi from "../../../assets/logos/venzi.png";

const clientLogos = [
  { id: 1, src: avanti, alt: "Indihood" },
  { id: 2, src: stabilitas, alt: "Stabilitas" },
  { id: 3, src: tokopedia, alt: "Tokopedia" },
  { id: 4, src: venzi, alt: "Venzi" },
];

const loopLogos = [...clientLogos, ...clientLogos,...clientLogos]; // duplicate for continuous effect

export default function ClientSlider() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <h4 className={classes.heading}>
          We’ve helped 60+ global teams ship with confidence
        </h4>
      </div>

      <div className={classes.marquee}>
        <div className={classes.track}>
          {loopLogos.map((logo, index) => (
            <div key={index} className={classes.logoCard}>
              <Image src={logo.src} alt={logo.alt} height={40} className={classes.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}