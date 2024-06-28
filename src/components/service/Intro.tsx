import React, { Fragment } from "react";

type Props = {};

const Intro = (props: Props) => {
  return (
    <Fragment>
      <section className="mt-3 py-6 md:py-8 lg:py-10 relative">
        <div className="text-center uppercase  text-darkPrimary dark:text-darkSecondary text-xl md:text-4xl font-light  leading-[21px] md:pt-2">
          Support
        </div>
        <p className="uppercase absolute top-1 left-1/2 -translate-x-1/2 font-bold  text-black/10 dark:text-white/10 -z-10 text-6xl md:text-9xl">
          Service
        </p>
      </section>
      <section className="pt-10 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 place-items-center">
          <div className="text-center lg:text-start">
            <p
              className="text-lightSecondary dark:text-darkSecondary mb-3 px-6 lg:px-0 text-justify first-letter:text-7xl first-letter:font-bold first-letter:text-lightPrimary dark:first-letter:text-tertiary"
            >
              I specialize in providing top-notch web development
              services tailored to your unique needs. Whether you&apos;re a
              startup looking to establish your online presence or an
              established business aiming to revamp your website, I&apos;m here
              to help. From creating sleek and modern designs to implementing
              robust functionality, I offer a comprehensive range of services to
              bring your digital vision to life. Let&apos;s collaborate to build
              a website that not only meets but exceeds your expectations,
              ensuring your online success.
            </p>
          </div>
          <div className="flex justify-center relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/illustration/service_hero.png"
              alt=""
              className="scale-x-[-1] dark:drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] transition-all duration-300 ease-linear"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/illustration/bg-illustration.svg"
              alt=""
              className="absolute left-0 top-0 -z-10 opacity-60"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
