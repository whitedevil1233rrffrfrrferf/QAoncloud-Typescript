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

const SLIDE_BY = 180;

type ClientSliderProps = {
  heading: string;
};

export default function ClientSlider({ heading }: ClientSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const displayLogos = isMobile
    ? clientLogos
    : [...clientLogos, ...clientLogos, ...clientLogos];

  const slide = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const maxOffset = track.scrollWidth - track.parentElement!.offsetWidth;

    setOffset((prev) => {
      let next = dir === "right" ? prev + SLIDE_BY : prev - SLIDE_BY;
      next = Math.max(0, Math.min(next, maxOffset));
      return next;
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
        disabled={offset === 0}
      >
        ‹
      </button>

      {/* Marquee */}
      <div className={classes.marquee}>
        <div
          ref={trackRef}
          className={classes.track}
          style={isMobile ? { transform: `translateX(-${offset}px)` } : undefined}
        >
          {displayLogos.map((logo, index) => (
            <div key={index} className={classes.logoCard}>
              <Image src={logo.src} alt={logo.alt} height={40} className={classes.logo} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className={classes.arrowBtn}
        onClick={() => slide("right")}
        disabled={offset >= (trackRef.current?.scrollWidth ?? 0) - (trackRef.current?.parentElement?.offsetWidth ?? 0)}
      >
        ›
      </button>
    </div>
  </section>
);
}