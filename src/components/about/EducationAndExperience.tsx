"use client";

import React, { Fragment } from "react";
import { timelineItems } from "@/utils/constants";
import Card from "./Card";
import SectionHeader from "../shared/SectionHeader";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const EducationAndExperience = (props: Props) => {
  return (
    <Fragment>
      <SectionHeader
        sectionText="education & experience"
        absoluteText="profile"
      />
      <section className="container mx-auto mt-8 md:mt-10 lg:mt-12">
        <div className=" w-full h-full md:px-6 xl:px-0">
          <div className="relative wrap overflow-hidden h-full">
            <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: "100%", opacity: 1 }}
                exit={{height: 0, opacity: 1}}
                transition={{
                  duration: 1.5
                }}
                className="hidden md:block absolute border-[#0c151a]/20 dark:border-[#f2f2f2]/40 h-[calc(100%-30px)] border left-1/2 md:mb-[30px]"
              ></motion.div>
            </AnimatePresence>
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
