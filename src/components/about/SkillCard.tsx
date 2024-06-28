"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  item: any;
};

const SkillCard = ({ item }: Props) => {
  return (
    <AnimatePresence>
      <div className="mb-10 md:mb-14 lg:mb-28">
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
          }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-lightSecondary dark:text-darkSecondary uppercase mb-7 sm:mb-8 md:mb-10 xl:mb-14 text-center"
        >
          {item.header}
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8 md:gap-12 xl:gap-14 overflow-hidden">
          {item.skillSet.map((skill: any, index: number) => (
            <motion.div
              key={skill.id}
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3 + 0.1 * index,
              }}
            >
              <div className="p-6 bg-lightPrimary dark:bg-tertiary rounded-full w-fit mx-auto transition-colors duration-300 ease-linear">
                <i className="text-3xl md:text-5xl lg:text-6xl text-white">
                  {skill.icon}
                </i>
              </div>
              <div className="my-2 md:my-3 lg:my-4">
                <h5 className="text-xl md:text-[22px] lg:text-2xl text-lightSecondary dark:text-darkSecondary font-medium">
                  {skill.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default SkillCard;
