"use client";
import React from "react";
import Countup from "@/components/shared/Countup";
import { motion } from "framer-motion";
import Link from "next/link";

type Transition = {
  duration: number;
  delay: number;
};

type Props = {
  length: number;
  title: string;
  bgColor: string;
  icons: React.ReactNode;
  transition: Transition;
  url: string;
};

const Card = ({ url, length, title, bgColor, icons, transition }: Props) => {
  return (
    <Link href={url}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className={`grid grid-cols-4 gap-4 md:gap-5 lg:gap-6 rounded-lg ${bgColor} dark:shadow-[0px_0px_30px_rgba(173,189,189,0.5)] transition-all duration-300 ease-linear`}
      >
        <div className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-black/15 flex items-center justify-center">
          <span className="text-2xl md:text-3xl lg:text-5xl text-white">
            {icons}
          </span>
        </div>
        <div className="flex flex-col justify-center p-2 md:p-3 lg:p-4 col-span-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2 lg:mb-2.5 font-semibold text-lightSecondary dark:text-darkSecondary">
            <Countup start={0} end={length} duration={5} />
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-lightSecondary dark:text-darkSecondary font-semibold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
