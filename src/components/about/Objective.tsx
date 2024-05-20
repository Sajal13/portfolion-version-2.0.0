'use client'

import React, { Fragment } from "react";

type Props = {};

const Objective = (props: Props) => {
  return (
    <Fragment>
      <section className="container mx-auto mt-3 py-6 md:py-8 lg:py-10 relative ">
        <div className="text-center uppercase  text-darkPrimary dark:text-darkSecondary text-xl md:text-4xl font-light  leading-[21px] md:pt-2">
          Objective
        </div>
        <p className="uppercase absolute top-1 left-1/2 -translate-x-1/2 font-bold  text-black/10 dark:text-white/10 -z-10 text-6xl md:text-9xl">
          Profile
        </p>
      </section>
      <section className="container mx-auto pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/illustration/Hero.svg"
              alt=""
              className="scale-x-[-1] dark:drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] transition-all duration-300 ease-linear"
            />
          </div>
          <div className="text-center lg:text-start">
            <h5 className="text-xl  md:text-2xl leading-[1.5] text-lightSecondary dark:text-darkSecondary font-bold mb-1.5">
              Sajal Das,
            </h5>
            <h6 className="md:text-lg mb-3 text-[#495057]/80 dark:text-[#f2f2f2]/80">
              Web Developer
            </h6>
            <p className="text-lightSecondary dark:text-darkSecondary mb-3 px-6 lg:px-0 text-justify">
              Hello I&apos;m Sajal das a passionate Front-End Developer
              committed to creating seamless and user-friendly web experiences.
              With a degree in web development and hands-on experience with
              HTML, CSS, JavaScript, and modern frameworks like ReactJS and
              Next.js, Vue.js, SvelteJs Astro.js,
            </p>
            <p className="text-lightSecondary dark:text-darkSecondary mb-4 px-6 lg:px-0 text-justify">
              I specialize in building fast, responsive, and visually stunning
              web applications. Having collaborated with diverse teams and
              immersed myself in cutting-edge technologies, I bring a blend of
              creativity and technical expertise to every project. Let&apos;s
              work together to bring your digital vision to life. Reach out, and
              let&apos;s shape the future of the web together!
            </p>
            <button className="uppercase  text-white font-bold bg-lightPrimary border border-lightPrimary dark:bg-tertiary dark:border-tertiary transition-all duration-200 ease-linear rounded-[3.125rem] px-4 py-2.5 inline-block leading-[21px]">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Objective;
