"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  index: number;
};

const ServiceCard = ({ title, description, imageSrc, index }: Props) => {
  return (
    <AnimatePresence>
      <div className=" shadow-[0px_0px_30px_rgba(173,189,189,0.5)] rounded-[10px] group h-full">
        <div
          className={`relative overflow-hidden rounded-t-[10px] w-full max-h-[15.438rem] after:content-[' '] after:absolute after:left-0 after:top-0 after:z-10 after:w-full
        after:h-0  after:bg-[#0c151a]/80 dark:after:bg-[#ff7a57]/80  group-hover:after:h-full after:transition-all after:duration-200 after:ease-linear
      `}
        >
          <motion.img
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={imageSrc}
            alt={title}
            className="h-full w-full min-h-[15.438rem] object-cover group-hover:scale-110 transition-all duration-700 ease-in"
          />
          <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  text-lg md:text-xl text-white absolute z-20 top-1/2 left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
            {title}
          </p>
        </div>
        <div className="px-4 py-6 rounded-b-[10px]">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
            exit={{ y: 20, opacity: 0 }}
            
            className="md:text-lg lg:text-xl text-lightSecondary dark:text-darkSecondary"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceCard;
