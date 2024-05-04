"use client";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="">
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
              className="scale-x-[-1]"
            />
          </div>
          <div className="text-center lg:text-start">
            <h5 className="text-xl  md:text-2xl leading-[1.5] text-lightSecondary dark:text-darkSecondary font-bold mb-1.5">
              Sajal Das,
            </h5>
            <h6 className="md:text-lg mb-3 text-[#495057]/80 dark:text-[#f2f2f2]/80">
              Web Developer
            </h6>
            <p className="text-lightSecondary dark:text-darkSecondary mb-3 px-6 lg:px-0">
              Hello I&apos;m Sajal das a passionate Front-End Developer
              committed to creating seamless and user-friendly web experiences.
              With a degree in web development and hands-on experience with
              HTML, CSS, JavaScript, and modern frameworks like ReactJS and
              Next.js, Vue.js, SvelteJs Astro.js,
            </p>
            <p className="text-lightSecondary dark:text-darkSecondary mb-4 px-6 lg:px-0">
              I specialize in building fast, responsive, and visually stunning
              web applications. Having collaborated with diverse teams and
              immersed myself in cutting-edge technologies, I bring a blend of
              creativity and technical expertise to every project. Let&apos;s
              work together to bring your digital vision to life. Reach out, and
              let&apos;s shape the future of the web together!
            </p>
            <button className="uppercase  text-white font-bold bg-darkPrimary border border-darkPrimary dark:bg-lightPrimary dark:border-lightPrimary transition-all duration-200 ease-linear rounded-[3.125rem] px-4 py-2.5 inline-block leading-[21px]">
              Download CV
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-6 md:py-8 lg:py-10 relative mt-16 md:mt-28">
        <div className="text-center uppercase  text-darkPrimary dark:text-darkSecondary text-xl md:text-4xl font-light  leading-[21px] md:pt-2">
          Education & Experience
        </div>
        <p className="uppercase absolute top-1 left-1/2 -translate-x-1/2 font-bold  text-black/10 dark:text-white/10 -z-10 text-6xl md:text-9xl">
          Profile
        </p>
      </section>
      <section className="container mx-auto mt-16 md:mt-24">
        <div className=" w-full h-full md:px-6 xl:px-0">
          <div className="relative wrap overflow-hidden h-full">
            <div
              className="border-2-2 absolute border-[#0c151a]/20 dark:border-[#f2f2f2]/40 h-full border"
              style={{ left: "50%" }}
            ></div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-darkPrimary dark:bg-lightPrimary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-[#f2f2f2]">1</h1>
              </div>
              <div className="order-1 bg-darkPrimary dark:bg-lightPrimary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-2 font-bold text-[#f2f2f2]  text-xl">
                  Saint Philip&apos;s High School &amp; Collage, Dinajpur
                </h3>
                <h3 className="mb-3 font-bold text-[#f2f2f2]/90">
                  2014-2016
                </h3>
                <p className="text-sm leading-snug tracking-wide text-[#f2f2f2]">
                  Completed Higher Secondary Certificate in 2016.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-darkPrimary dark:bg-lightPrimary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-[#f2f2f2] font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-darkPrimary dark:bg-lightPrimary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-[#f2f2f2] text-xl">
                  Lorem Ipsum
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-[#f2f2f2]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-darkPrimary dark:bg-lightPrimary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-[#f2f2f2]">3</h1>
              </div>
              <div className="order-1 bg-darkPrimary dark:bg-lightPrimary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-[#f2f2f2] text-xl">
                  Lorem Ipsum
                </h3>
                <p className="text-sm leading-snug tracking-wide text-darkSecondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-darkPrimary dark:bg-lightPrimary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-[#f2f2f2] font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 bg-darkPrimary dark:bg-lightPrimary rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-[#f2f2f2] text-xl">
                  Lorem Ipsum
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-[#f2f2f2]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
