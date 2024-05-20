"use client";

import React, { Fragment } from "react";
import { timelineItems } from "@/utils/constants";
import Card from "./Card";

type Props = {};

const EducationAndExperience = (props: Props) => {
  return (
    <Fragment>
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
            <div className="hidden md:block absolute border-[#0c151a]/20 dark:border-[#f2f2f2]/40 h-[calc(100%-30px)] border left-1/2"></div>
            {timelineItems.map((item, index, array) => (
              <Card
                key={item.id}
                title={item.title}
                duration={item.duration}
                description={item.description}
                type={item.type}
                index={index}
                length={array.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EducationAndExperience;
