"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
  {
    text: "Their attention to detail and thorough testing process gave us confidence in delivering a flawless user experience.",
    name: "Mark Johnson",
    role: "CTO",
    img: "/mark.jpg", // replace with your image path
  },
  {
    text: "Thanks to their comprehensive QA strategy, our application's performance and stability significantly improved post launch.",
    name: "Sarah Lee",
    role: "Lead Developer",
    img: "/sarah.jpg",
  },
  {
    text: "The services provided were invaluable in identifying critical issues before product launch, saving us time and resources.",
    name: "John Doe",
    role: "Product Manager",
    img: "/john.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <section className={styles.section}>
      <div className={styles.sliderWrap}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={3}
          centeredSlides
          loop={false}
          className={styles.swiper}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={[
                    styles.slide,
                    isActive && styles.slideActive,
                    isPrev && styles.slidePrev,
                    isNext && styles.slideNext,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.card}>
                    <p className={styles.quote}>“ {item.text} ”</p>

                    <div className={styles.footer}>
                      <img
                        src={item.img}
                        alt={item.name}
                        className={styles.avatar}
                      />
                      <div>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.role}>{item.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}