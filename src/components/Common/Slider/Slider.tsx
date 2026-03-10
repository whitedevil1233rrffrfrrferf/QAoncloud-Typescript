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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ResizeObserver for accurate marquee width after paint
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      const w = el.getBoundingClientRect().width;
      if (w > 0) setMarqueeWidth(w);
    });
    observer.observe(el);
    const w = el.getBoundingClientRect().width;
    if (w > 0) setMarqueeWidth(w);
    return () => observer.disconnect();
  }, [isMobile]);

  // Reset index on breakpoint change
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  const totalCards = clientLogos.length;
  const displayLogos = isMobile
    ? clientLogos
    : [...clientLogos, ...clientLogos, ...clientLogos];

  const slide = (dir: "left" | "right") => {
    if (isMobile) {
      setCurrentIndex(prev => {
        if (dir === "right") return Math.min(prev + 1, totalCards - 1);
        return Math.max(prev - 1, 0);
      });
    } else {
      const track = trackRef.current;
      if (!track) return;
      // desktop marquee — no-op, handled by CSS animation
    }
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes.container}>
        <h4 className={classes.heading}>{heading}</h4>
      </div>

      <div className={classes.sliderContainer}>
        {/* Left Arrow — mobile only */}
        <button
          className={classes.arrowBtn}
          onClick={() => slide("left")}
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Marquee / Slider */}
        <div className={classes.marquee} ref={marqueeRef}>
          <div
            ref={trackRef}
            className={classes.track}
            style={
              isMobile && marqueeWidth > 0
                ? {
                    transform: `translateX(-${currentIndex * marqueeWidth}px)`,
                    width: `${marqueeWidth * totalCards}px`,
                    transition: "transform 0.35s ease",
                    gap: 0,
                  }
                : undefined
            }
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className={classes.logoCard}
                style={
                  isMobile && marqueeWidth > 0
                    ? { width: `${marqueeWidth}px`, minWidth: `${marqueeWidth}px`, flexShrink: 0 }
                    : undefined
                }
              >
                <Image src={logo.src} alt={logo.alt} height={40} className={classes.logo} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow — mobile only */}
        <button
          className={classes.arrowBtn}
          onClick={() => slide("right")}
          disabled={currentIndex >= totalCards - 1}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </section>
  );
}