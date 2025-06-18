"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classNames";

type Props = {
  name: string;
  label: string;
  labelClass?: string;
  type: string;
  inputClassNames?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  error?: string | boolean | undefined;
};

const TextInput = ({
  name,
  label,
  labelClass,
  type,
  inputClassNames,
  handleBlur,
  changeHandler,
  value,
  placeholder,
  error,
}: Props) => {
  const labelClasses = twMerge(
    "capitalize",
    "text-darkPrimary",
    "text-sm",
    "font-medium",
    labelClass
  );

  const inputClasses = twMerge(
    "w-full",
    "inline-block",
    "text-sm",
    "py-2",
    "px-4",
    "outline-0",
    "border",
    "border-lightPrimary",
    "dark:border-tertiary",
    "rounded-lg",
    "mt-2",
    "md:mt-2.5",
    "lg:mt-3",
    "focus:border-tertiary",
    "bg-white",
    "text-darkPrimary",
    "placeholder:text-darkPrimary",
    inputClassNames,
    classNames({
      "text-red-500 placeholder:text-red-500 border-red-500": error,
    })
  );

  return (
    <>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        onBlur={handleBlur}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClasses}
      />
      <div className="mt-2">
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </>
  );
};

export default TextInput;
