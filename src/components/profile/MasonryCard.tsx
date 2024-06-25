"use client";

import React, { useState } from "react";

import { getHoverDirectionName } from "@/utils/getDirectionName";

type Props = {
  item: any;
  clickHandler: () => void;
  classNames?: string;
};

const MasonryCard = ({ item, clickHandler, classNames }: Props) => {
  const [hoverDirection, setHoverDirection] = useState("");

  const handleMouseEnter = (e: {
    clientX: any;
    clientY: any;
    currentTarget: any;
  }) => {
    const directionName = getHoverDirectionName(e);
    setHoverDirection(`hover-in-${directionName}`);
  };

  const handleMouseLeave = (e: {
    clientX: any;
    clientY: any;
    currentTarget: any;
  }) => {
    const directionName = getHoverDirectionName(e);
    setHoverDirection(`hover-out-${directionName}`);
  };

  return (
    <div
      className={`relative overflow-hidden group border rounded-lg cursor-pointer `}
      onClick={clickHandler}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.masonryImage} alt="Hover Image" className="w-full" />
      <div
        className={`absolute inset-0 bg-[#0c151a]/80 dark:bg-[#ff7a57]/80 flex items-center justify-center text-white text-2xl transition-all duration-300 transform ${hoverDirection}`}
        style={{ opacity: hoverDirection.includes("hover-in") ? 1 : 0 }}
      ></div>
      <p className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out  text-lg md:text-xl text-white absolute z-50 top-1/2 left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2">
        {item.title}
      </p>
    </div>
  );
};

export default MasonryCard;
