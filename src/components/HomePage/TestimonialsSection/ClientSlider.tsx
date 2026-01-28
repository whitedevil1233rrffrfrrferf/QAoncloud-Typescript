"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
// {
//     text: "Throughout the project, they demonstrated professionalism, expertise, and effective communication from inquiry to closure. We rate the quality of their work 9 out of 10. The testing team showcased excellent technical skills and attention to detail, achieving thorough testing according to the plan. We appreciate the comprehensive project closure report. Overall, we highly recommend QAonCloud as a software testing company.",
//     name: "Kavitha Sivashankaran",
//     role: " Quality and Regulatory Affairs , G3 MEDICAL SYSTEMS PVT LTD",
//     img: "/59-Kavitha Sivashankaran - G3 -.jpeg", // replace with your image path
//   },
  {
    text: "QAonCIoud has helped us detect app crashes which were affecting our downloads significantly. They have now taken the responsibility of giving a QA clear to all our development sprints. We would like to expand the team further.",
    name: "Gautam Chakravarthy",
    role: "Engineering Manager, Tokopedia",
    img: "/Gautam Chakravarthy.jpg",
  },
  {
    text: "QAonCloud is 40% more cost-effective than other options, the bugs also helped us make design optimization. The team has shown tremendous ownership, has done flawless delivery, and is a very quick learner.",
    name: "Donald Le",
    role: "Tech Director, AOL",
    img: "Donald Le.jpg",
  },
  {
    text: "QAonCloud are fantastic testing partners. They are diligent, pragmatic, and lovely to work with. They gel perfectly with our agile way of working and always happy to recommend better ways of doing things. Could not recommend them highly enough.",
    name: "Toby Hunt",
    role: "Chief Product Officer, Connectworxs",
    img: "Toby Hunt - Connectworxs.jpg", // replace with your image path
  },
  {
    text: "QAonCloud helped us set up and formalise our testing from scratch and helped us deliver a great product to our first customers. Thanks for the great work!",
    name: "Greg Adams",
    role: "CEO, Stabilitas",
    img: "35-greg.jpg",
  },
  {
    text: "QAonCloud beautifully integrates the QA outsourcing process. It is a transparent and reliable process that lets you focus on getting prompt delivery of QA results.",
    name: "Shalini Gupta",
    role: "Engineering Manager, Red Black Tree",
    img: "Shalini Gupta.jpg",
  },
  {
    text: "QAonCIoud has helped us bring a higher level of quality to our web properties. Their team is highly capable and skilled, and bring a level of proficiency to the table that allows them to be immediately productive.",
    name: "Hasnain Baxamoosa",
    role: "Sr. Product Manager for Web Technologies, AlienVault",
    img: "/Hasnain Baxamoosa.jpg",
  },
    {
    text: "Thank you for all the time you have taken off our hands to test our growing product and do it well. We appreciate all the attention to detail and promptness of response.",
    name: "Pratyush Singh",
    role: "Co-founder, Venzi",
    img: "/pratyush singh.jpg",
  },
  {
    text: "QAonCloud team members are flexible and adaptive. The QA testers are collaborative and function effectively with the available data, and can easily adapt to the requirements as and when needed. The team manager maintains high efficiency and productivity among the teams while pushing them to be autonomous and self-sufficient.",
    name: "Ishansh Singh",
    role: "Product Specialist, Avanti",
    img: "/Ishansh - Avanti.jpg",
  },
   {
    text: "QAonCIoud has constantly impressed us with quick turnarounds and detailed reports on testing. In addition, they have accommodated our requests for quick tests and sanity tests within a few hours.",
    name: "Leya Sathyan",
    role: "Program Manager, Indihood",
    img: "/leya - indihood.jpg",
  },
    {
    text: "QAonCloud is a great addition to our team, helping us out with testing and maintaining the quality of our product. They are very flexible and easily adapted to our processes and tools. They are very rigorous during the testing process, pay attention to detail, and always ask questions of our development team if something is unclear.",
    name: "Daan Depaepe",
    role: "Chief Technology Officer, Prompto",
    img: "/Daan Depaep.jpg",
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