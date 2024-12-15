"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classNames";
import { type Option } from "@/utils/data/SelectOptions";

type Props = {
  name: string;
  label: string;
  labelClass?: string;
  inputClassNames?: string;
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<Option>;
  error?: string | boolean | undefined | string[];
  value: string | string[];
  isMultiple?: boolean;
};

const SelectInput = ({
  name,
  label,
  labelClass,
  inputClassNames,
  changeHandler,
  options,
  error,
  value,
  isMultiple,
}: Props) => {
  const labelClasses = twMerge(
    "capitalize",
    "text-darkPrimary",
    "text-sm",
    "font-medium",
    labelClass
  );

  const selectClasses = twMerge(
    "w-full",
    "block",
    "text-sm",
    "py-2",
    "px-4",
    "border",
    "border-lightPrimary",
    "dark:border-tertiary",
    "outline-0",
    "rounded-lg",
    "mt-2",
    "md:mt-2.5",
    "lg:mt-3",
    "capitalize",
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
      <select
        onChange={changeHandler}
        name={name}
        id={name}
        className={selectClasses}
        value={value}
        multiple={isMultiple}
      >
        {options.map((itm: Option) => (
          <option key={itm.id} value={itm.value} className="capitalize">
            {itm.label}
          </option>
        ))}
      </select>
      <div className="mt-2">
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </>
  );
};

export default SelectInput;
