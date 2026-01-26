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
    img: "/angela.jpg", // replace with your image path
  },
  {
    text: "Thanks to their comprehensive QA strategy, our application's performance and stability significantly improved post launch.",
    name: "Sarah Lee",
    role: "Lead Developer",
    img: "/angela.jpg",
  },
  {
    text: "The services provided were invaluable in identifying critical issues before product launch, saving us time and resources.",
    name: "John Doe",
    role: "Product Manager",
    img: "/john.jpg",
  },
  {
    text: "Their attention to detail and thorough testing process gave us confidence in delivering a flawless user experience.",
    name: "Mark Johnson",
    role: "CTO",
    img: "/john.jpg", // replace with your image path
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
    img: "/john-doe.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <section className={styles.section}>
      <div className={styles.sliderWrap}>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={false}
          className={styles.swiper}
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 16,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 16,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1.8,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          onSwiper={(swiper) => {
            // Update slides on window resize
            const handleResize = () => {
              swiper.update();
            };
            window.addEventListener('resize', handleResize);
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <h3 className={styles.quote}>{item.text}</h3>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}