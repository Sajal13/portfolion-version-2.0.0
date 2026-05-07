"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../shared/SectionHeader";
import { MdSimCardDownload } from "react-icons/md";
import Link from "next/link";
import { getExperienceDuration } from "@/utils/getExperienceDuration";

const Objective = () => {
  const totalExperience = getExperienceDuration()
  return (
    <>
      <Fragment key="objective-section">
        <SectionHeader sectionText="Objective" absoluteText="profile" />
        <section className="container mx-auto pt-10 md:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 mb-10 md:mb-14 lg:mb-128">
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
                Hello I&apos;m a Software Engineer with {totalExperience}+ years of experience building modern, production-ready web 
                applications using React.js, Next.js, TypeScript, Svelte, and Tailwind CSS. I enjoy 
                creating scalable frontend systems, crafting smooth user experiences, and turning complex 
                product requirements into clean and maintainable interfaces. My work focuses on performance, 
                accessibility, reusable architecture, and building applications that feel reliable in real-world use.
              </motion.p>
              <Link
                href={"/assets/pdf/Sajal-Das-Software-Engineer.pdf"}
                download={true}
                target="_blank"
              >
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="uppercase relative  text-white font-bold bg-lightPrimary border border-lightPrimary dark:bg-tertiary dark:border-tertiary transition-all duration-200 ease-linear rounded-[3.125rem] min-w-[9.688rem] max-h-[2.688rem] px-4 py-2.5 leading-[21px] overflow-hidden group flex flex-col justify-center items-center mx-6 lg:mx-0"
                >
                  <span className="group-hover:translate-y-[-100px] duration-300 ease-linear transition-all group-hover:duration-300 group-hover:ease-linear group-hover:transition-all ">
                    Download CV
                  </span>
                  <span className="absolute bottom-0 translate-y-[50px] group-hover:translate-y-[-5px] duration-300 ease-linear transition-all group-hover:duration-300 group-hover:ease-linear group-hover:transition-all text-3xl overflow-hidden">
                    <MdSimCardDownload />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </Fragment>
    </>
  );
};

export default Objective;
