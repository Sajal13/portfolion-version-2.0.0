"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classNames";

type Props = {
  name: string;
  label: string;
  labelClass?: string;
  inputClassNames?: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isMultiple?: boolean;
  error?: string | boolean | undefined | string[];
};

const FileInput = ({
  name,
  label,
  labelClass,
  inputClassNames,
  handleBlur,
  changeHandler,
  isMultiple = false,
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
    "my-2",
    "md:my-2.5",
    "lg:my-3",
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
        type="file"
        onChange={changeHandler}
        onBlur={handleBlur}
        name={name}
        id={name}
        className={inputClasses}
        multiple={isMultiple}
        accept="image/*"
      />
      {error && <span className="text-red-500">{error}</span>}
    </>
  );
};

export default FileInput;
