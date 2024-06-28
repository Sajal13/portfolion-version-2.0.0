"use client";

import React, { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";

type Props = {};

const Objective = (props: Props) => {
  return (
    <Fragment>
      <AnimatePresence>
        <SectionHeader sectionText="Objective" absoluteText="profile" />
        <section className="container mx-auto pt-10 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            <div className="flex justify-center ">
              <motion.img
                initial={{ y: 100, opacity: 0, scaleX: -1 }}
                whileInView={{ y: 0, opacity: 1, scaleX: -1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                src="/assets/images/illustration/Hero.svg"
                alt=""
                className="scale-x-[-1] dark:drop-shadow-[0_10px_30px_rgba(8,_112,_184,_0.9)] transition-all duration-300 ease-linear"
              />
            </div>
            <div className="text-center lg:text-start overflow-hidden">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ y: 20, opacity: 0 }}
                className="text-sm md:text-base text-lightSecondary dark:text-darkSecondary mb-3 px-6 lg:px-0 text-justify"
              >
                Hello I&apos;m Sajal das a passionate Front-End Developer
                committed to creating seamless and user-friendly web
                experiences. With a degree in web development and hands-on
                experience with HTML, CSS, JavaScript, and modern frameworks
                like ReactJS and Next.js, Vue.js, SvelteJs Astro.js,
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-sm md:text-base text-lightSecondary dark:text-darkSecondary mb-5 px-6 lg:px-0 text-justify"
              >
                I specialize in building fast, responsive, and visually stunning
                web applications. Having collaborated with diverse teams and
                immersed myself in cutting-edge technologies, I bring a blend of
                creativity and technical expertise to every project. Let&apos;s
                work together to bring your digital vision to life. Reach out,
                and let&apos;s shape the future of the web together!
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="uppercase  text-white font-bold bg-lightPrimary border border-lightPrimary dark:bg-tertiary dark:border-tertiary transition-all duration-200 ease-linear rounded-[3.125rem] px-4 py-2.5 inline-block leading-[21px]"
              >
                Download CV
              </motion.button>
            </div>
          </div>
        </section>
      </AnimatePresence>
    </Fragment>
  );
};

export default Objective;
