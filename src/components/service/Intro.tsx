"use client";

import React, { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SectionHeader from "../shared/SectionHeader";

type Props = {};

const Intro = (props: Props) => {
  return (
    <Fragment>
      <SectionHeader sectionText="support" absoluteText="service" />
      <AnimatePresence>
        <section className="pt-10 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 place-items-center">
            <div className="text-center lg:text-start">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ y: 20, opacity: 0 }}
                className="text-lightSecondary dark:text-darkSecondary mb-3 px-6 lg:px-0 text-justify first-letter:text-7xl first-letter:font-bold first-letter:text-lightPrimary dark:first-letter:text-tertiary"
              >
                I specialize in providing top-notch web development services
                tailored to your unique needs. Whether you&apos;re a startup
                looking to establish your online presence or an established
                business aiming to revamp your website, I&apos;m here to help.
                From creating sleek and modern designs to implementing robust
                functionality, I offer a comprehensive range of services to
                bring your digital vision to life. Let&apos;s collaborate to
                build a website that not only meets but exceeds your
                expectations, ensuring your online success.
              </motion.p>
            </div>
            <div className="flex justify-center relative">
              <motion.img
                initial={{ y: 100, opacity: 0, scaleX: -1 }}
                whileInView={{ y: 0, opacity: 1, scaleX: -1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src="/assets/images/illustration/service_hero.png"
                alt=""
                className="scale-x-[-1] dark:drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] transition-all duration-300 ease-linear"
              />
              <motion.img
                initial={{ scale: 0.3, opacity: 0, scaleX: -1 }}
                whileInView={{ scale: 1, opacity: 1, scaleX: -1 }}
                exit={{ scale: 0.3, opacity: 0 }}
                transition={{ duration: 0.5 }}
                src="/assets/images/illustration/bg-illustration.svg"
                alt=""
                className="absolute left-0 top-0 -z-10 opacity-60"
              />
            </div>
          </div>
        </section>
      </AnimatePresence>
    </Fragment>
  );
};

export default Intro;
