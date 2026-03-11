"use client";

import Image from "next/image";
import classes from "./clientslider.module.css";
import { useRef, useState, useEffect } from "react";

import Indihood from "../../../assets/logos/indihood_logo.png";
import avanti from "../../../assets/logos/avanti.png";
import stabilitas from "../../../assets/logos/stabilitas.png";
import tokopedia from "../../../assets/logos/tokopedia.png";
import venzi from "../../../assets/logos/venzi.png";
import connectWorks from "../../../assets/logos/connect_works.png";
import notebene from "../../../assets/logos/notebene.png";
import simplifyMoney from "../../../assets/logos/simplify_money.png";
import auxo from "../../../assets/logos/auxo.png";
import aol from "../../../assets/logos/AOI.png";
import redblocktree from "../../../assets/logos/redblocktree.png";
// ── New logos ──
import akyrian       from "../../../assets/logos/Akyrian.png";
import alienvault    from "../../../assets/logos/Alienvault.png";
import arcitecto     from "../../../assets/logos/Arcitecto.png";
import aroundMedia   from "../../../assets/logos/AroundMedia.jpg"; 
import doxa          from "../../../assets/logos/doxa.png";
import foraTravel    from "../../../assets/logos/FORATravel.png";
import iqHive        from "../../../assets/logos/IQ-Hive_logo.png";
import panther       from "../../../assets/logos/panther.png";
import prompto       from "../../../assets/logos/prompto.png";
import solidNetworks from "../../../assets/logos/Solid-Networks.png";

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
  { id: 11, src: venzi,         alt: "Venzi" },
  // ── New logos ──
  { id: 12, src: akyrian,       alt: "Akyrian" },
  { id: 13, src: alienvault,    alt: "Alienvault" },
  { id: 14, src: arcitecto,     alt: "Arcitecto" },
  { id: 15, src: aroundMedia,   alt: "Around Media" }, 
  { id: 16, src: doxa,          alt: "Doxa" },
  { id: 17, src: foraTravel,    alt: "FORA Travel" },
  { id: 18, src: iqHive,        alt: "IQ-Hive" },
  { id: 19, src: panther,       alt: "Panther" },
  { id: 20, src: prompto,       alt: "Prompto" },
  { id: 22, src: solidNetworks, alt: "Solid State Networks" },
];

const SLIDE_BY = 180;

type ClientSliderProps = {
  heading: string;
};

export default function ClientSlider({ heading }: ClientSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (marqueeRef.current) {
        setCardWidth(marqueeRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const displayLogos = isMobile
    ? clientLogos
    : [...clientLogos, ...clientLogos, ...clientLogos];

  const maxIndex = clientLogos.length - 1;

  const slide = (dir: "left" | "right") => {
    setCardIndex((prev) => {
      const next = dir === "right" ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(next, maxIndex));
    });
  };

  return (
  <section className={classes.wrapper}>
    <div className={classes.container}>
      <h4 className={classes.heading}>
        {heading}
      </h4>
    </div>

    <div className={classes.sliderContainer}>
      {/* Left Arrow */}
      <button
        className={classes.arrowBtn}
        onClick={() => slide("left")}
        disabled={cardIndex === 0}
      >
        ‹
      </button>

      {/* Marquee */}
      <div className={classes.marquee} ref={marqueeRef}>
        <div
          ref={trackRef}
          className={classes.track}
          style={isMobile ? { transform: `translateX(-${cardIndex * cardWidth}px)` } : undefined}
        >
          {displayLogos.map((logo, index) => (
            <div
              key={index}
              className={classes.logoCard}
              style={isMobile && cardWidth ? { width: `${cardWidth}px`, minWidth: `${cardWidth}px` } : undefined}
            >
              <Image src={logo.src} alt={logo.alt} width={180} height={60} className={classes.logo} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className={classes.arrowBtn}
        onClick={() => slide("right")}
        disabled={cardIndex === maxIndex}
      >
        ›
      </button>
    </div>
  </section>
);
}