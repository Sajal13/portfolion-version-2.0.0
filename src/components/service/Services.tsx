"use client";

import React, { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { services } from "@/utils/constants";
import ServiceCard from "./ServiceCard";

type Props = {};

const Services = (props: Props) => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 xl:gap-6 2xl:gap-7 py-6 md:py-8 lg:py-10 relative my-16 md:my-28 px-6 xl:px-0">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ scale: 0.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.2, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            className="h-full"
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
