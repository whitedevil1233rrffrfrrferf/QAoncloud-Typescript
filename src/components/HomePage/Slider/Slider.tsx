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

const loopLogos = [...clientLogos];

export default function ClientSlider() {
  return (
    <div className={classes.clientSlider}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={48}
        loop
        speed={4000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
      >
        {loopLogos.map((logo) => (
          <SwiperSlide key={logo.id} className={classes.clientSlide}>
            <Image src={logo.src} alt={logo.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
