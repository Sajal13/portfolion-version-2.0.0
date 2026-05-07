"use client";

import React from "react";
import CountUp from "react-countup";

type Props = {
  start: number;
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
  decimal?: number;
};

const Countup = ({ start, end, duration, prefix, suffix, decimal }: Props) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      prefix={prefix ? prefix : ""}
      suffix={suffix ? suffix : ""}
      decimal={decimals}
    />
  );
};

export default Countup;
