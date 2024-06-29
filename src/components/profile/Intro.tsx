"use client";

import React, { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioItems } from "@/utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import SectionHeader from "../shared/SectionHeader";

const Intro = () => {
  return (
    <Fragment>
      <SectionHeader sectionText="Highlights" absoluteText="showcase" />
      <AnimatePresence>
        <section className="py-10 md:py-12 px-5 md:px-6 grid grid-cols-1 xl:grid-cols-2 xl:gap-8 relative">
          <div className="text-center xl:text-start">
            <motion.h5
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-lightSecondary dark:text-darkSecondary mb-5 md:mb-6"
            >
              Checkout My Works
            </motion.h5>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lightSecondary dark:text-darkSecondary text-sm md:text-base max-w-1/2"
            >
              Welcome to my web design and development portfolio! This showcase
              features a selection of my most notable projects, each
              exemplifying my expertise in creating visually appealing and
              highly functional websites. From responsive web designs and
              user-friendly interfaces to robust backend solutions and seamless
              integrations, my work demonstrates a commitment to quality and
              innovation. Explore each project to discover the design concepts,
              technologies utilized, and the impact they have made. Thank you
              for visiting, and I look forward to sharing my passion for web
              design and development with you.
            </motion.p>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative w-full h-full max-h-[35vh] overflow-hidden hidden xl:block rounded-[10px] shadow"
          >
            <Swiper
              freeMode={true}
              speed={1500}
              slidesPerView={1}
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Adjust delay as needed
              centeredSlides={true}
              loop={true}
              className="mySwiper"
            >
              {portfolioItems.map((item) => (
                <SwiperSlide key={item.id}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-full object-fit"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </section>
      </AnimatePresence>
    </Fragment>
  );
};

export default Intro;
