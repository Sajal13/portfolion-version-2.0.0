"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <button className="uppercase relative  text-white font-bold bg-lightPrimary border border-lightPrimary dark:bg-tertiary dark:border-tertiary transition-all duration-200 ease-linear rounded-lg min-w-[9.688rem] max-w-[15rem] max-h-[3rem] px-4 py-4 leading-[21px] overflow-hidden group flex flex-col justify-center items-center mx-6 lg:mx-0">
      <span className="group-hover:translate-y-[-100px] duration-300 ease-linear transition-all group-hover:duration-300 group-hover:ease-linear group-hover:transition-all ">
        {title}
      </span>
      <span className="absolute bottom-0 translate-y-[50px] group-hover:translate-y-[-10px] duration-300 ease-linear transition-all group-hover:duration-300 group-hover:ease-linear group-hover:transition-all text-2xl overflow-hidden">
        <IoIosSend />
      </span>
    </button>
  );
};

export default Button;
