"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoIosSend } from "react-icons/io";
import classNames from 'classNames';
import { twMerge } from "tailwind-merge";

type buttonSize = 'sm' | 'default' | 'large'
interface Props{
  title: string;
  type?: "submit" | "button";
  buttonSize?: buttonSize;
};

const Button = ({ title, type, buttonSize='default' }: Props) => {
  const buttonClass = twMerge (
    'uppercase',
    'relative',
    'text-white',
    'font-bold',
    'bg-lightPrimary',
    'border',
    'border-lightPrimary',
    'dark:bg-tertiary',
    'dark:border-tertiary',
    'transition-all',
    'duration-200',
    'ease-linear',
    'rounded-lg',
    'max-w-[15rem] ',
    'max-h-[3rem] ',
    'leading-[21px] ',
    'overflow-hidden ',
    'group ',
    'flex',
    'flex-col ',
    'justify-center ',
    'items-center ',
    classNames({
      'min-w-[7rem] max-w-[12rem] py-2.5 px-2.5': buttonSize === 'sm',
      'mix-w-[9.688rem] max-w-[15rem] px-4 py-4 mx-6 lg:mx-0': buttonSize === 'default',
      'w-full px-2 py-2 max-w-full': buttonSize === 'large'
    })
  )
  return (
    <button
      type={type}
      className={buttonClass}
    >
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
