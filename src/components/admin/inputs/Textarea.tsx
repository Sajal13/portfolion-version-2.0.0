"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classNames";

type Props = {
  name: string;
  label: string;
  labelClass?: string;
  inputClassNames?: string;
  changeHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value: string;
  placeholder: string;
  error?: string | boolean | undefined;
  row: number;
};

const Textarea = ({
  name,
  label,
  labelClass,
  inputClassNames,
  handleBlur,
  changeHandler,
  value,
  placeholder,
  error,
  row,
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
    "resize-none",
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
      <textarea
        name={name}
        value={value}
        onChange={changeHandler}
        onBlur={handleBlur}
        rows={row}
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

export default Textarea;
