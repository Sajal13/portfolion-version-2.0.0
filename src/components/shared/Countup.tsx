"use client";

import React from "react";
import CountUp from "react-countup";

type Props = {
  start: number;
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  decimalPlaces?: number;
};

const Countup = ({
  start,
  end,
  duration,
  prefix,
  suffix,
  decimalPlaces
}: Props) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      prefix={prefix ?? ""}
      suffix={suffix ?? ""}
      decimals={decimalPlaces ?? 0}
    />
  );
};

export default Countup;
