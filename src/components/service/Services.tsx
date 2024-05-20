"use client";

import React, { Fragment } from "react";

import { services } from "@/utils/constants";
import ServiceCard from "./ServiceCard";

type Props = {};

const Services = (props: Props) => {
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 xl:gap-6 2xl:gap-7 py-6 md:py-8 lg:py-10 relative my-16 md:my-28 px-6 xl:px-0">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Services;
