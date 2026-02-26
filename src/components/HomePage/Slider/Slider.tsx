"use client";

import Image from "next/image";
import classes from "./clientslider.module.css";
// Existing logos
import Indihood from "../../../assets/logos/indihood_logo.png";
import avanti from "../../../assets/logos/avanti.png";
import stabilitas from "../../../assets/logos/stabilitas.png";
import tokopedia from "../../../assets/logos/tokopedia.png";
import venzi from "../../../assets/logos/venzi.png";

// New logos
import connectWorks from "../../../assets/logos/connect_works.png";
import notebene from "../../../assets/logos/notebene.png";
import simplifyMoney from "../../../assets/logos/simplify_money.png";
import auxo from "../../../assets/logos/auxo.png";
import aol from "../../../assets/logos/AOI.png";
import redblocktree from "../../../assets/logos/redblocktree.png";

const clientLogos = [
  { id: 1, src: connectWorks, alt: "Connect Works" },
  { id: 2, src: notebene, alt: "Notebene" },
  { id: 3, src: simplifyMoney, alt: "Simplify Money" },
  { id: 4, src: auxo, alt: "Auxo" },
  { id: 5, src: Indihood, alt: "Indihood" },
  { id: 6, src: avanti, alt: "Avanti" },
  { id: 7, src: aol, alt: "AOL" },
  { id: 8, src: redblocktree, alt: "RedBlockTree" },
  { id: 9, src: stabilitas, alt: "Stabilitas" },
  { id: 10, src: tokopedia, alt: "Tokopedia" },
  { id: 11, src: venzi, alt: "Venzi" },
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