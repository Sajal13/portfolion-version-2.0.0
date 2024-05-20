"use client";

import React from "react";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
};

const ServiceCard = ({ title, description, imageSrc }: Props) => {
  return (
    <div className=" shadow-[0px_0px_30px_rgba(173,189,189,0.5)] rounded-[10px] group">
      <div
        className={`relative overflow-hidden rounded-t-[10px] w-full max-h-[15.438rem] after:content-[' '] after:absolute after:left-0 after:top-0 after:z-10 after:w-full
        after:h-0  after:bg-[#0c151a]/80 dark:after:bg-[#ff7a57]/80  group-hover:after:h-full after:transition-all after:duration-200 after:ease-linear
      `}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full min-h-[15.438rem] object-cover group-hover:scale-110 transition-all duration-700 ease-in"
        />
        <p
          className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  text-lg md:text-xl text-white absolute z-20 top-1/2 left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
        >
          {title}
        </p>
      </div>
      <div className="px-4 py-6 rounded-b-[10px]">
        <p className="md:text-lg lg:text-xl text-lightSecondary dark:text-darkSecondary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
