"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classNames";

type Props = {
  name: string;
  label: string;
  labelClass: string;
  type: string;
  inputClassNames: string;
  clickHandler: () => void;
  value: string;
  placeholder: string;
  error?: boolean
};

const TextInput = ({
  name,
  label,
  labelClass,
  type,
  inputClassNames,
  clickHandler,
  value,
  placeholder,
  error
}: Props) => {
  const labelClasses = twMerge(
    "text-white",
    "md:text-lg",
    "lg:text-xl",
    'font-medium',
    labelClass,
    classNames({
      'text-red-500': error
    })
  );

  const inputClasses = twMerge(
    'py-2',
    'px-4',
    'text-lightSecondary',
    'dark:text-darkSecondary',
    'placeholder:text-lightSecondary',
    'dark:placeholder:text-darkSecondary',
    'border',
    'rounded-lg',
    'mt-2',
    'md:mt-2.5',
    'lg:mt-3',
    inputClassNames,
    classNames({
      'text-red-500 placeholder:text-red-500': error
    })
  )

  return (
    <>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onClick={clickHandler}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClasses}
      />
    </>
  );
};

export default TextInput;
