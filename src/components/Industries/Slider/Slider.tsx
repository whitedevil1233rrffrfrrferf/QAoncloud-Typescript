"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import classes from './clientslider.module.css';

import avanti from '../../../assets/logos/indihood_logo.png';
import stabilitas from '../../../assets/logos/stabilitas.png';
import tokopedia from '../../../assets/logos/tokopedia.png';
import venzi from '../../../assets/logos/venzi.png';

const clientLogos = [
  { id: 1, src: avanti, alt: 'Indihood' },
  { id: 2, src: stabilitas, alt: 'Stabilitas' },
  { id: 3, src: tokopedia, alt: 'Tokopedia' },
  { id: 4, src: venzi, alt: 'Venzi' },
];

interface ClientSliderProps {
  heading: string;
}


const loopLogos = [...clientLogos,...clientLogos];

export default function ClientSlider({ heading }: ClientSliderProps) {
  return (
    <section className={classes.wrapper}>
  <div className={classes.container}>
    <h4 className={classes.heading}>
      {heading}
    </h4>
  </div>

  {/* FULL WIDTH SLIDER */}
  <div className={classes.clientSlider}>
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={40}
      loop
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
    >
      {loopLogos.map((logo, index) => (
        <SwiperSlide key={index} className={classes.clientSlide}>
          <div className={classes.logoCard}>
            <Image
              src={logo.src}
              alt={logo.alt}
              height={40}
              className={classes.logo}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
}
