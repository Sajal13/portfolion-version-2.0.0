"use client";

import React from "react";
import { Option } from "@/utils/data/SelectOptions";
import Select, {
  Props as SelectProps,
  StylesConfig,
  ActionMeta,
  MultiValue,
  SingleValue,
} from "react-select";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  label: string;
  options: Array<Option>;
  value: Option | Option[] | null;
  onChange: (option: Option | Option[] | null) => void;
  isMultiple?: boolean;
  error?: string | boolean | undefined;
  labelClass?: string;
  selectClassNames?: string;
  placeholder: string;
};

const ReactSelectInput = ({
  name,
  label,
  options,
  value,
  onChange,
  isMultiple = false,
  error,
  labelClass,
  selectClassNames,
  placeholder,
}: Props) => {
  const labelClasses = twMerge(
    "capitalize text-darkPrimary text-sm font-medium inline-block mb-2.5 md:mb-3 lg:mb-4",
    labelClass
  );

  const customStyles: StylesConfig<Option, true> = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "38px",
      fontSize: "14px",
      borderRadius: "8px",
      borderColor: error ? "#ef4444" : "var(--color-tertiary)",
      boxShadow: error
        ? "0 0 0 1px #ef4444"
        : state.isFocused
        ? "0 0 0 1px var(--color-tertiary)"
        : "none",
      "&:hover": {
        borderColor: error
          ? "#ef4444"
          : state.isFocused
          ? "var(--color-tertiary)"
          : "var(--color-tertiary)",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#00ADB5"
        : state.isFocused
        ? "#2eb7f5"
        : "#0c151a",
      color: state.isSelected ? "var(--color-dark-primary)" : undefined,
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-tertiary)",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "var(--color-dark-primary)",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "var(--color-danger)",
      ":hover": {
        backgroundColor: "var(--color-danger-secondary)",
        color: "white",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "var(--color-dark-primary)",
    }),
  };

  const handleChange = (
    selectedOption: SingleValue<Option> | MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => {
    if (isMultiple) {
      onChange(selectedOption as Option[]);
    } else {
      onChange(selectedOption as Option);
    }
  };

  return (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      <Select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        options={options}
        isMulti={isMultiple || undefined}
        styles={customStyles}
        className={selectClassNames}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500 mt-2">{error}</span>}
    </div>
  );
};

export default ReactSelectInput;
