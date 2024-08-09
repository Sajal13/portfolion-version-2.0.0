'use client'
import React from "react";
import Countup from "@/components/shared/Countup";


type Props = {
  length: number;
  title: string;
};

const Card = ({ length, title }: Props) => {
  return (
    <div className="text-center w-full h-full bg-lightPrimary dark:bg-tertiary relative z-0 border border-lightPrimary dark:border-tertiary">
      <div className="absolute z-10 bg-black cardClipBox top-0 left-0 w-full h-full" />
      <div className="py-6 md:py-10 lg:py-14 relative z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-7 md:mb-8 lg:mb-10 font-semibold text-lightPrimary dark:text-tertiary">
          <Countup start={0} end={length} duration={5} />
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-darkSecondary font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
