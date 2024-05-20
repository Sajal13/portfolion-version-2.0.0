"use client";

import React, { Fragment } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

type Props = {
  title: String;
  duration: String;
  description: String;
  type: number;
  index: number;
  length: number;
};

const Card = ({ title, duration, description, type, index, length }: Props) => {
  return (
    <Fragment>
      <div
        className={` hidden md:flex mb-8  justify-between items-center w-full ${
          index % 2 === 0 ? "" : "flex-row-reverse"
        }`}
      >
        <div className="order-1 w-5/12"></div>
        <div className="z-20 flex items-center order-1 bg-lightPrimary dark:bg-tertiary shadow-xl w-12 h-12 rounded-full transition-colors duration-300 ease-linear">
          <h1 className="mx-auto font-semibold text-2xl text-[#f2f2f2]">
            {type === 1 ? (
              <span>
                <FaGraduationCap />
              </span>
            ) : (
              <span>
                <MdWork />
              </span>
            )}
          </h1>
        </div>
        <div className="order-1 bg-lightPrimary dark:bg-tertiary rounded-lg shadow-xl w-5/12 px-6 py-4 transition-colors duration-300 ease-linear">
          <h3 className="mb-2 font-bold text-[#f2f2f2]  text-xl">{title}</h3>
          <h3 className="mb-3 font-bold text-[#f2f2f2]/90">{duration}</h3>
          <p className="text-sm leading-snug tracking-wide text-[#f2f2f2]">
            {description}
          </p>
        </div>
      </div>
      {/* For small screen */}
      <div className={`md:hidden flex pb-8 gap-4 w-full `}>
        <div
          className={`z-10  order-1 relative after:content-['] after:absolute after:h-full
          after:w-0.5 after:bg-lightPrimary after:dark:bg-tertiary after:left-1/2 after:-translate-x-1/2
        ${index === length ? "after:hidden" : ""}`}
        >
          <div className="flex items-center bg-lightPrimary dark:bg-tertiary shadow-xl w-8 h-8 rounded-full transition-colors duration-300 ease-linear">
            <h1 className="mx-auto font-semibold text-lg text-[#f2f2f2]">
              {type === 1 ? (
                <span>
                  <FaGraduationCap />
                </span>
              ) : (
                <span>
                  <MdWork />
                </span>
              )}
            </h1>
          </div>
        </div>
        <div className="order-1 bg-lightPrimary dark:bg-tertiary rounded-lg shadow-xl px-6 py-4 transition-colors duration-300 ease-linear">
          <h3 className="mb-2 font-bold text-[#f2f2f2]  text-xl">{title}</h3>
          <h3 className="mb-3 font-bold text-[#f2f2f2]/90">{duration}</h3>
          <p className="text-sm leading-snug tracking-wide text-[#f2f2f2]">
            {description}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
