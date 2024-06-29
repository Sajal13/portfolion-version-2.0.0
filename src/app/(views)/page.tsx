"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
// import { RiInstagramFill } from "react-icons/ri";
import { FaGithubAlt } from "react-icons/fa";
import Layout from "@/layouts/Layout";
import Countup from "@/components/shared/Countup";

export default function Home() {
  return (
    <Layout pageTitle="Sajal Das || Home">
      <AnimatePresence>
        <main className="">
          <section className="border-b border-b-[#dee2e6]">
            <div className="h-[92vh] min-h-[40.5rem] container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
              <div className="lg:mt-[7.5rem]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <h6 className="text-lg sm:text-xl md:text-2xl text-lightSecondary dark:text-darkSecondary font-medium">
                    Hello, I&apos;m
                  </h6>
                  <h4 className="text-7xl text-lightSecondary dark:text-darkSecondary font-bold leading-[1.2]">
                    Sajal Das
                  </h4>
                  <p className="text-lg md:text-[22px] md:leading-[1.5] text-lightSecondary dark:text-darkSecondary">
                    A Web Developer
                  </p>
                </motion.div>

                <div className="mt-6 flex items-center overflow-hidden">
                  <Link href={"/contact"}>
                    <motion.button
                      className="uppercase  text-white font-bold bg-lightPrimary border border-lightPrimary dark:bg-transparent dark:border-tertiary hover:bg-transparent dark:hover:bg-tertiary hover:text-lightPrimary dark:hover:text-darkSecondary transition-all duration-200 ease-linear rounded-[3.125rem] px-4 py-2.5 inline-block leading-[21px] mr-2"
                      initial={{ x: -80, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3,
                      }}
                    >
                      Hire Me
                    </motion.button>
                  </Link>
                  <motion.button
                    className="uppercase  text-white font-bold bg-tertiary border border-tertiary dark:bg-lightPrimary dark:border-lightPrimary hover:bg-transparent dark:hover:bg-transparent hover:text-tertiary dark:hover:text-lightPrimary transition-all duration-200 ease-linear rounded-[3.125rem] px-4 py-2.5 inline-block leading-[21px]"
                    initial={{ x: -160, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    Download CV
                  </motion.button>
                </div>
                <div className="flex gap-3 items-center mt-6 overflow-hidden">
                  <motion.div
                    className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
                    initial={{ x: -160, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6,
                    }}
                  >
                    <Link
                      href="https://facebook.com/sajal1das13"
                      target="_blank"
                      className=""
                    >
                      <FaFacebookF />
                    </Link>
                  </motion.div>
                  <motion.div
                    className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
                    initial={{ x: -160, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3,
                    }}
                  >
                    <Link
                      href="https://www.linkedin.com/in/sajaldas13/"
                      target="_blank"
                      className=""
                    >
                      <RiLinkedinFill />
                    </Link>
                  </motion.div>
                  {/* 
                      <motion.div>
                        <Link
                          href="#"
                          className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
                        >
                          <RiInstagramFill />
                        </Link>
                      </motion.div>
                    */}
                  <motion.div
                    className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
                    initial={{ x: -160, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href="https://github.com/Sajal13"
                      target="_blank"
                      className=""
                    >
                      <FaGithubAlt />
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="mb-9 lg:mb-0 flex h-full w-full justify-center  lg:flex-col lg:justify-end ">
                <motion.img
                  src="/assets/images/illustration/man.svg"
                  alt=""
                  className="-mb-[1px] dark:drop-shadow-[0px_0px_30px_rgba(173,189,189,0.5)] transition-all duration-300 ease-linear"
                  initial={{
                    x: -100,
                    opacity: 0,
                    scale: 0.5,
                  }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                  exit={{ x: -100, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </div>
            </div>
          </section>
          <motion.section
            className="max-w-[40.625rem] w-[95%] mx-auto flex border border-[#dee2e6] py-2.5 md:py-5 relative z-20 -mt-[3.5rem] mb-5 lg:mb-3 bg-white dark:bg-darkPrimary shadow-[0px_0px_30px_rgba(173,189,189,0.4)] rounded-[3.125rem]"
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center border-r border-r-[#dee2e6] w-full flex flex-col justify-between">
              <h2 className="text-xl md:text-[2rem] font-medium leading-[1.2] text-lightSecondary dark:text-darkSecondary mb-2 md:mb-1.5">
                <Countup start={0} end={10} duration={5} suffix="+" />
              </h2>
              <p className="text-[#495057]/70 dark:text-[#f2f2f2]/70 text-[13px] md:text-sm md:leading-[1.5] tracking-[0.6px]">
                Project <br className="md:hidden" /> Completed
              </p>
            </div>
            <div className="text-center border-r border-r-[#dee2e6] w-full flex flex-col justify-between">
              <h2 className="text-xl md:text-[2rem] font-medium leading-[1.2] text-lightSecondary dark:text-darkSecondary mb-2 md:mb-1.5">
                <Countup start={0} end={2} duration={2} />
              </h2>
              <p className="text-[#495057]/70 dark:text-[#f2f2f2]/70 text-[13px] md:text-sm md:leading-[1.5] tracking-[0.6px]">
                Years of Experience
              </p>
            </div>
            <div className="text-center w-full flex flex-col justify-between">
              <h2 className="text-xl md:text-[2rem] font-medium leading-[1.2] text-lightSecondary dark:text-darkSecondary mb-2 md:mb-1.5">
                <Countup start={0} end={5} duration={5} suffix="+" />
              </h2>
              <p className="text-[#495057]/70 dark:text-[#f2f2f2]/70 text-[13px] md:text-sm leading-[1.5] tracking-[0.6px]">
                Happy <br className="md:hidden" /> Clients
              </p>
            </div>
          </motion.section>
        </main>
      </AnimatePresence>
    </Layout>
  );
}
