"use client";

import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithubAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="">
      <section className="border-b border-b-[#dee2e6]">
        <div className="h-[92vh] min-h-[40.5rem] container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="lg:mt-[7.5rem]">
            <h6 className="text-lg sm:text-xl md:text-2xl text-lightSecondary dark:text-darkSecondary font-medium">
              Hello, I&apos;m
            </h6>
            <h4 className="text-7xl text-lightSecondary dark:text-darkSecondary font-bold leading-[1.2]">
              Sajal Das
            </h4>
            <p className="text-lg md:text-[22px] md:leading-[1.5] text-lightSecondary dark:text-darkSecondary">
              A Web Developer
            </p>

            <div className="mt-6 flex items-center">
              <button className="uppercase  text-white font-bold bg-lightPrimary border border-lightPrimary dark:bg-transparent dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear rounded-[3.125rem] px-4 py-2.5 inline-block leading-[21px] mr-2">
                Hire Me
              </button>
              <button className="uppercase  text-white font-bold bg-tertiary border border-tertiary dark:bg-lightPrimary dark:border-lightPrimary transition-all duration-200 ease-linear rounded-[3.125rem] px-4 py-2.5 inline-block leading-[21px]">
                Download CV
              </button>
            </div>

            <div className="flex gap-3 items-center mt-6">
              <Link
                href="#"
                className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
              >
                <RiLinkedinFill />
              </Link>
              <Link
                href="#"
                className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
              >
                <RiInstagramFill />
              </Link>
              <Link
                href="#"
                className="text-[22px] p-1.5 text-lightPrimary dark:text-tertiary bg-transparent border border-lightPrimary dark:border-tertiary hover:bg-lightPrimary dark:hover:bg-tertiary transition-all duration-200 ease-linear hover:text-white dark:hover:text-white rounded-full"
              >
                <FaGithubAlt />
              </Link>
            </div>
          </div>
          <div className=" flex h-full w-full justify-center  lg:flex-col lg:justify-end">
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/illustration/man.svg"
              alt=""
              className="-mb-[1px] dark:drop-shadow-[0px_0px_30px_rgba(173,189,189,0.5)] transition-all duration-300 ease-linear"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[40.625rem] w-[95%] mx-auto flex border border-[#dee2e6] py-5 relative z-20 -mt-[3.5rem] mb-3 bg-white dark:bg-darkPrimary shadow-[0px_0px_30px_rgba(173,189,189,0.4)] rounded-[3.125rem]">
        <div className="text-center border-r border-r-[#dee2e6] w-full">
          <h2 className="text-xl md:text-[2rem] font-medium leading-[1.2] text-lightSecondary dark:text-darkSecondary">
            14
          </h2>
          <p className="text-[#495057]/70 dark:text-[#f2f2f2]/70 text-[13px] md:text-sm leading-[1.5] tracking-[0.6px]">
            Project Completed
          </p>
        </div>
        <div className="text-center border-r border-r-[#dee2e6] w-full">
          <h2 className="text-xl md:text-[2rem] font-medium leading-[1.2] text-lightSecondary dark:text-darkSecondary">
            2
          </h2>
          <p className="text-[#495057]/70 dark:text-[#f2f2f2]/70 text-[13px] md:text-sm leading-[1.5] tracking-[0.6px]">
            Years of Experience
          </p>
        </div>
        <div className="text-center w-full">
          <h2 className="text-xl md:text-[2rem] font-medium leading-[1.2] text-lightSecondary dark:text-darkSecondary">
            5
          </h2>
          <p className="text-[#495057]/70 dark:text-[#f2f2f2]/70 text-[13px] md:text-sm leading-[1.5] tracking-[0.6px]">
            Happy Clients
          </p>
        </div>
      </section>
    </main>
  );
}
