"use client";

import React from "react";
import Link from "next/link";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithubAlt } from "react-icons/fa";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="">
      <div className="mt-4 md:mt-5 lg:mt-0 text-center lg:text-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lightSecondary dark:text-darkSecondary mb-3 md:mb-4 lg:mb-5">
          Got a project in <br className="hidden xl:block" />{" "}
          <span className="text-lightPrimary  dark:text-tertiary">mind?</span>
        </h1>
        <h5 className="text-lg md:text-xl lg:text-2xl text-lightSecondary dark:text-darkSecondary font-light xlw-[80%] mx-auto lg:mx-0 mb-3 md:mb-4 lg:mb-5">
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you! Feel free to reach out using the contact form below or
          via email. Let&apos;s discuss how we can collaborate and bring your
          ideas to life.
        </h5>
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-3 lg:gap-6 mb-2.5 lg:mb-3 group cursor-pointer w-fit">
            <span className="text-2xl text-lightPrimary dark:text-tertiary">
              <SiGmail />
            </span>
            <Link
              href={"mailto: sajaldas138900@gmail.com"}
              className="text-lg lg:text-xl font-medium text-lightSecondary dark:text-darkSecondary group-hover:text-lightPrimary group-hover:dark:text-tertiary group-hover:underline"
            >
              sajaldas138900@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-3 lg:gap-6 group cursor-pointer w-fit">
            <span className="text-2xl  text-lightPrimary dark:text-tertiary">
              <FaPhone />
            </span>
            <Link
              href={"tel: +8801831320544"}
              className="text-lg lg:text-xl font-medium text-lightSecondary dark:text-darkSecondary group-hover:text-lightPrimary group-hover:dark:text-tertiary group-hover:underline"
            >
              +8801831320544
            </Link>
          </div>
        </div>
        <div className="flex gap-3 justify-center lg:justify-start items-center mt-8 mb-6 lg:mb-8">
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
      <div className="flex justify-center lg:justify-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/illustration/vector.svg"
          alt=""
          className=" rotate-6 hidden xl:flex w-fit justify-center dark:drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] transition-all duration-300 ease-linear"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/illustration/contact_hero.png"
          alt=""
          className="w-fit flex justify-center dark:drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.9)] transition-all duration-300 ease-linear"
        />
      </div>
    </div>
  );
};

export default Hero;
